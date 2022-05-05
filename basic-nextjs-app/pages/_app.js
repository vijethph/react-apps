import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        rtl={false}
        theme="colored"
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;

/*
this is a root component which receives Component and pageProps from Next.js
Component - actual page content that should be rendered
pageProps - specific props that pages may be receiving

if there are any components that need to be wrapped around all the pages, then those can be used in _app.js
*/
