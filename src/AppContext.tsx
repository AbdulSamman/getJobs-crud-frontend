import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IAppProvider, IAppContext, IJobRaw, IRawSkill } from "./interfaces";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext<IAppContext>({} as IAppContext);

const title = "hello";
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [rawJobs, setRawJobs] = useState<IJobRaw[]>([]);
  const [rawSkills, setRawSkills] = useState<{ [key: string]: IRawSkill }>({});

  useEffect(() => {
    (async () => {
      const response = (await axios.get(`${backendUrl}/jobs`)).data;
      setRawJobs(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get<{ [key: string]: IRawSkill }>(`${backendUrl}/skills`)
      ).data;
      setRawSkills(response);
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        title,
        rawJobs,
        rawSkills,
      }}>
      {children}
    </AppContext.Provider>
  );
};
