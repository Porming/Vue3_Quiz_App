<script setup lang="ts">
import Card from "../components/Card.vue";
import { QuizCover } from "../types";
import gsap from 'gsap';

const quizzesCover = <QuizCover[]>[
  {
    id: 9,
    img: "https://www.weeklyquiz.co.uk/wp-content/uploads/2018/01/images.png",
    category: "General Knowledge",
  },
  {
    id: 19,
    img: "https://miro.medium.com/v2/resize:fit:1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg",
    category: "Mathematics",
  },
  {
    id: 22,
    img: "https://ggcg.edu.pk/wp-content/uploads/2023/05/set-geography-symbols-equipments-web-banners-vintage-outline-sketch-web-banners-doodle-style-education-concept-back-to-136641038.jpg",
    category: "Geography",
  },
  {
    id: 21,
    img: "https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705276800&semt=ais",
    category: "Sports",
  },
  {
    id: 27,
    img: "https://img.freepik.com/free-vector/wild-animal-group-white-background_1308-112351.jpg",
    category: "Animals",
  },
  {
    id: 28,
    img: "https://img.freepik.com/free-vector/sticker-set-different-vehicles_1308-109056.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=ais",
    category: "Vehicles",
  },
];

const beforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-50px)';
};

const enter = (el: any) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.3,
    delay: el.dataset.index * 0.3,
  });
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-sky-950">
    <div class="w-5/6 p-4 text-center text-white rounded-lg h-4/5">
      <h1 class="mb-4 text-5xl font-bold">Quiz App</h1>
      <h3 class="mb-4 text-xl">
        Test your knowledge by Challenge yourself with quizzes
      </h3>
      <div class="flex flex-wrap justify-center gap-4">
        <TransitionGroup appear
        @before-enter="beforeEnter"
        @enter="enter">
        <Card
          v-for="(quizCover, index) in quizzesCover"
          :key="index"
          :quizCover="quizCover"
          :data-index="index"
        />
      </TransitionGroup>
      </div>
    </div>
  </div>
</template>
