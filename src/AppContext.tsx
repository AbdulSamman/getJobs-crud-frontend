import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IAppProvider, IAppContext, IJobRaw } from "./interfaces";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext<IAppContext>({} as IAppContext);

const title = "hello";
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [rawJobs, setRawJobs] = useState<IJobRaw[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await axios.get(`${backendUrl}/jobs`)).data;
      setRawJobs(response);
    })();
  }, []);
  console.log(rawJobs);

  return (
    <AppContext.Provider
      value={{
        title,
      }}>
      {children}
    </AppContext.Provider>
  );
};
