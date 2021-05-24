import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRole } from "../store/user/selectors";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const role = useSelector(userRole);
    return (
      <Route
        {...rest}
        render={(props) =>
          role === "admin" ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/courses", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };