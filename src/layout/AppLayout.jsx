import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center text-white bg-gray-800 mt-10">
        Made with 💖 by Rahul Singh Takuli
      </div>
    </div>
  );
};

export default AppLayout;
