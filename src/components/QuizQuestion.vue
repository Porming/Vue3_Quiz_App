<script setup lang="ts">
import { type QuizData } from "../types";

const emit = defineEmits(["selectOption"]);

defineProps<{
  quiz: QuizData;
  questionIndex: number;
}>();

const emitSelectOption = (
  answer: string,
  question: string,
  correct_answer: string,
) => {
  const result = {
    question: question,
    correct_answer: correct_answer,
    answer: answer,
  };
  emit("selectOption", result);
};
</script>

<template>
  <div v-if="quiz">
    <div>
      <h1 class="">Question {{ questionIndex + 1 }} of 10</h1>
      <p class="mt-2 text-xl font-bold mb-9">
        {{ quiz.question }}
      </p>
    </div>
    <div
      class="w-full p-4 my-2 border border-white rounded-lg hover:bg-sky-800"
      v-for="answerChoice in quiz.answerChoices"
      @click="
        emitSelectOption(answerChoice, quiz.question, quiz.correct_answer)
      "
    >
      <p class="text-lg">{{ answerChoice }}</p>
    </div>
  </div>
</template>
