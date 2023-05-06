import logo from "../assets/logo.svg";
import menu from "../assets/icon-hamburger.svg";

export default function Header() {
  return (
    <>
      <header className="absolute z-10 p-8 w-full flex items-start justify-start">
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
