<template>
  <section id="about-uss" class="py-16 bg-cream text-black font-merri">
    <h3 class="text-3xl font-extrabold text-center text-purple-700 mb-10">
      About Us
    </h3>

    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :autoplay="{ delay: 3000 }"
      :items="team"
      :ui="{ item: 'basis-3/4 md:basis-1/4 lg:basis-1/4' }"
      class="max-w-7xl mx-auto px-6"
    >
      <!-- <div
        :class="['team-card rounded-lg p-4 flex flex-col items-center', item.gradient]"
      > -->
      <div
        :class="[
          'px-4 py-4 rounded-3xl flex flex-col items-center gap-y-4',
          item.gradient,
        ]"
      >
        <img
          :src="item.img"
          class="team-img w-40 h-40 rounded-3xl object-cover mb-4 hover:scale-105 transition-transform duration-300"
          :alt="item.name"
        />

        <h4 class="font-bold text-white text-lg">{{ item.name }}</h4>
        <p class="text-sm text-gray mt-1">{{ item.role }}</p>
      </div>
    </UCarousel>
  </section>
</template>

<script lang="ts" setup>
import ijat from "@/assets/img/ijat.jpg";
import cha from "@/assets/img/cha.jpg";
import athul from "@/assets/img/Athul.jpg";
import dhars from "@/assets/img/dhars.jpg";
import fahmi from "@/assets/img/fahmi.jpeg";
import jia from "@/assets/img/Jia.jpeg";
import ilman from "@/assets/img/P1010165.jpg";
import shaa from "@/assets/img/shaa.jpg";
import wani from "@/assets/img/wani.jpg";
import yazid from "@/assets/img/Yazid.jpg";
import alya from "@/assets/img/alya.jpg"

interface TeamMember {
  name: string;
  role: string;
  img: string;
  gradient: string;
}

const team: TeamMember[] = [
  {
    name: "Siti Najihah",
    role: "Group Leader",
    img: jia,
    gradient: "card-gradient-1",
  },
  {
    name: "Shahrizat",
    role: "Leader - Web Developer",
    img: ijat,
    gradient: "card-gradient-2",
  },
  {
    name: "Alya Natasha",
    role: "Web Developer",
    img: alya,
    gradient: "card-gradient-3",
  },
  {
    name: "Sharifah",
    role: "Web Developer",
    img: shaa,
    gradient: "card-gradient-4",
  },
  {
    name: "Athul",
    role: "UI/UX Designer",
    img: athul,
    gradient: "card-gradient-5",
  },
  {
    name: "Asha Alia",
    role: "Web Developers",
    img: cha,
    gradient: "card-gradient-1",
  },
  {
    name: "Ilman",
    role: "Leader - Game Developer",
    img: ilman,
    gradient: "card-gradient-2",
  },
  {
    name: "Syazwani",
    role: "Game Developer",
    img: wani,
    gradient: "card-gradient-3",
  },
  {
    name: "Yazid",
    role: "Game Developer",
    img: yazid,
    gradient: "card-gradient-4",
  },
  {
    name: "Dharsini",
    role: "Game Developer",
    img: dhars,
    gradient: "card-gradient-5",
  },
  {
    name: "Fahmi",
    role: "Game Developer",
    img: fahmi,
    gradient: "card-gradient-1",
  },
];
</script>

<style>
  .card-gradient-1 {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
}

.card-gradient-2 {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

.card-gradient-3 {
  background: linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%);
}

.card-gradient-4 {
  background: linear-gradient(135deg, #f43f5e 0%, #f97316 100%);
}

.card-gradient-5 {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
}
.team-img {
  border-radius: 20px;
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 14px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
</style>
