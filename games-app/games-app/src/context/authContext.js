import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };
  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

//with Hook
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

//with HOC

export const withAuth = (Component) => {
  const WrapperComponent = (props) => {
    const context = useContext(AuthContext);

    return <Component {...props} auth{context} />
  }

  return WrapperComponent;
}
