import { AppContext } from "../AppContext";
import { useContext } from "react";

export const PageSkills = () => {
  const { rawSkills } = useContext(AppContext);
  return (
    <div className="pageSkills">
      <p>welcome to the Skills page</p>
      <div className="skills">
        {Object.keys(rawSkills).map((idCode) => (
          <div className="skill" key={idCode}>
            <h3 className="skillName">{rawSkills[idCode].name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
