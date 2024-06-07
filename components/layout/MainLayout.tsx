import { Outlet } from "react-router-dom";
import { DashboardMenu } from "@/components/common/dashboard/menu";
import { StickyBar } from "@/components/common/dashboard/stickyBar";

export const MainLayout = () => {
  return (
    <main className="bg-[#FAF8F4]">
      <DashboardMenu />
      <section className="flex justify-between px-[300px] gap-8">
        <Outlet />
        <StickyBar />
      </section>
    </main>
  );
};
