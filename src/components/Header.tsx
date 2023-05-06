import logo from "../assets/logo.svg";
import menu from "../assets/icon-hamburger.svg";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="" />
        </div>

        <nav></nav>

        <div>
          <button>
            <img src={menu} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
