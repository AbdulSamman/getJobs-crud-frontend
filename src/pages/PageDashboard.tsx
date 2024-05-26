import { AppContext } from "../AppContext";
import { useContext } from "react";

export const PageDashboard = () => {
  const { jobsLowdb } = useContext(AppContext);
  return (
    <div className="pageDashboard">
      <h2>Todos:</h2>
      <div className="todos">
        {jobsLowdb.map((jobLowdb) => {
          return (
            <ul className="toDo" key={jobLowdb.id}>
              <li>
                {jobLowdb.toDo.text}{" "}
                <a href={jobLowdb.toDo.url} target="_blank">
                  {jobLowdb.title} at {jobLowdb.company}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
