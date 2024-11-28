import React, { ReactNode } from "react";

import SocialsAuth from "@/components/authComponents/SocialsAuth";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div>{children}</div>
        <SocialsAuth />
      </section>
    </main>
  );
};

export default layout;
