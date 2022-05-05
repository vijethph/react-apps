import { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        {/* <li>
          <a href="/news/nextjs-is-good">Nextjs is good</a>
        </li> */}
        <li>
          <Link href="/news/nextjs-is-good">Nextjs is good</Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;

// to navigate between pages, using <a> tag works, but it makes a request to render a new page everytime it is clicked - which will lose all state and context saved
// <Link> prevents browser default behaviour of sending a new request every time a link is clicked
