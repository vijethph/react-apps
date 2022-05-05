// nextjs also supports dynamic naming of subfolders for pages
import UserDetail from "../../components/users/UserDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const userDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.user.title}</title>
        <meta name="description" content="Describe users" />
      </Head>
      <UserDetail
        image={props.user.image}
        title={props.user.title}
        address={props.user.address}
        description={props.user.description}
      />
    </Fragment>
  );
};

// getStaticPaths is a function which should be exported if the page is a dynamic page (ex: [someId].js) and getStaticProps is being used (not getServerSideProps)
export async function getStaticPaths() {
  // this function is used to describe all the dynamic properties for which the dynamic page should be pre-generated (all possible values for a dynamic page identifier)
  // returns an array called "paths" which contains all objects (one object per version of this dynamic page)
  // each object should contain "params" property which describes required dynamic key-value pairs
  // example:
  //   paths: [
  //       {
  //         params: {
  //           userId: "m1",
  //         },
  //       },
  //       {
  //         params: {
  //           userId: "u2",
  //         },
  //       },
  //      .... and so on
  //     ],
  // also returns a property called "fallback" which tells next.js whether paths[] contains all supported parameter values, or just some of them
  // so, if fallback=false and user enters a different value which isn't mentioned in paths[], then 404 is returned

  let allPaths = [];

  try {
    const client = await MongoClient.connect(
      "mongodb://mongo:27017/somedb?retryWrites=true&w=majority"
    );
    const db = client.db();

    const usersCollection = db.collection("users");

    // for find(), first arg is filter criteria - empty obj means find all
    // second arg is which fields should be extracted
    const userIds = await usersCollection.find({}, { _id: 1 }).toArray();

    allPaths = userIds.map((userId) => ({
      params: {
        userId: userId._id.toString(),
      },
    }));

    client.close();
  } catch (error) {
    console.error(error);
  }

  // if fallback=true, then nextjs immediately returns empty page for non-mentioned value and pull down dynamically generated content after that
  // if fallback=blocking, then nextjs doesn't render anything until content is fetched

  return {
    fallback: "blocking", // false means paths[] contains all supported values, and true/blocking means paths[] may not contain everything
    paths: allPaths,
  };
}

// here context holds "params" property which is an object where keys are the names enclosed in [], and values are the actual values encoded in the URL

export async function getStaticProps(context) {
  const userId = context.params.userId;
  let user = {};

  try {
    const client = await MongoClient.connect(
      "mongodb://mongo:27017/somedb?retryWrites=true&w=majority"
    );
    const db = client.db();

    const usersCollection = db.collection("users");

    // for find(), first arg is filter criteria - empty obj means find all
    // second arg is which fields should be extracted
    const selectedUser = await usersCollection.findOne({
      _id: ObjectId(userId),
    });
    user = {
      id: selectedUser._id.toString(),
      title: selectedUser.title,
      image: selectedUser.image,
      address: selectedUser.address,
      description: selectedUser.description,
    };

    client.close();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user,
    },
  };
}

export default userDetails;
