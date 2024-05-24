import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  IAppProvider,
  IAppContext,
  IJobRaw,
  IRawSkill,
  ISkill,
} from "./interfaces";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [rawJobs, setRawJobs] = useState<IJobRaw[]>([]);
  const [rawSkills, setRawSkills] = useState<{ [key: string]: IRawSkill }>({});
  const [jobsLowdb, setJobsLowdb] = useState<IJobRaw[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await axios.get(`${backendUrl}/jobs`)).data;
      setRawJobs(response.reverse());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get<{ [key: string]: IRawSkill }>(`${backendUrl}/skills`)
      ).data;
      const _skills: { [key: string]: ISkill } = {};
      Object.entries(response).forEach(([key, rawSkill]) => {
        _skills[key] = {
          ...rawSkill,
          isOpen: false,
        };
        if (rawSkill.name) {
          rawSkill.url = `https://www.google.com/search?client=firefox-b-d&q=web+development+${rawSkill.name}`;
        } else {
          rawSkill.url = `https://www.google.com/search?client=firefox-b-d&q=web+development+${rawSkill.idCode}`;
        }
      });
      setRawSkills(_skills);
    })();
  }, []);

  // lowdb REST

  useEffect(() => {
    (async () => {
      const response = (await axios.get(`${backendUrl}/jobsLowdb`)).data;
      setJobsLowdb(response.reverse());
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
      } else {
        console.log(deletedJob);
      }
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
      }}>
      {children}
    </AppContext.Provider>
  );
};
