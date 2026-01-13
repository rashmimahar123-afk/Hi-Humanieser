export type QUIZ_QUESTIONS_RESPONSE = {
  questions: {
    id: number;
    question: string;
    options: string[];
    answer?: string;
  }[];
};
