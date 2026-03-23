export type SUBMIT_QUIZ_REQUEST_TYPES = {
  pillar_01: {
    principle_01: {
      strength: number;
      situation: number;
    };
    principle_02: {
      strength: number;
      situation: number;
    };
    principle_03: {
      strength: number;
      situation: number;
    };
    principle_04: {
      strength: number;
      situation: number;
    };
  };
  pillar_02: {
    principle_05: {
      strength: number;
      situation: number;
    };
    principle_06: {
      strength: number;
      situation: number;
    };
    principle_07: {
      strength: number;
      situation: number;
    };
    principle_08: {
      strength: number;
      situation: number;
    };
  };
  pillar_03: {
    principle_09: {
      strength: number;
      situation: number;
    };
    principle_10: {
      strength: number;
      situation: number;
    };
    principle_11: {
      strength: number;
      situation: number;
    };
    principle_12: {
      strength: number;
      situation: number;
    };
  };
};

export type CREATE_MPP_REQUEST = {
  pathways: Array<any>;
};
