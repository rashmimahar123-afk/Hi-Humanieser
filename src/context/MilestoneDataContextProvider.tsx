// src/context/SelectedPathwayContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type MilestonePathwayType = {
  [uuid: string]: any; // store each milestone by uuid
};

type MILESTONE_DATA_CONTEXT_TYPE = {
  milestoneData: MilestonePathwayType;
  setMilestoneData: (data: MilestonePathwayType) => void;
};

const MilestoneDataContext = createContext<
  MILESTONE_DATA_CONTEXT_TYPE | undefined
>(undefined);

export const MilestoneDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [milestoneData, setMilestoneData] = useState<MilestonePathwayType>({});

  return (
    <MilestoneDataContext.Provider value={{ milestoneData, setMilestoneData }}>
      {children}
    </MilestoneDataContext.Provider>
  );
};

export const useMilestoneDataContext = () => {
  const context = useContext(MilestoneDataContext);
  if (!context) {
    throw new Error(
      "useMilestoneDataContext must be used within MilestoneDataProvider",
    );
  }
  return context;
};
