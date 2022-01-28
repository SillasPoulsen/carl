import { useEffect, useState } from "react";
function Navbar({ themeToggler, theme }) {
  const [buttonText, setButtonText] = useState("🍭");

  const handleClick = () => {
    themeToggler();
    if (buttonText === "🍭") {
      setButtonText("🦇");
    } else {
      setButtonText("🍭");
    }
  };
  return (
    <nav>
      <p className="Logo">CPVO</p>
      <button className={`btn${theme}`} onClick={handleClick}>
        Theme: {buttonText}
      </button>
    </nav>
  );
}

export default Navbar;
