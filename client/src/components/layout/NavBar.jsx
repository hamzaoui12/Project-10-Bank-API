import argentBankLogo from "@/assets/argentBankLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "@/routes";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@/utils/store";

export const NavBar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="w-full h-20 flex items-center justify-between px-6">
      <Link to={routes.home}>
        <img src={argentBankLogo} alt="Logo" className="w-52" />
      </Link>

      {token ? (
        <div className="flex gap-8">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ fontSize: "1.2em" }}
            />
            <span className="font-semibold">Tony</span>
          </div>
          <div className="flex gap-3 items-center" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOut} style={{ fontSize: "1.2em" }} />
            <span className="font-semibold">Sign Out</span>
          </div>
        </div>
      ) : (
        <Link className="flex items-center gap-4" to={routes.signIn}>
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "1.2em" }} />
          <span className="font-semibold">Sign In</span>
        </Link>
      )}
    </div>
  );
};
