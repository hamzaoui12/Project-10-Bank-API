import argentBankLogo from "@/assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiUrl, endpoints, routes } from "@/routes";
import { useDispatch, useSelector } from "react-redux";
import { signOut, setUserData } from "@/utils/store";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.session.token);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    if (token) {
      fetch(apiUrl + endpoints.profile, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: null,
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error(
            "Impossible de récupérer les informations de l'utilisateur"
          );
        }

        const data = await response.json();
        dispatch(setUserData(data.body));
      });
    }
  }, [dispatch, token]);

  return (
    <div className="w-full h-20 flex items-center justify-between px-6">
      <Link to={routes.home}>
        <img src={argentBankLogo} alt="Logo" className="w-52" />
      </Link>

      {token ? (
        <div className="flex gap-8">
          <Link className="flex gap-3 items-center" to={routes.user}>
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ fontSize: "1.2em" }}
            />
            <span className="font-semibold">{user.firstName}</span>
          </Link>
          <div className="flex gap-3 items-center" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOut} style={{ fontSize: "1.2em" }} />
            <span className="font-semibold cursor-pointer">Sign Out</span>
          </div>
        </div>
      ) : (
        <Link className="flex items-center gap-4" to={routes.signIn}>
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "1.2em" }} />
          <span className="font-semibold cursor-pointer">Sign In</span>
        </Link>
      )}
    </div>
  );
};
