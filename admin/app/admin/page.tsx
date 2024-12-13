import AdminPage from "@/components/pages/AdminPage";
import { checkAdmin } from "@/lib/isAdmin";

export default async function Home() {
  await checkAdmin();
  return <AdminPage />;
}
