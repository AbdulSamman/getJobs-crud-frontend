import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../App.scss";
import { IRawSkill } from "../interfaces";
import React from "react";

export const PageJobs = () => {
  const { rawJobs } = useContext(AppContext);
  return (
    <div className="pageJobs">
      <div className="jobs">
        <h2>There are {rawJobs.length} jobs:</h2>
        {rawJobs.map((rawJob) => {
          return (
            <div key={rawJob.id} className="job">
              <h3 className="title">
                {" "}
                <a href={rawJob.url} target="_blank">
                  {rawJob.title}
                </a>
              </h3>
              <div className="company">{rawJob.company}</div>
              <div className="todo">NEXT TASK: {rawJob.publicationDate}</div>
              <div className="description">{rawJob.description}</div>
              <div className="skills">
                {rawJob.skills.map((skill: IRawSkill, index) => {
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
