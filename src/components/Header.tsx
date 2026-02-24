import Branding from "./Branding";
import Nav from "./Nav";

export function Header() {
  return (
    <div className="header-container flex justify-between pb-3 border-b border-c-jetblack/20">
      <Branding />
      <Nav
        pages={[
          { title: "Home", path: "/" },
          { title: "Archive", path: "/archive" },
          { title: "About", path: "/about" },
        ]}
      />
    </div>
  );
}

export default Header;
