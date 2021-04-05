import "../styles/globals.css";
import Header from "../compontents/Header";
import Footer from "../compontents/Footer";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </content>
    </AuthProvider>
  );
}

export default MyApp;
