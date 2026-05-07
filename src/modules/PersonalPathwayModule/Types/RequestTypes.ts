// export type UPDATE_MPP_REQUEST_TYPES = {
//   uuid: string;
//   milestone_key: string;
//   data: {
//     kind: string;
//     behaviour_selection?: Array<any>;
//     pulse_check?: number;
//     micro_action_1?: [
//       {
//         reflection: string;
//         share: boolean;
//       },
//     ];
//     micro_action_2: [
//       {
//         reflection: string;
//         share: boolean;
//       },
//     ];
//     micro_action_3: [
//       {
//         reflection: string;
//         share: boolean;
//       },
//     ];
//     reflection?: {
//       reflection: string;
//       share: boolean;
//     };
//     pin_to_dash?: boolean;
//   };
// };

export type Reflection = {
  reflection: string;
  share: boolean;
};

// ✅ M2
export type M2Data = {
  kind: string;
  behaviour_selection?: any[];
  pulse_check?: number;
  micro_action_1?: Reflection[];
  micro_action_2?: Reflection[];
  micro_action_3?: Reflection[];
};

// ✅ M3
export type M3Data = {
  kind: string;
  reflection: Reflection;
  pulse_check?: number;
  pin_to_dash?: string[];
};

// ✅ Final Type
export type UPDATE_MPP_REQUEST_TYPES = {
  uuid: string;
  milestone_key: string;
  data: M2Data | M3Data;
};

export type COMPLETE_PATHWAY_REQUEST_TYPES = {
  uuid: string;
};

export type ADD_REFLECTION_REQUEST_TYPES = {
  shared_anonymously: boolean | any;
  reflection: string | any;
  source: string | any;
};
