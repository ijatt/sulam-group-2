<template>
  <section id="slido" class="py-10 px-8">
    <div
      id="slido"
      class="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-lg"
    >
      <div class="max-w-4xl mx-auto text-center text-white space-y-6">
        <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
          Join the Collective Data Wall
        </h3>

        <p class="text-lg opacity-95 max-w-2xl mx-auto">
          See the collective thoughts and data shared by the community. Watch
          your input appear live!
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://app.sli.do/event/p1NvA8hRLg4EAA8b5T3kkq"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.5 1.5H5a3.5 3.5 0 0 0-3.5 3.5v7A3.5 3.5 0 0 0 5 15.5h10a3.5 3.5 0 0 0 3.5-3.5V9.5m-9-8h2v2h-2V1.5m0 4h8m-8 3h5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Go to Slido
          </a>
        </div>
        <div class="mt-10 pt-8 border-t border-white/20">
          <p class="text-sm opacity-80">
            Share your thoughts and be part of our collective conversation about
            data, AI, and privacy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component for Slido section
</script>

<style scoped>
section {
  scroll-margin-top: 100px;
}
</style>
