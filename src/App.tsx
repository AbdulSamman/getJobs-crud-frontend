import "./App.scss";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { PageJobs } from "./pages/PageJobs";
import { PageDashboard } from "./pages/PageDashboard";
import { PageSkills } from "./pages/PageSkills";
import { PageJobsLowdb } from "./pages/PageJobsLowdb";
import { PageWelcome } from "./pages/PageWelcome";

const App = () => {
  return (
    <>
      <h1>
        {" "}
        <a href="/">Get a Job Site</a>
      </h1>
      <nav>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/jobs"}>Jobs</NavLink>
        <NavLink to={"/skills"}>Skills</NavLink>
        <NavLink to={"/jobsLowdb"}>JobsLowdb</NavLink>
      </nav>
      <Routes>
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/jobs" element={<PageJobs />} />
        <Route path="/skills" element={<PageSkills />} />
        <Route path="/jobsLowdb" element={<PageJobsLowdb />} />
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/" element={<Navigate to={"/welcome"} replace />} />
      </Routes>
    </>
  );
};

export default App;
