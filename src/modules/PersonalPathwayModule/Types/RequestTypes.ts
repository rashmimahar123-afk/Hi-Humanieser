export type UPDATE_MPP_REQUEST_TYPES = {
  uuid: string;
  milestone_key: string;
  data: {
    kind: string;
    behaviour_selection?: Array<any>;
    pulse_check?: number;
    micro_action_1?: [
      {
        reflection: string;
        share: boolean;
      },
    ];
    micro_action_2: [
      {
        reflection: string;
        share: boolean;
      },
    ];
    micro_action_3: [
      {
        reflection: string;
        share: boolean;
      },
    ];
    reflection?: {
      reflection: string;
      share: boolean;
    };
    pin_to_dash?: boolean;
  };
};

export type COMPLETE_PATHWAY_REQUEST_TYPES = {
  uuid: string;
};
