<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
      defer: true
    }
  ]
})
</script>

<style>
/* Apply Merriweather globally */
body {
  font-family: 'Merriweather', serif;
}
</style>
