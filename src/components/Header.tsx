import Branding from "./Branding";
import Nav from "./Nav";
import UserDisplay from "./layout/user/UserDisplay";

export function Header() {
  return (
    <div className="header-container mb-12 flex justify-between pb-3 border-b border-c-jetblack/20">
      <Branding />
      <Nav
        pages={[
          { type: "page", title: "Home", path: "/" },
          { type: "page", title: "Archive", path: "/archive" },
          { type: "page", title: "About", path: "/about" },
        ]}
      />
      <UserDisplay />
    </div>
  );
}

export default Header;
