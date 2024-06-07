import { Outlet } from "react-router-dom";
import { ScreenBackground } from "@/components/tools/screen-background";

export const AuthLayout = () => {
  return (
    <main className="relative flex flex-col w-[100%] h-[100vh]">
 
      <div className="absolute inset-0 filter blur-[2px] pb-56 mb-40 h-[100vh]">
    
      <ScreenBackground/>
      </div>

      <div className="relative z-10 m-auto items-center p-2 mb-10 w-[80%] h-[100vh]">
        <Outlet />
      </div>

    </main>
  );
};
  