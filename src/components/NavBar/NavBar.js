import { style } from "../../Style/Style.js";

export default function NavBar() {
  return (
    <div style={style.navbarContainer}>
      <div style={style.navbar}>
        <a style={style.navbarText} href="/">
          HOME
        </a>
        <a style={style.navbarText} href="/about">
          ABOUT
        </a>
        <a style={style.navbarText} href="/services">
          SERVICES
        </a>
        <a style={style.navbarText} href="/connect">
          CONNECT
        </a>
      </div>
    </div>
  );
}
