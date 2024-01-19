interface QuizCover {
  id: number;
  img: string;
  category: string;
}

interface QuizData {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answerChoices?: string[];
}

interface UserAnswer {
  question: string;
  correct_answer: string;
  answer: string;
}

export { type QuizCover, type QuizData, type UserAnswer };
