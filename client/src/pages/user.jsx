import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { apiUrl, endpoints, routes } from "@/routes";
import { transactions } from "@/utils/transactions";
import { Transactions } from "@/components/ui/Transactions";
import { setUserData } from "@/utils/store";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.session.token);
  const [edit, setEdit] = useState(false);
  const [localUser, setLocalUser] = useState({ ...user });
  const [error, setError] = useState(null);

  const handleEditName = () => {
    setLocalUser({ ...user });
    setEdit((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalUser((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        firstName: localUser.firstName,
        lastName: localUser.lastName,
      }),
    });

    if (!response.ok) {
      setError("Impossible de mettre à jour les informations");
      return;
    }

    const newUserData = await response.json();
    setEdit(false);
    dispatch(setUserData(newUserData.body));
  };

  if (!token) {
    return <Navigate to={routes.home} />;
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
                value={localUser.firstName || ""}
                onChange={handleInputChange}
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 text-lg border border-gray-600"
                value={localUser.lastName || ""}
                onChange={handleInputChange}
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
            onClick={(event) => {
              event.preventDefault();
              handleEditName();
            }}
          >
            Edit Name
          </button>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <h2 className="sr-only">Accounts</h2>

      {transactions.map((transaction, index) => {
        return <Transactions key={index} {...transaction} />;
      })}
    </main>
  );
};

export default User;
