<template>
  <div class="bg-cream min-h-screen text-black font-merri">
    <TheHeader />
    <main class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHome />
      <SectionWhatAi />
      <SectionAiData />
      <SectionFairness />
      <SectionPrivacy />
      <SectionGame />
      <SectionPledge />
      <SectionPoster />
      <SectionAbout />
      <SectionCTA />
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Sulam - Understand AI Ethics & Data Privacy",
  meta: [
    {
      name: "description",
      content:
        "Explore the impact of AI and data privacy with Sulam. Learn about AI ethics, fairness, and how your digital choices shape the algorithms around you.",
    },
    {
      name: "keywords",
      content:
        "AI ethics, data privacy, artificial intelligence, fairness, bias, online safety, digital choices, AI impact, Sulam",
    },
  ],
});
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
