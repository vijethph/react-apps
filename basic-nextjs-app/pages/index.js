import Head from "next/head"; // allows to add elements to head section of webpage
import { useEffect, useState, Fragment } from "react";
import UserList from "../components/users/UserList";
import { MongoClient } from "mongodb"; // if some package is used only in getServerSideProps or getStaticProps, then it will not be part of client-side bundle

const DUMMY = [
  {
    gender: "male",
    name: { title: "Mr", first: "Zachary", last: "Watkins" },
    location: {
      street: { number: 9997, name: "Church Road" },
      city: "Armagh",
      state: "Berkshire",
      country: "United Kingdom",
      postcode: "BL2 0UG",
      coordinates: { latitude: "-66.8285", longitude: "-160.8261" },
      timezone: { offset: "-2:00", description: "Mid-Atlantic" },
    },
    email: "zachary.watkins@example.com",
    id: { name: "NINO", value: "KC 25 13 81 V" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    },
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Sasha", last: "Mercier" },
    location: {
      street: { number: 9203, name: "Rue des Ecrivains" },
      city: "Marseille",
      state: "Ardèche",
      country: "France",
      postcode: 20701,
      coordinates: { latitude: "53.8891", longitude: "142.4450" },
      timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" },
    },
    email: "sasha.mercier@example.com",
    id: { name: "INSEE", value: "1NNaN24667340 60" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Arlene", last: "Arnold" },
    location: {
      street: { number: 6879, name: "Forest Ln" },
      city: "Caldwell",
      state: "Arizona",
      country: "United States",
      postcode: 33115,
      coordinates: { latitude: "-52.1908", longitude: "96.0085" },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "arlene.arnold@example.com",
    id: { name: "SSN", value: "863-83-2473" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/69.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
    },
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Amber", last: "Jenkins" },
    location: {
      street: { number: 5820, name: "Oaks Cross" },
      city: "Edinburgh",
      state: "County Antrim",
      country: "United Kingdom",
      postcode: "D74 6ZN",
      coordinates: { latitude: "62.7846", longitude: "121.9690" },
      timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
    },
    email: "amber.jenkins@example.com",
    id: { name: "NINO", value: "EP 97 91 66 C" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg",
    },
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Sheila", last: "Turner" },
    location: {
      street: { number: 22, name: "Northaven Rd" },
      city: "Greeley",
      state: "Maryland",
      country: "United States",
      postcode: 38279,
      coordinates: { latitude: "15.6423", longitude: "117.8418" },
      timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
    },
    email: "sheila.turner@example.com",
    id: { name: "SSN", value: "132-67-0241" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/76.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg",
    },
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Maya", last: "Castro" },
    location: {
      street: { number: 7168, name: "Brick Kiln Road" },
      city: "Cambridge",
      state: "Central",
      country: "United Kingdom",
      postcode: "LK04 2EY",
      coordinates: { latitude: "38.4310", longitude: "138.0965" },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "maya.castro@example.com",
    id: { name: "NINO", value: "HE 09 45 63 Q" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/62.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg",
    },
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Edward", last: "Bell" },
    location: {
      street: { number: 7597, name: "W Belt Line Rd" },
      city: "Visalia",
      state: "West Virginia",
      country: "United States",
      postcode: 60910,
      coordinates: { latitude: "58.3417", longitude: "99.5948" },
      timezone: { offset: "-11:00", description: "Midway Island, Samoa" },
    },
    email: "edward.bell@example.com",
    id: { name: "SSN", value: "571-81-4263" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
    },
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Maëlys", last: "Lacroix" },
    location: {
      street: { number: 4208, name: "Place de L'Abbé-Georges-Hénocque" },
      city: "Courbevoie",
      state: "Vosges",
      country: "France",
      postcode: 91488,
      coordinates: { latitude: "-70.4512", longitude: "-127.3940" },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "maelys.lacroix@example.com",
    id: { name: "INSEE", value: "2NNaN14207403 54" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/85.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
    },
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Eddie", last: "Lucas" },
    location: {
      street: { number: 5567, name: "E North St" },
      city: "Hollywood",
      state: "Ohio",
      country: "United States",
      postcode: 15085,
      coordinates: { latitude: "-60.4857", longitude: "42.9632" },
      timezone: { offset: "-2:00", description: "Mid-Atlantic" },
    },
    email: "eddie.lucas@example.com",
    id: { name: "SSN", value: "047-34-5595" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
    },
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Hanaé", last: "Robert" },
    location: {
      street: { number: 3212, name: "Rue Cyrus-Hugues" },
      city: "Saint-Denis",
      state: "Pyrénées-Atlantiques",
      country: "France",
      postcode: 13121,
      coordinates: { latitude: "-84.9652", longitude: "-54.3966" },
      timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" },
    },
    email: "hanae.robert@example.com",
    id: { name: "INSEE", value: "2NNaN80145885 34" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
    },
  },
];

const Home = (props) => {
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   // useEffect will be fired after the component is mounted
  //   // so first time: component is rendered, but there's no data
  //   // useEffect fetches data, changes state, then component is re-rendered
  //   // this may cause problems with SEO, as actual data is missing in HTML during first render
  //   // after page is rendered, React will take over and hydrate the page (turn it into a SPA and load it with data / update the page in the "client")
  //   // next.js has features to allow pre-rendering a page with required data for which it needs to wait. It provides 2 forms of pre-rendering: static site generation (SSG) and server-side rendering (SSR)
  //   // for SSG, pages are pre-rendered when the app is built for production (not on-the-fly when a request reaches the server)
  //   setIsLoading(true);
  //   fetch(
  //     "https://randomuser.me/api/?results=10&nat=gb,us,fr&inc=gender,name,email,location,id,picture"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("fetched users");
  //       let filteredUsers = json.results.map((user) => ({
  //         id: user.id.value,
  //         image: user.picture.large,
  //         title: `${user.name.title} ${user.name.first} ${user.name.last}`,
  //         address: `${user.location.city} ${user.location.state} ${user.location.country}`,
  //       }));
  //       setUsers(filteredUsers);
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // let dummyUsers = DUMMY.map((user) => ({
  //   id: user.id.value,
  //   image: user.picture.large,
  //   title: `${user.name.title}. ${user.name.first} ${user.name.last}`,
  //   address: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
  // }));

  // return isLoading ? (
  //   <div className="loader">Loading...</div>
  // ) : (
  //   <UserList users={users} />
  // );

  // for SSG/SSR, it is used like this (without the need for useState & useEffect hookss):
  return (
    <Fragment>
      <Head>
        <title>Random Users</title>
        <meta name="description" content="Browse a huge list of random users" />
      </Head>
      <UserList users={props.users} />
    </Fragment>
  );
};

// for SSG, if we wish to wait for data before pages are pre-rendered, export a function called getStaticProps() in files of pages folder (works only there)
// Next.js calls this function first before it renders the page component
export async function getStaticProps() {
  // used to get props/data before the pages are rendered
  // doesn't show up on client side, as it is executed during build process
  // should return an object with property "props" which is received by page component

  let data = [];
  try {
    // let response = await fetch(
    //   "https://randomuser.me/api/?results=10&nat=gb,us,fr&inc=gender,name,email,location,id,picture"
    // );
    // let json = await response.json();
    // data = json.results.map((user) => ({
    //   id: user.id.value,
    //   image: user.picture.large,
    //   title: `${user.name.title} ${user.name.first} ${user.name.last}`,
    //   address: `${user.location.city} ${user.location.state} ${user.location.country}`,
    // }));

    const client = await MongoClient.connect(
      "mongodb://mongo:27017/somedb?retryWrites=true&w=majority"
    );
    const db = client.db();

    const usersCollection = db.collection("users");

    const users = await usersCollection.find().toArray();
    data = users.map((user) => ({
      id: user._id.toString(),
      title: user.title,
      address: user.address,
      image: user.image,
    }));

    client.close();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      users: data,
    },
    revalidate: 10, // regenerates the page every 10 seconds as long as requests come in, number should be set based on data update frequency
  };
}

// One problem with SSG: data fetched in it could be outdated. ex: if API response (from DB) has more items than initial deployment, then they would not show up as it has already deployed
// so, if data from DB/API does change frequently, add the "revalidate" property, which unlocks a feature called Incremental Static Generation
// revalidate needs a number, number of seconds Next.js will wait until it regenerates the page for an incoming request (not just during build)

// if the goal is to regenerate the page for every request (not for 10/100 seconds), then use getServerSideProps - which runs on the server (not during build), for every request
// can be used to run code that uses secret credentials which shouldn't be exposed to users. There's no "revalidate" option here
// context is a parameter which is available to both getStaticProps and getServerSideProps which provides access to request and response objects (for server only) which can be used for authentication, cookies etc.
// export async function getServerSideProps(context) {
//   let request = context.req;
//   let response = context.res; // this response isn't returned here; props is returned instead

//   let dummyUsers = DUMMY.map((user) => ({
//     id: user.id.value,
//     image: user.picture.large,
//     title: `${user.name.title}. ${user.name.first} ${user.name.last}`,
//     address: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
//   }));

//   return {
//     props: {
//       users: dummyUsers,
//     },
//   };
// }

export default Home;

/*
Next.js is a flexible React framework that gives a building blocks to create fast web applications. It has a lot of built-in features (ex: routing) that can help solve common problems and clear guidance on how to use those features. We can still write React code and use React features, Next.js enhances React apps and adds more features

Key features:
- Server-side rendering: preparing the content of a page on the server instead of client. useful for SEO. React has features for server-side rendering, but it can be tricky to set up. Next.js provides automatic page pre-rendering.
- File-based routing: React requires storing all different pages in a separate folder / maintaining code for react-router. Next.js defines pages and routes based on files and folders present, instead of code.
- Full-stack framework: Next.js allows us to easily add backend code to the React project, in order to access file system or database by implementing backend API.

public folder holds images and other assets that may be used in next.js app. There's no index.html file present, as Next.js allows us to determine when a page should be pre-rendered; so the main page is pre-rendered only when a request reaches the server

Inside pages folder,
news.js and news/index.js are same.

the only reserved folder names are pages, public and styles. others can be named as per our requirements. Other folders will not be loaded as pages automatically, but can be used in jsx code of pages

CSS modules allows us to scope css styles to a particular React component, which is supported out-of-the-box for next.js projects
*/
