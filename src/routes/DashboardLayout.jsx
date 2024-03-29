import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-y-4">
        <Link to="/dashboard">All Projects</Link>
        <Link to="/dashboard/my-projects">My Projects</Link>
        <Link to="/dashboard/shared-projects">Shared Projects</Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
