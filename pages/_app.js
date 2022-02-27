import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "../context/AppProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
