import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../App.scss";

export const PageJobs = () => {
  const { rawJobs } = useContext(AppContext);
  return (
    <div className="pageJobs">
      <p>welcome to the Jobs page</p>

      <div className="jobs">
        {rawJobs.map((rawJob, index) => {
          return (
            <div key={index} className="job">
              <h3 className="title">{rawJob.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
