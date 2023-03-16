import { style } from "../../Style/Style.js"

export default function NavBar() {
  return (
    <div style={style.navbarContainer}>
      <div style={style.navbar}>
        <a style={style.navbarText} href="/">
          Home
        </a>
        <a style={style.navbarText} href="/about">
          About
        </a>
        <a style={style.navbarText} href="/services">
          Services
        </a>
        <a style={style.navbarText} href="/connect">
          Connect
        </a>
      </div>
    </div>
  );
}
