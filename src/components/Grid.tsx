import React, { ReactNode } from "react";

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 m-14 gap-4">
      {children}
    </div>
  );
};

export default Grid