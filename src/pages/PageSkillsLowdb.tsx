import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../App.scss";
import { ISkill } from "../interfaces";

export const PageSkillsLowdb = () => {
  const { skillsLowdb, handleToggleSkill } = useContext(AppContext);
  console.log("dado", skillsLowdb);

  return (
    <div className="pageSkills pageSkillsLowdb">
      <div className="skills">
        {skillsLowdb.map((skill: ISkill, index) => (
          <div
            className={`skill ${skill.skill.name ? "found" : "missing"}`}
            key={index}>
            <h3
              className="skillName"
              onClick={() => {
                handleToggleSkill(skill);
              }}>
              {" "}
              {skill.total}x{" "}
              {skill.skill.name ? skill.skill.name : skill.skill.idCode}
            </h3>
            {skill.isOpen && (
              <div className="row">
                <p className="description">
                  {skill.skill.description
                    ? skill.skill.description
                    : "add to backend src/data/db.json"}

                  <a href={skill.skill.url} target="_blank">
                    {skill.skill.url && <span>info</span>}
                  </a>
                  <a href={skill.lookUp} target="_blank">
                    <span>lookup</span>
                  </a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
