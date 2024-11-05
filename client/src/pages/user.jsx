import { routes } from "@/routes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const User = () => {
  const token = useSelector((state) => state.session.token);

  if (!token) {
    return <Navigate to={routes.signIn} />;
  }

  return <div></div>;
};

export default User;
