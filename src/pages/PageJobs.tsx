import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../App.scss";

export const PageJobs = () => {
  const { title } = useContext(AppContext);
  return (
    <div className="pageJobs">
      <p>welcome to the Jobs page</p>
      <p>{title}</p>
    </div>
  );
};
