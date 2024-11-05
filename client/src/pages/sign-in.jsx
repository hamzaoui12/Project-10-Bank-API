import { apiUrl, endpoints, routes } from "@/routes";
import { signIn } from "@/utils/store";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;

    if (!email || !password) {
      return;
    }

    const response = await fetch(apiUrl + endpoints.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Les identifiants sont incorrects");
    }

    const data = await response.json();
    dispatch(signIn({ token: data.body.token }));
  };

  if (token) {
    return <Navigate to={routes.user} />;
  }

  return (
    <main className="flex flex-col items-center bg-[#13002B] h-full">
      <section className="box-border bg-white w-[300px] mt-12 p-8 flex flex-col gap-1">
        <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "1.2em" }} />
        <h1 className="text-center text-2xl">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-left mb-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-2 text-lg border border-gray-600"
            />
          </div>
          <div className="flex flex-col text-left mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 text-lg border border-gray-600"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="ml-1 font-light">
              Remember me
            </label>
          </div>
          <button
            className="w-full py-2 text-lg font-bold mt-4 bg-[#00bc77] text-white border border-[#00bc77]"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
