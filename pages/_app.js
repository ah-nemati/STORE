import "../node_modules/tailwindcss/dist/tailwind.css";
import font from "../styles/fonts.css";
import { DataProvider } from "../redux/Store";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
