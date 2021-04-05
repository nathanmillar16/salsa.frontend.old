import "../styles/globals.css";
import Header from "../compontents/Header";
import Footer from "../compontents/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </content>
  );
}

export default MyApp;
