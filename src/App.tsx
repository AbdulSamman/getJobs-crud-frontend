import "./App.scss";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { PageJobs } from "./pages/PageJobs";
import { PageDashboard } from "./pages/PageDashboard";
import { PageSkills } from "./pages/PageSkills";

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
      </nav>
      <Routes>
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/jobs" element={<PageJobs />} />
        <Route path="/skills" element={<PageSkills />} />
        <Route path="/" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
};

export default App;
