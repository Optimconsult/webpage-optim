import { Routes, Route } from "react-router-dom";
import ServiceDetail from "./components/service/ServiceDetail";
import EnterpriseDetail from "./components/enterprise/EnterpriseDetail";
import LandingPages from "./components/pages";
import ProjectDetail from "./components/project/ProjectDetail";
import ProjectView from "./components/project/ProjectView";

export default function App() {
  return (
    <div className="font-poppins pt-24 md:pt-32 container min-w-[300px] w-auto md:w-full max-w-[1280px] md:mx-auto">
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/enterpriseDetail" element={<EnterpriseDetail />} />
        <Route path="/projects" element={<ProjectDetail />} />
        <Route path="/projects/:projectId" element={<ProjectView />} />
      </Routes>
    </div>
  );
}
