import DashboardPage from "@/components/pages/DashboardPage";
import { checkAdmin } from "@/lib/isAdmin";

const Dashboard = async () => {
  await checkAdmin();
  return <DashboardPage />;
};

export default Dashboard;
