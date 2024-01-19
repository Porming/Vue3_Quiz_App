<script setup lang="ts">
import { RouterLink } from "vue-router";
import { UserAnswer } from "../types";

const props = defineProps<{
  correctAnswer: number;
  quizLength: number;
  userAnswer: UserAnswer[];
}>();

const percentage = (props.correctAnswer / props.quizLength) * 100
</script>

<template>
  <div class="w-5/6 mt-16 mb-4 text-white rounded-lg h-4/5">
    <div class="w-full p-4 text-white rounded-lg bg-sky-600">
      <div class="text-3xl">
        <p v-if="percentage >= 80">You are a genius!</p>
        <p v-else-if="percentage >= 50">Keep trying! my friend</p>
        <p v-else>You can do better!</p>
        <p class="mt-3 text-lg">You answered {{ props.correctAnswer }}/{{ props.quizLength }} questions</p>
      </div>
      <div class="w-full mt-2 rounded-lg bg-neutral-200 dark:bg-neutral-600">
        <div
          class="p-2 text-lg font-medium leading-none text-center rounded-lg bg-primary text-primary-100"
          :style="{ width: `${percentage}%` }"
        >
        {{ `${percentage}%` }}
        </div>
      </div>
    </div>
  </div>
  <div class="w-5/6 bg-red-600 rounded-lg h-4/5">
    <div class="w-full p-4 rounded-lg h-4/5 bg-sky-600">
      <p class="mb-2 text-lg text-white">Your answers</p>

      <div
        class="w-full p-4 mb-2 bg-white rounded-lg"
        v-for="(answer, index) in props.userAnswer"
        :key="index"
      >
        <div class="flex gap-4">
          <div
            class="w-6 h-6 mb-2 text-center text-white rounded-full bg-sky-900"
          >
            {{ index + 1 }}
          </div>
          <div
            class="w-32 h-6 mb-2 text-center text-white bg-green-500 rounded-md"
            v-if="answer.answer === answer.correct_answer"
          >
            Correct
          </div>
          <div
            class="w-32 h-6 mb-2 text-center text-white bg-red-500 rounded-md"
            v-else
          >
            Incorrect
          </div>
        </div>
        <p>{{ answer.question }}</p>
        <div class="flex gap-4">
          <p
            v-if="answer.answer === answer.correct_answer"
            class="text-green-600"
          >
            {{ answer.correct_answer }}
          </p>
          <div v-else>
            <p class="text-red-600">{{ answer.answer }}</p>
            <p class="text-green-600">{{ answer.correct_answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex items-center justify-center w-40 h-12 my-4 text-white rounded-lg bg-amber-600"
  >
    <RouterLink to="/">More Quizzes</RouterLink>
  </div>
</template>
