import { FcSearch } from "react-icons/fc";
import { SiNike } from "react-icons/si";
import { FiAlignJustify } from "react-icons/fi";
import Navbarbs from "./Navbar/Navbar";
import "./Header.scss";

export default function Header() {
  function show() {
    const loginForm = document.querySelector(".navbars");
    if (loginForm.classList.contains("disable") == true) {
      loginForm.classList.remove("disable");
    } else {
      loginForm.classList.add("disable");
    }
  }

  function showSearch() {
    const loginForm = document.querySelector(".searching");
    if (loginForm.classList.contains("disable") == true) {
      loginForm.classList.remove("disable");
    } else {
      loginForm.classList.add("disable");
    }
  }

  return (
    <>
      <header>
        <div>
          <div className="header">
            <div>
              <FiAlignJustify
                style={{
                  margin: 5 + "px",
                  position: "relative",
                  fontSize: 2 + "rem",
                }}
                className="login"
                onClick={show}
              ></FiAlignJustify>
              <div className="login-form disable">
                <h6>You are in anonymous mode</h6>
                <button
                  style={{
                    width: 100 + "%",
                  }}
                >
                  Login
                </button>
              </div>
            </div>

            <SiNike
              style={{
                margin: 5 + "px",
                fontSize: 3 + "rem",
              }}
            ></SiNike>

            <div
              style={{
                margin: 5 + "px",
              }}
            >
              <FcSearch
                style={{
                  fontSize: 2 + "rem",
                }}
                onClick={showSearch}
                className="icon-search"
              ></FcSearch>
              <input
                placeholder="Typing..."
                className="searching disable"
                style={{
                  border: 'none',
                  padding: 4 + 'px',
                  borderRadius: 3 + 'px',              
                  marginRight: 8 + 'px'
                }}
              ></input>
            </div>
          </div>
        </div>
      </header>
      <div className="navbars disable">
        <Navbarbs></Navbarbs>
      </div>
    </>
  );
}
