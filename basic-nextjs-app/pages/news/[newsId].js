import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  // this router object has properties and methods for programmatic navigation
  // router.query has property based on the identifier name set for the file (newsId) which provides the value set on the URL
  // common usecase: use this value to send a request to backend api to dynamically fetch required data

  return <h1>Hello Details for {router.query.newsId}</h1>;
};

export default Details;

/*
Defining routes by using predefined paths is not always enough for complex applications. In Next.js we can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Any route like /post/1, /post/abc, etc. will be matched by pages/post/[pid].js. The matched path parameter will be sent as a query parameter to the page, and it will be merged with the other query parameters.

In order to extract the dynamic value entered in URL params, Next.js provides a special hook
*/
