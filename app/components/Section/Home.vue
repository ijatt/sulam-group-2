<template>
  <section id="home" class="">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <!-- LEFT TEXT -->
      <div>
        <h1
          class="text-5xl font-extrabold text-purple font-merri text-4xl font-bold"
        >
          The Price of Free:
        </h1>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 text-black">
          How Much Is Your Data Worth?
        </h2>

        <p class="mt-5 text-gray-700 text-lg italic">
          In the age of Artificial Intelligence, your <span class="font-extrabold">data is your identity</span>.
        </p>

        <p class="mt-6 text-gray-700 max-w-xl">
          Every online action <span class="font-extrabold bg-yellow-200">teaches AI something about you.</span> This website
          uncovers how <span class="font-extrabold bg-yellow-200">data powers AI systems</span> and how your <span class="font-extrabold bg-yellow-200">digital choices shape
          the algorithms</span> around you.
        </p>

        <p class="mt-6 text-gray-700 max-w-xl">
          Learn what data AI uses, why it matters, and how small choices shape
          the systems around us. Play the interactive "Would You Trade It?"
          experience and reflect on your digital footprint.
        </p>

        <div class="mt-8 flex gap-4 flex-wrap">
          <a
            href="#game"
            class="bg-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700"
          >
            Play Interactive Game
          </a>
          <a
            href="#pledge"
            class="border border-purple text-purple px-6 py-3 rounded-full hover:bg-purple-light hover:text-white font-semibold"
          >
            Make a Pledge
          </a>
        </div>
      </div>

      <!-- RIGHT IMAGE (similar style to reference layout) -->
      <div class="relative flex justify-center items-center">
        <!-- soft glow using your theme colors -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-300/40 via-pink-300/40 to-cyan-300/40 blur-3xl pointer-events-none"
        ></div>

        <img
          src="assets/img/ai.png"
          alt="AI visual"
          class="relative w-full max-w-lg drop-shadow-xl rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
