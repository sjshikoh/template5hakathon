import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  gridCols?: string; // Accept grid column configuration as a string
}

const Grid: React.FC<GridProps> = ({ children, gridCols = "md:grid-cols-4" }) => {
  return (
    <div
      className={`wrapper grid grid-cols-1 sm:grid-cols-2  ${gridCols} mt-[50px] md:mb-0 gap-[3px] `}
    >
      {children}
    </div>
  );
};



export default Grid;

