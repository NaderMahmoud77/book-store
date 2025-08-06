import "./header.css";


import { TitleHeader } from "./titleHeader";
import { NaveBar } from "./nav-bar";

export let Header = () => {
  return (
    <div className="header">
      <TitleHeader />
      <NaveBar />
    </div>
  );
};
