import "./lastest.css";
import { useEffect } from "react";
// Data
import { articlesList } from "../../data/lastest";
import { Artical } from "./lastest-artical";

export function ListArtical() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let articals = articlesList.map((a, i) => {
    return <Artical key={a.id} artical={a} index={i} />;
  });
  return (
    <div className="list-artical">
      <h2 className="title">Articals</h2>
      <div className="lastest container">{articals}</div>
    </div>
  );
}
