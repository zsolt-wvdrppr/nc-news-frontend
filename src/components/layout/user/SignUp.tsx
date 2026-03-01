import { UserRoundPlus } from "lucide-react";
import { Link } from "react-router";

export function SignUp({}) {
  return (
    <div className="mt-32">
      <h1 className="text-c-duskblue mx-auto w-fit">Signup page</h1>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <UserRoundPlus className="mx-auto size-12 text-c-burntpeach" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-c-jetblack">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-c-duskblue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-c-duskblue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-duskblue"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?
            <Link
              to="/login"
              className="font-semibold text-c-duskblue hover:text-c-duskblue"
            >
              {" Sign in here."}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
