import { KeyRound, LogOut, User } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import UserContext from "../../../lib/contexts/UserContext";
import { useUser } from "../../../lib/hooks/useUser";

export function LogIn({}) {
  const { validateUser, logOut } = useUser();
  const { user } = useContext(UserContext);

  const handleLogin = (formData: FormData) => {
    const username = formData.get("username");
    if (!username) return;
    validateUser(username.toString());
  };

  if (user) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-c-duskblue mx-auto w-fit">Login page</h1>
        <p className="text-c-duskblue mx-auto w-fit">
          {`You're currently logged in as `}
          <span className="font-semibold">{user.username}</span>
          {"."}
        </p>
        <button
          className="flex w-fit mx-auto gap-2 justify-center rounded-md bg-c-duskblue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-c-duskblue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-duskblue"
          onClick={logOut}
        >
          <LogOut className="size-6" /> Log out
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-c-duskblue mx-auto w-fit">Login page</h1>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <KeyRound className="mx-auto size-12 text-c-burntpeach" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-c-jetblack">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-c-jetblack"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  name="username"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-c-jetblack outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-c-duskblue sm:text-sm/6"
                />
              </div>
            </div>

            {/*
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-c-jetblack"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-c-jetblack outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-c-duskblue sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-c-jetblack"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-c-duskblue hover:text-c-duskblue"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-c-jetblack outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-c-duskblue sm:text-sm/6"
                />
              </div>
            </div>
*/}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-c-duskblue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-c-duskblue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-duskblue"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="font-semibold text-c-duskblue hover:text-c-duskblue"
            >
              {" Sign up here."}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
