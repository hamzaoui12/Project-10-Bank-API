import { Link } from "react-router-dom";
import { routes } from "@/routes";

const Error = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <h1 className="text-4xl xl:text-6xl font-bold">Page not found !</h1>
      <Link
        to={routes.home}
        className="text-[#00bc77] underline underline-offset-4 hover:scale-105"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default Error;
