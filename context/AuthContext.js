import { createContext, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  /**
   * Adds email to user
   * @param {string} email
   */
  const loginUser = async (email) => {
    setUser({ email });
  };

  /**
   * Sets user to null
   */
  const logoutUser = async () => {
    setUser(null);
    router.push("/");
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
