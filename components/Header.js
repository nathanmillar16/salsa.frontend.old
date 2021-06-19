// import { useContext } from "react";
import Link from "next/link";
// import AuthContext from "../context/AuthContext";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  // const { user } = useContext(AuthContext);

  return (
    <>
      <div className={styles.nav}>
        {!isHome && (
          <div className={styles.back}>
            <a href="#" onClick={goBack}>
              {"<"}Back
            </a>
          </div>
        )}
        <div className={styles.title}>
          <Link href="/">
            <a>
              <h1>Salsology</h1>
            </a>
          </Link>
        </div>
      </div>

      {/* <div classname={styles.auth}>
        {user ? (
          <Link href="/account">
            <a>{user.email}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </div> */}
    </>
  );
};

export default Header;
