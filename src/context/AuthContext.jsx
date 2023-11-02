import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";

// Create the context outside the component
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const signUpwithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };

  const data = {
    name: "Noman",
    signUpwithEmail,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthContextProvider };
