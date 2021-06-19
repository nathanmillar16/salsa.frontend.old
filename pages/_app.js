import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    // <AuthProvider>
    <content>
      {/*  <Router> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* </Router> */}
    </content>
    // </AuthProvider>
  );
}

export default MyApp;
