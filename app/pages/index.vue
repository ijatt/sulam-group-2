<template>
  <div class="bg-cream min-h-screen text-black font-merri">
    <!-- Header / Nav -->
    <header
      class="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-purple-200"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="assets/img/logo.png"
              alt="Logo"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="text-lg font-bold text-purple">
            Artificial Intelligence: Price of Free
          </div>
        </div>

        <!-- Desktop links -->
        <nav class="hidden md:flex gap-6 text-sm font-medium items-center">
          <a href="#home" class="hover:text-purple-600 transition">Home</a>
          <a href="#what-is-ai" class="hover:text-purple-600 transition"
            >What is AI</a
          >
          <a href="#ai-data" class="hover:text-purple-600 transition"
            >AI & Data</a
          >
          <a href="#fairness" @click="closeMobile" class="py-2"
            >Fairness & Bias</a
          >
          <a href="#privacy" class="hover:text-purple-600 transition"
            >Privacy</a
          >
          <a href="#game" class="hover:text-purple-600 transition">Game</a>
        </nav>
        <button
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          class="md:hidden p-2 rounded hover:bg-cream/60"
        >
          <svg
            v-if="!mobileOpen"
            class="w-6 h-6 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile dropdown -->
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden bg-cream border-t border-purple-100"
      >
        <div class="px-4 py-4 flex flex-col gap-3">
          <a href="#home" @click="closeMobile" class="py-2">Home</a>
          <a href="#what-is-ai" @click="closeMobile" class="py-2">What is AI</a>
          <a href="#ai-data" @click="closeMobile" class="py-2">AI & Data</a>
          <a href="#fairness" @click="closeMobile" class="py-2"
            >Fairness & Bias</a
          >
          <a href="#privacy" @click="closeMobile" class="py-2">Privacy</a>
          <a href="#game" @click="closeMobile" class="py-2">Game</a>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- HERO SECTION-->
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
              In the age of Artificial Intelligence, your data is your identity.
            </p>

            <p class="mt-6 text-gray-700 max-w-xl">
              Every online action teaches AI something about you. This website
              uncovers how data powers AI systems and how your digital choices
              shape the algorithms around you.
            </p>

            <p class="mt-6 text-gray-700 max-w-xl">
              Learn what data AI uses, why it matters, and how small choices
              shape the systems around us. Play the interactive "Would You Trade
              It?" experience and reflect on your digital footprint.
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

      <!-- What is AI -->
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
            trained using data created by people: photos, clicks, text and
            location.
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
            <p class="mt-3 text-gray-600">
              AI that understands images and video.
            </p>
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
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-6"
          style="margin-top: 40px"
        >
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
              <img
                src="assets/img/a5.jpg"
                alt="Robot AI"
                class="object-cover"
              />
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
      <!-- AKU TAKNAK FOLLOWWW follow apa aku scroll scroll dia scroll bbalik ikut kau ohhAHAHAH okay scroll dulu-->
      <!-- AI & Data -->
      <section id="ai-data" class="py-10 bg-white rounded-3xl p-8 shadow-lg">
        <h3 class="text-3xl font-bold text-purple-700">AI & Your Data</h3>
        <p class="mt-4 text-gray-700 leading-relaxed">
          Everyday actions "likes, searches, clicks, and uploaded content"
          generate data that can be used to train AI models. While this helps AI
          provide smarter recommendations and personalized experiences, it can
          also reveal sensitive patterns about you. Often, this data is
          collected without our full awareness or consent.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div
            class="p-6 border rounded-xl hover:shadow-md transition-shadow duration-300"
          >
            <h4 class="font-semibold text-purple-700 mb-2">
              What Data is Collected?
            </h4>
            <ul class="text-gray-600 list-disc list-inside space-y-1">
              <li>
                <strong>Device & Location Data:</strong> IP addresses, GPS,
                device type
              </li>
              <li>
                <strong>Search & Browsing History:</strong> Queries, visited
                websites, clicks
              </li>
              <li>
                <strong>Photos & Uploaded Files:</strong> Images, documents,
                videos shared online
              </li>
              <li>
                <strong>Behavioral Data:</strong> Likes, shares, app usage
                patterns
              </li>
            </ul>
          </div>

          <div
            class="p-6 border rounded-xl hover:shadow-md transition-shadow duration-300"
          >
            <h4 class="font-semibold text-purple-700 mb-2">Why It Matters</h4>
            <p class="text-gray-600 leading-relaxed">
              Data collected from users helps AI models predict preferences,
              personalize content, and even influence decisions in areas like
              advertising, hiring, and healthcare. Mismanagement or misuse of
              this data can lead to privacy risks or biased outcomes.
            </p>
          </div>
        </div>

        <div
          class="mt-8 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-lg"
        >
          <h4 class="font-semibold text-purple-700 mb-2">Protect Yourself</h4>
          <ul class="text-gray-700 list-disc list-inside space-y-1">
            <li>Review app and website privacy settings regularly</li>
            <li>Limit the amount of personal data you share online</li>
            <li>Use privacy-focused browsers or search engines</li>
            <li>Understand how your data might be used by AI services</li>
          </ul>
        </div>
      </section>

      <!-- Fairness and Bias Section -->
      <section id="fairness" class="py-12">
        <div class="text-center mb-10">
          <h3 class="text-3xl font-bold text-purple">Fairness & Bias</h3>
          <p class="mt-4 text-gray-700 max-w-3xl mx-auto">
            AI bias happens when an AI system gives unfair results because of
            the data it was trained on. If data is incomplete, stereotypical or
            unbalanced, the AI will make unfair decisions.
          </p>
        </div>

        <div class="max-w-6xl mx-auto px-4">
          <div class="relative rounded-3xl overflow-hidden">
            <!-- gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-900 via-teal-700 to-indigo-700 pointer-events-none"
            ></div>

            <div
              class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 text-white"
            >
              <!-- Left: Text content like Fairness & Bias style -->
              <div class="space-y-6">
                <div class="bg-white/6 p-5 rounded-xl">
                  <div class="text-2xl font-bold mt-1">Why Bias Happens?</div>
                  <ul class="list-disc ml-6 text-sm mt-2 space-y-1">
                    <li>
                      Biased training data: If AI sees more of one group than
                      others
                    </li>
                    <li>
                      Human bias: Developers or users unintentionally include
                      assumptions
                    </li>
                    <li>
                      Algorithm design: AI sometimes misinterprets patterns
                    </li>
                  </ul>
                </div>

                <div class="bg-white/6 p-5 rounded-xl">
                  <div class="text-2xl font-bold mt-1">
                    How We Can Reduce Bias?
                  </div>
                  <ul class="list-disc ml-6 text-sm mt-2 space-y-1">
                    <li>Share diverse, balanced content</li>
                    <li>Review your privacy settings</li>
                    <li>
                      Be mindful of what you "like", "save", and "interact" with
                    </li>
                    <li>Support ethical, transparent AI apps</li>
                  </ul>
                </div>

                <div class="bg-white/6 p-5 rounded-xl">
                  <div class="text-2xl font-bold mt-1">Real-Life Examples</div>
                  <ul class="list-disc ml-6 text-sm space-y-1 text-gray-100">
                    <li>
                      Face filters: Detect some skin tones better than others
                    </li>
                    <li>Hiring AI: Prefer certain gender keywords</li>
                    <li>Product recommendations: Only target certain groups</li>
                  </ul>
                </div>
              </div>

              <!-- Right: Image like in original -->
              <div class="flex justify-center lg:justify-end">
                <div
                  class="overflow-hidden rounded-2xl w-full max-w-md shadow-2xl"
                >
                  <img
                    src="assets/img/fairness.jpg"
                    alt="AI operator"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <!-- subtle border -->
            <div
              class="absolute inset-0 rounded-3xl pointer-events-none border border-white/6"
            ></div>
          </div>
        </div>
      </section>

      <!-- Privacy & Safety -->
      <section id="privacy" class="py-10 bg-white rounded-3xl p-8 shadow-lg">
        <h3 class="text-3xl font-bold text-purple-700">
          Privacy & Digital Footprint
        </h3>
        <p class="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          Every online action-posts, searches, likes, and even location
          check-ins-leaves a digital footprint. Being mindful of your digital
          footprint and taking simple privacy measures can help protect your
          personal information.
        </p>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="bg-purple-600 text-white p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
          >
            <h4 class="font-semibold text-lg">Quick Tips for Everyone</h4>
            <ul class="mt-3 text-sm space-y-1 list-disc list-inside">
              <li>
                Check app permissions for photos, location, and microphone
              </li>
              <li>Limit public profile information on social media</li>
              <li>Use strong passwords and enable two-factor authentication</li>
              <li>Regularly review privacy settings on devices and apps</li>
              <li>Think before sharing personal content online</li>
            </ul>
          </div>

          <div
            class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h4 class="font-semibold text-purple-600 text-lg">
              For Teachers & Parents
            </h4>
            <p class="mt-2 text-gray-600 leading-relaxed">
              Talk with young users about the type of data apps and websites
              collect. Teach them to ask critical questions about free services
              and the potential consequences of sharing personal information
              online. Encourage safe browsing habits and awareness of their
              digital footprint.
            </p>
          </div>
        </div>

        <div
          class="mt-8 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg"
        >
          <h4 class="font-semibold text-purple-700 mb-2">
            Understanding Your Digital Footprint
          </h4>
          <p class="text-gray-700 leading-relaxed">
            Your digital footprint is the trail of data you leave behind online.
            This includes posts, comments, app usage, purchases, and even search
            history. Being conscious of your digital footprint helps you protect
            your privacy, reputation, and security.
          </p>
        </div>

        <div
          class="mt-6 p-6 bg-purple-100 border-l-4 border-purple-400 rounded-lg"
        >
          <h4 class="font-semibold text-purple-700 mb-2">
            Actions to Protect Your Footprint
          </h4>
          <ul class="text-gray-700 list-disc list-inside space-y-1">
            <li>Use privacy-focused browsers or search engines</li>
            <li>Regularly delete old posts or accounts you no longer use</li>
            <li>Be cautious about sharing sensitive personal information</li>
            <li>Understand app permissions before granting access</li>
            <li>Consider using a VPN for safer internet usage</li>
          </ul>
        </div>
      </section>

      <!-- Interactive Game -->
      <section id="game" class="py-10">
        <h3 class="text-2xl font-bold text-purple-700">
          Interactive Game — Would You Trade It?
        </h3>
        <p class="mt-2 text-gray-700 max-w-2xl">
          Jump in and play the game to experience it yourself! See what choices
          you would make and discover the fun interactive journey your teammates
          created.
        </p>

        <!-- Responsive iframe wrapper -->
        <div class="mt-6 max-w-4xl mx-auto">
          <div class="relative" style="padding-top: 56.25%">
            <!-- 16:9 -->
            <iframe
              title="Would You Trade It? - Genially"
              src="https://view.genially.com/6914be1c26254ceb89c1d30d/interactive-content-would-you-trade-it"
              class="absolute top-0 left-0 w-full h-full rounded-xl border"
              frameborder="0"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>

          <p class="text-sm text-gray-500 mt-2">
            If the game doesn't load on mobile, open it in a new tab.
          </p>
        </div>
      </section>

      <!-- Reflection / Pledge -->
      <section id="pledge" class="py-10 bg-white rounded-3xl p-6 shadow">
        <h3 class="text-2xl font-bold text-purple-700">Reflection & Pledge</h3>
        <p class="mt-2 text-gray-700">
          After playing, write one short action you will take to protect your
          data.
        </p>

        <form @submit.prevent="submitPledge" class="mt-4 max-w-2xl">
          <label class="block text-sm font-medium text-gray-700"
            >Your name (optional)</label
          >
          <input
            v-model="pledge.name"
            type="text"
            class="mt-1 w-full p-3 rounded-lg border"
            placeholder="e.g. Aisyah"
          />

          <label class="block text-sm font-medium text-gray-700 mt-4"
            >Your pledge</label
          >
          <textarea
            v-model="pledge.text"
            rows="4"
            required
            class="mt-1 w-full p-3 rounded-lg border"
            placeholder="I will review app permissions..."
          ></textarea>

          <div class="flex items-center gap-3 mt-4">
            <input
              v-model="pledge.share"
              id="share"
              type="checkbox"
              class="w-4 h-4"
            />
            <label for="share" class="text-sm text-gray-700"
              >Share my pledge anonymously on the site</label
            >
          </div>

          <div class="mt-4 flex gap-3">
            <button
              type="submit"
              class="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Pledge
            </button>
            <button
              type="button"
              @click="clearPledge"
              class="border px-4 py-2 rounded-lg"
            >
              Clear
            </button>
          </div>

          <p v-if="pledgeStatus" class="mt-3 text-sm text-green-600">
            {{ pledgeStatus }}
          </p>
        </form>

        <!-- Display last few pledges (local only) -->
        <div v-if="pledges.length" class="mt-8">
          <h4 class="font-semibold text-purple-700">Recent pledges</h4>
          <ul class="mt-3 space-y-3">
            <li
              v-for="(p, i) in latestPledges"
              :key="i"
              class="bg-gray-50 p-3 rounded-lg border"
            >
              <p class="text-sm text-gray-700">
                <strong v-if="p.name">{{ p.name }}</strong
                ><span v-else>Anonymous</span> —
                <span class="text-gray-500 text-xs">{{ p.when }}</span>
              </p>
              <p class="mt-1 text-gray-800">{{ p.text }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- Awareness Poster -->
      <section id="gallery" class="py-10">
        <div class="text-center mb-10">
          <h3 class="text-3xl font-bold text-purple">Awareness Poster</h3>
        </div>
        <div class="mt-6 flex justify-center">
          <div class="swiper awarenessSwiper w-full max-w-5xl">
            <div class="swiper-wrapper">
              <!-- Slide 1 -->
              <div class="swiper-slide flex justify-center">
                <div class="poster-frame">
                  <img src="assets/img/p1.png" alt="" />
                </div>
              </div>

              <!-- Slide 2 -->
              <div class="swiper-slide flex justify-center">
                <div class="poster-frame">
                  <img src="assets/img/p2.png" alt="" />
                </div>
              </div>

              <!-- Slide 3 -->
              <div class="swiper-slide flex justify-center">
                <div class="poster-frame">
                  <img src="assets/img/p3.png" alt="" />
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="swiper-pagination mt-4"></div>

            <!-- Navigation arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <!-- About Us -->

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
          :ui="{ item: 'basis-2/4 md:basis-1/4 lg:basis-1/4' }"
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
              class="team-img w-40 h-40 rounded-full object-cover mb-4 hover:scale-105 transition-transform duration-300"
              :alt="item.name"
            />

            <h4 class="font-bold text-white text-lg">{{ item.name }}</h4>
            <p class="text-sm text-gray mt-1">{{ item.role }}</p>
          </div>
          <!-- <div class="team-info text-center">
          <h4 class="font-bold text-white text-lg">{{ item.name }}</h4>
          <p class="text-sm text-gray-100 mt-1">{{ item.role }}</p>
        </div>
      </div> -->
        </UCarousel>
      </section>

      <!-- Final CTA Section -->
      <section id="final-cta" class="py-16">
        <div class="max-w-4xl mx-auto">
          <div
            class="cta-card relative rounded-3xl overflow-hidden p-8 md:p-12"
          >
            <!-- gradient background -->
            <div class="absolute inset-0 bg-black"></div>

            <!-- content -->
            <div class="relative z-10 text-center text-white space-y-6">
              <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
                The more you share, the more AI learns.
              </h3>
              <p class="text-lg opacity-95 max-w-2xl mx-auto">
                Keep your data safe and make conscious choices about what you
                share online.
              </p>

              <!-- CTA buttons -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="#pledge"
                  class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Make a Pledge
                </a>
                <a
                  href="#game"
                  class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                >
                  Play the Game
                </a>
              </div>

              <!-- bottom tagline -->
              <div class="mt-10 pt-8 border-t border-white/20">
                <p class="text-sm opacity-80">
                  Your digital choices matter. Learn more about AI ethics and
                  data privacy today.
                </p>
              </div>
            </div>

            <!-- subtle border -->
            <div
              class="absolute inset-0 rounded-3xl pointer-events-none border border-white/10"
            ></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import aiImg from "@/assets/img/ai.png";

definePageMeta({
  title: "The Price of Free: How Much Is Your Data Worth?",
  meta: [
    {
      name: "description",
      content:
        "Learn how everyday data trains AI — an interactive learning experience with a game and pledge.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
import { ref, reactive, computed } from "vue";

/* Mobile menu */
const mobileOpen = ref(false);
function closeMobile() {
  mobileOpen.value = false;
}

/* Pledge form (local-only demo). If you want server saving, replace submitPledge with API/Firebase call. */
const pledge = reactive<{ name: string; text: string; share: boolean }>({
  name: "",
  text: "",
  share: true,
});
const pledgeStatus = ref("");
const pledges = ref<Array<{ name?: string; text: string; when: string }>>([]);

/* Save pledges to localStorage so they persist across reloads */
const loadPledges = () => {
  try {
    const raw = localStorage.getItem("sulam_pledges");
    if (raw) pledges.value = JSON.parse(raw);
  } catch (e) {
    /* ignore */
  }
};
const savePledges = () => {
  try {
    localStorage.setItem("sulam_pledges", JSON.stringify(pledges.value));
  } catch (e) {
    /* ignore */
  }
};
loadPledges();

function submitPledge() {
  if (!pledge.text.trim()) {
    pledgeStatus.value = "Please write a short pledge before submitting.";
    setTimeout(() => (pledgeStatus.value = ""), 3000);
    return;
  }
  const record = {
    name: pledge.name ? pledge.name.trim() : undefined,
    text: pledge.text.trim(),
    when: new Date().toLocaleString(),
  };
  if (pledge.share) pledges.value.unshift(record);
  pledgeStatus.value = "Thanks — your pledge is saved locally!";
  savePledges();
  // clear form
  pledge.name = "";
  pledge.text = "";
  setTimeout(() => (pledgeStatus.value = ""), 3500);
}

function clearPledge() {
  pledge.name = "";
  pledge.text = "";
  pledge.share = true;
}

/* computed for displaying recent (limit 5) */
const latestPledges = computed(() => pledges.value.slice(0, 5));
import { onMounted } from "vue";

onMounted(() => {
  new Swiper(".awarenessSwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

onMounted(() => {
  new Swiper(".aboutSwiper", {
    modules: [Navigation, Pagination],
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".about-button-next",
      prevEl: ".about-button-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 40,
      },
    },
  });
});

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
    img: aiImg,
    gradient: "card-gradient-1",
  },
  {
    name: "Shahrizat",
    role: "Leader - Web Developer",
    img: "/assets/img/ai.jpg",
    gradient: "card-gradient-2",
  },
  {
    name: "Alya Natasha",
    role: "Web Developer",
    img: "/assets/img/ai.jpg",
    gradient: "card-gradient-3",
  },
  {
    name: "Sharifah",
    role: "Web Developer",
    img: "/assets/img/ai.jpg",
    gradient: "card-gradient-4",
  },
  {
    name: "Athul",
    role: "UI/UX Designer",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
  {
    name: "Asha Alia",
    role: "Web Developers",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
  {
    name: "Ilman",
    role: "Leader - Game Developer",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
  {
    name: "Syazwani",
    role: "Game Developer",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
  {
    name: "Yazid",
    role: "Game Developer",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
  {
    name: "Dharsini",
    role: "Game Developer",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
  {
    name: "Fahmi",
    role: "Game Developer",
    img: "https://media.pitchfork.com/photos/67932557f4bbbe1b47e33b2e/2:1/w_1920,c_limit/Travis-Scott.jpg",
    gradient: "card-gradient-5",
  },
];
</script>

<style scoped>
.bg-cream {
  background-color: #faf7f2;
}

/* small polish for anchors smooth scrolling */
html {
  scroll-behavior: smooth;
}

body,
html {
  overflow-x: hidden;
}

/* ensure iframe border looks subtle on dark mode etc. */
iframe {
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.hero-image {
  /* helper if you want to reuse */
}
.stat-badge {
  min-width: 88px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-align: right;
}

/* Fairness & Bias styles */
.bias-tile {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 10px 30px rgba(8, 12, 30, 0.35);
  color: #fff;
}

/* Fix swiper height */
.awarenessSwiper {
  width: 100%;
  max-width: 500px; /* makes poster smaller */
  height: auto;
}

/* Make slides centered */
.awarenessSwiper .swiper-slide {
  display: flex;
  width: 250px;
  justify-content: center;
}

/* Limit poster height */
.awarenessSwiper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Make arrows clickable and visible */
.swiper-button-next,
.swiper-button-prev {
  z-index: 50 !important;
  color: #7c3aed;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50% !important;
  transform: translateY(-50%);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(255, 255, 255, 1);
}

.about-card {
  width: 260px;
  border-radius: 22px;
  padding: 16px;
  background: linear-gradient(
    145deg,
    rgba(168, 85, 247, 0.7),
    rgba(34, 211, 238, 0.7),
    rgba(236, 72, 153, 0.7)
  );
  box-shadow: 0px 0px 30px rgba(168, 85, 247, 0.4);
  backdrop-filter: blur(20px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: scale(1.08);
  box-shadow: 0px 0px 45px rgba(244, 114, 182, 0.6);
}

.about-img {
  border-radius: 16px;
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 10px;
}

.about-info {
  text-align: left;
}

/* Team Cards with vibrant gradients */
.team-card {
  width: 280px;
  height: auto;
  border-radius: 24px;
  padding: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.team-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.4);
}

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

.team-info {
  text-align: center;
}

@media (max-width: 768px) {
  .team-card {
    width: 240px;
  }
  .team-img {
    height: 160px;
  }
}

@media (max-width: 1024px) {
  #fairness-bias .bias-tile {
    padding: 1rem;
  }
  #fairness-bias .grid {
    grid-template-columns: 1fr;
  }
}
/* small readable list spacing */
#fairness-bias ul {
  line-height: 1.4;
}

@media (min-width: 768px) {
  /* slightly lift hero spacing on medium+ screens */
  .stat-badge {
    min-width: 110px;
  }
}

/* About Us Swiper */
.aboutSwiper {
  overflow-x: auto;
}

.aboutSwiper .swiper-slide {
  width: 280px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.aboutSwiper .swiper-slide-active {
  opacity: 1;
  transform: scale(1.1);
}

/* About navigation buttons */
.about-button-next,
.about-button-prev {
  z-index: 50 !important;
  color: #7c3aed;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50% !important;
  transform: translateY(-50%);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.about-button-next:hover,
.about-button-prev:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5);
}

.about-button-next::after,
.about-button-prev::after {
  font-size: 22px;
  font-weight: bold;
}

/* Final CTA Section */
.cta-card {
  position: relative;
  box-shadow: 0 20px 60px rgba(33, 30, 32, 0.25);
}

@media (max-width: 768px) {
  .cta-card {
    padding: 2rem 1.5rem;
  }
  #final-cta h3 {
    font-size: 1.75rem;
  }
}
</style>
