import { useContext, useState } from "react";
import { UserContext } from "../../../lib/contexts/UserContext";
import { useUser } from "../../../lib/hooks/useUser";
import { Link } from "react-router";
import { KeyRound, Loader, UserIcon } from "lucide-react";

export function UserDisplay({}) {
  const [imgLoading, setImgLoading] = useState<boolean>(true);

  const { user } = useContext(UserContext);
  const { logOut } = useUser();

  if (user)
    return (
      <div className="flex flex-col items-center justify-center mr-2 w-14 h-22 my-auto">
        <Link
          to={"/profile"}
          className="flex flex-col items-center justify-center"
        >
          <div className="user-avatar bg-c-burntpeach size-13 rounded-full flex items-center justify-center">
            {user.avatar_url && (
              <>
                <div className="image-container p-1 bg-white rounded-full size-11 flex items-center justify-center overflow-hidden">
                  <img
                    src={user.avatar_url}
                    className={`${imgLoading && "hidden"} object-contain`}
                    onLoad={() => setImgLoading(false)}
                  />
                  {imgLoading && (
                    <Loader className="size-12 animate-spin text-c-burntpeach" />
                  )}
                </div>
              </>
            )}
            {!user.avatar_url && <UserIcon className="text-white size-9" />}
          </div>
          <p className="text-sm truncate w-14">{user.name}</p>
        </Link>

        <button
          onClick={logOut}
          className="sm:text-sm cursor-pointer text-c-duskblue"
        >
          Sign out
        </button>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center mr-2 w-14 h-22 my-auto">
      <Link
        to={"/login"}
        className="flex flex-col items-start justify-between h-full"
      >
        <div className="user-avatar bg-c-burntpeach size-12 rounded-full flex items-center justify-center">
          <KeyRound className="text-white size-9" />
        </div>

        <span className="sm:text-sm cursor-pointer text-c-duskblue w-full text-center">
          Log in
        </span>
      </Link>
    </div>
  );
}

export default UserDisplay;
