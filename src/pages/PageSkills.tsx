import { AppContext } from "../AppContext";
import { useContext } from "react";

export const PageSkills = () => {
  const { rawSkills } = useContext(AppContext);
  return (
    <div className="pageSkills">
      <div className="skills">
        {Object.keys(rawSkills).map((idCode) => (
          <div className="skill" key={idCode}>
            <h3 className="skillName">{rawSkills[idCode].name}</h3>
            <p className="description">{rawSkills[idCode].description}</p>
            <p className="skillUrl">
              <a href={rawSkills[idCode].url} target="_blank">
                {rawSkills[idCode].url}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
