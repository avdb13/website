import { useState } from "preact/hooks";
import DayIcon from "./DayIcon";
import NightIcon from "./NightIcon";
import type { ComponentProps } from "preact/compat";

// if (
//   typeof window !== "undefined" &&
//   window.matchMedia("(prefers-color-scheme: dark)")
// ) {
//   window.localStorage.setItem("dark_mode", "");
//   document.documentElement.classList.toggle("dark");
// }

const DarkModeButton = (props: ComponentProps<"button">) => {
  const [dark, setDark] = useState(!!window.localStorage.getItem("dark_mode"));

  const handleClick = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
    dark
      ? window.localStorage.removeItem("dark_mode")
      : window.localStorage.setItem("dark_mode", "");
  };

  return (
    <div className={"button-wrapper"}>
      <button {...props} onClick={handleClick} className="theme-button">
        {dark ? <DayIcon /> : <NightIcon />}
      </button>
    </div>
  );
};

export default DarkModeButton;
