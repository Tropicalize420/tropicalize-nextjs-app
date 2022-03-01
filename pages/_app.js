import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
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
