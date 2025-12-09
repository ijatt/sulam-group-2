<template>
  <section id="what-is-ai" class="py-10 max-w-7xl mx-auto px-4">
    <!-- Heading -->
    <div class="text-center mb-10">
      <h3 class="text-3xl font-bold text-purple">
        What is Artificial Intelligence?
      </h3>
      <p class="mt-4 text-gray-700 max-w-3xl mx-auto">
        Artificial Intelligence (AI) are systems that perform tasks that
        normally require human intelligence such as recognising images,
        translating language, or recommending content. Many AI systems are
        <span class="font-extrabold bg-yellow-200">trained using data created by people</span>: photos, clicks, text and location.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div
        class="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-purple-200 transition"
      >
        <h4 class="text-xl font-bold text-purple">Machine Learning</h4>
        <p class="mt-3 text-gray-600">
          Models learn patterns from many examples (data).
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-purple-200 transition"
      >
        <h4 class="text-xl font-bold text-purple">Computer Vision</h4>
        <p class="mt-3 text-gray-600">AI that understands images and video.</p>
      </div>

      <!-- Card 3 -->
      <div
        class="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-purple-200 transition"
      >
        <h4 class="text-xl font-bold text-purple">
          Natural Language Processing
        </h4>
        <p class="mt-3 text-gray-600">
          AI systems that understand or generate text and speech.
        </p>
      </div>
    </div>

    <!-- Images Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" style="margin-top: 40px">
      <!-- Left large image -->
      <div class="rounded-2xl overflow-hidden">
        <img
          src="assets/img/ai1.jpg"
          alt="AI at work"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Center large image -->
      <div class="grid grid-rows-2 gap-6">
        <div class="rounded-2xl overflow-hidden">
          <img
            src="assets/img/a3.jpg"
            alt="Person working on laptop"
            class="object-cover"
          />
        </div>
        <div class="rounded-2xl overflow-hidden">
          <img src="assets/img/a5.jpg" alt="Robot AI" class="object-cover" />
        </div>
      </div>

      <!-- Right two stacked images -->
      <div class="rounded-2xl overflow-hidden">
        <img
          src="assets/img/a4.jpg"
          alt="AI at work"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
