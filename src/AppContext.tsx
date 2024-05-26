import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  IAppProvider,
  IAppContext,
  IJobRaw,
  ISkill,
  ISkillsJson,
} from "./interfaces";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [rawJobs, setRawJobs] = useState<IJobRaw[]>([]);
  const [rawSkills, setRawSkills] = useState<{ [key: string]: ISkillsJson }>(
    {}
  );
  const [jobsLowdb, setJobsLowdb] = useState<IJobRaw[]>([]);
  const [skillsLowdb, setSkillsLowdb] = useState<ISkill[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await axios.get(`${backendUrl}/jobs`)).data;
      setRawJobs(response.reverse());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get<{ [key: string]: ISkillsJson }>(`${backendUrl}/skills`)
      ).data;

      const _skills: { [key: string]: any } = {};
      Object.entries(response).forEach(([key, rawSkill]) => {
        _skills[key] = {
          ...rawSkill,
          isOpen: false,
        };
        // if (rawSkill.name) {
        //   rawSkill.url = `zaza`;
        // } else {
        //   rawSkill.url = `https://www.google.com/search?client=firefox-b-d&q=web+development+${rawSkill.idCode}`;
        // }
      });

      setRawSkills(response);
    })();
  }, []);

  // lowdb REST

  useEffect(() => {
    (async () => {
      const response = (await axios.get(`${backendUrl}/jobsLowdb`)).data;
      setJobsLowdb(response.reverse());
    })();
  }, []);

  const loadTotalSkills = async () => {
    const responseTotal: ISkill[] = (
      await axios.get(`${backendUrl}/skillsLowdb`)
    ).data;

    responseTotal.sort(
      (a: ISkill, b: ISkill) => Number(b.total) - Number(a.total)
    );

    responseTotal.forEach((skill) => {
      skill.isOpen = false;
      skill.lookUp = skill.skill.name
        ? `https://www.google.com/search?client=firefox-b-d&q=web+development+${skill.skill.name}`
        : `https://www.google.com/search?client=firefox-b-d&q=web+development+${skill.skill.idCode}`;
    });
    setSkillsLowdb(responseTotal);
  };

  const handleToggleSkill = (skill: ISkill) => {
    skill.isOpen = !skill.isOpen;
    setSkillsLowdb([...skillsLowdb]);
  };

  useEffect(() => {
    (async () => {
      await loadTotalSkills();
    })();
  }, []);

  const deleteJob = async (job: IJobRaw) => {
    try {
      const deletedJob = (
        await axios.delete(`${backendUrl}/jobsLowdb/${job.id}`)
      ).data;
      if ((deletedJob.status = 200)) {
        const _jobs = jobsLowdb.filter((m) => m.id !== job.id);
        setJobsLowdb([..._jobs]);
      }
      // Skills akutalisieren after delete
      await loadTotalSkills();
    } catch (error: any) {
      console.error(`ERROR: ${error.message}`);
      const message = error.response.data.message;
      if (message) {
        console.error(`ERROR: ${message}`);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        rawJobs,
        rawSkills,
        jobsLowdb,
        deleteJob,
        skillsLowdb,
        handleToggleSkill,
      }}>
      {children}
    </AppContext.Provider>
  );
};
