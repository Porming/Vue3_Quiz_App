<script setup lang="ts">
import router from "../router";
import { QuizCover } from "../types";
const props = defineProps<{
  quizCover: QuizCover;
}>();

const quiz = props.quizCover;

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div
    @click="navigateToQuiz"
    class="w-full rounded shadow-lg bg-sky-500 sm:w-1/2 md:w-1/4"
  >
    <img
      class="object-cover w-full h-36"
      :src="quiz.img"
      :alt="quiz.category"
    />
    <div class="px-6 py-4 text-left">
      <div class="mb-2 text-xl font-bold">{{ quiz.category }}</div>
      <p class="text-base text-gray-700">10 questions</p>
    </div>
  </div>
</template>
