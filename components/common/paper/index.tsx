import { ReactNode } from "react";

export const Paper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full bg-white shadow mt-8 rounded-lg p-4 min-w-[500px]">
      {children}
    </section>
  );
};
