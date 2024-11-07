import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { apiUrl, endpoints, routes } from "@/routes";

const User = () => {
  const token = useSelector((state) => state.session.token);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});

  const handleEditName = () => {
    setEdit((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(apiUrl + endpoints.profile, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
      }),
    });

    if (!response.ok) {
      throw new Error("Impossible de mettre à jour les informations");
    }

    setEdit(false);
  };

  useEffect(() => {
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
      setUser(data.body);
    });
  }, [setUser, token]);

  if (!token) {
    return <Navigate to={routes.signIn} />;
  }
  return (
    <main className="flex flex-col items-center bg-[#12002b] h-full">
      {edit ? (
        <div className="py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Welcome back
          </h1>
          <form onSubmit={handleSubmit} className="pt-4 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 text-lg border border-gray-600"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 text-lg border border-gray-600"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-1/2 mx-auto">
              <button
                className="bg-[#00bc77] text-white font-bold py-2 px-4 border border-[#00bc77]"
                onClick={handleEditName}
                type="button"
              >
                Cancel
              </button>
              <button
                className="bg-[#00bc77] text-white font-bold py-2 px-4 border border-[#00bc77]"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-white mb-8 text-center pt-8">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <span className="text-3xl font-bold mt-2">
              {user.firstName} {user.lastName}!
            </span>
          </div>
          <button
            className="bg-[#00bc77] text-white font-bold py-2 px-4 mt-4 border border-[#00bc77]"
            onClick={handleEditName}
          >
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>

      <section className="bg-white border border-black w-[80%] mx-auto mb-8 p-6 flex flex-col text-left box-border md:flex-row">
        <div className="flex-1 w-full">
          <h3 className="text-base font-normal m-0 p-0">
            Argent Bank Checking (x8349)
          </h3>
          <p className="text-4xl font-bold m-0">$2,082.79</p>
          <p className="m-0">Available Balance</p>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button className="w-full md:w-[200px] py-2 text-lg font-bold bg-[#00bc77] text-white border border-[#00bc77]">
            View transactions
          </button>
        </div>
      </section>

      <section className="bg-white border border-black w-[80%] mx-auto mb-8 p-6 flex flex-col text-left box-border md:flex-row">
        <div className="flex-1 w-full">
          <h3 className="text-base font-normal m-0 p-0">
            Argent Bank Savings (x6712)
          </h3>
          <p className="text-4xl font-bold m-0">$10,928.42</p>
          <p className="m-0">Available Balance</p>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button className="w-full md:w-[200px] py-2 text-lg font-bold bg-[#00bc77] text-white border border-[#00bc77]">
            View transactions
          </button>
        </div>
      </section>

      <section className="bg-white border border-black w-[80%] mx-auto mb-8 p-6 flex flex-col text-left box-border md:flex-row">
        <div className="flex-1 w-full">
          <h3 className="text-base font-normal m-0 p-0">
            Argent Bank Credit Card (x8349)
          </h3>
          <p className="text-4xl font-bold m-0">$184.30</p>
          <p className="m-0">Current Balance</p>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button className="w-full md:w-[200px] py-2 text-lg font-bold bg-[#00bc77] text-white border border-[#00bc77]">
            View transactions
          </button>
        </div>
      </section>
    </main>
  );
};

export default User;
