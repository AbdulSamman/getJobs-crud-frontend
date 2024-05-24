import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../App.scss";

import { IRawSkill } from "../interfaces";
import React from "react";

export const PageJobsLowdb = () => {
  const { jobsLowdb, deleteJob } = useContext(AppContext);

  return (
    <div className="pageJobsLowdb pageJobs">
      <div className="jobs">
        <h2>There are {jobsLowdb.length} jobs:</h2>
        {jobsLowdb.map((jobLowdb) => {
          return (
            <div key={jobLowdb.id} className="job">
              <h3 className="title">
                {" "}
                <a href={jobLowdb.url} target="_blank">
                  {jobLowdb.title}
                </a>
                <button onClick={() => deleteJob(jobLowdb)}>X</button>
              </h3>
              <div className="company">{jobLowdb.company}</div>
              <div className="todo">NEXT TASK: {jobLowdb.publicationDate}</div>
              <div className="description">{jobLowdb.description}</div>
              <div className="skills">
                {jobLowdb.skills.map((skill: IRawSkill, index) => {
                  return (
                    <React.Fragment key={index}>
                      {skill.name ? (
                        <div className="skill found">
                          <div className="name">
                            <a href={skill.url} target="_blank">
                              {skill.name}
                            </a>{" "}
                            - {skill.description}
                          </div>
                        </div>
                      ) : (
                        <div className="skill missing">
                          <div className="name">
                            <a
                              href={`https://www.google.com/search?q=${skill.idCode}+web+development`}
                              target="_blank">
                              {" "}
                              {skill.idCode}{" "}
                            </a>{" "}
                            - ADD TO BACKEND: \src\data\skills.json
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
