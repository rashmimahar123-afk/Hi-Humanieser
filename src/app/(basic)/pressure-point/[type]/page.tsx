"use client";

import { useParams } from "next/navigation";
import UrgentPressurePoint from "@/src/modules/PressurePoint/Components/UrgentPressurePoint/UrgentPressurePoint";
import AlignmentPressurePoint from "@/src/modules/PressurePoint/Components/AlignmentPressurePoint/AlignmentPressurePoint";
import LatePressurePoint from "@/src/modules/PressurePoint/Components/LatePressurePoint/LatePressurePoint";
import DependencyPressurePoint from "@/src/modules/PressurePoint/Components/DependencyPressurePoint/DependencyPressurePoint";

export default function PressurePointDetail() {
  const params = useParams();
  const type = params.type as string;

  const componentMap: any = {
    urgent: UrgentPressurePoint,
    alignment: AlignmentPressurePoint,
    late: LatePressurePoint,
    dependency: DependencyPressurePoint,
    other: UrgentPressurePoint,
  };

  const SelectedComponent = componentMap[type];

  return (
    <div>
      {SelectedComponent ? <SelectedComponent /> : <div>Invalid Type</div>}
    </div>
  );
}
