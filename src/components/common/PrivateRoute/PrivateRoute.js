import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
