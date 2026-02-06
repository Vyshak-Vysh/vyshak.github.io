<script>
export default {
  name: 'AboutMeCard'
}
</script>

<template>
  <div class="about-section">
    <div class="about-content">
      <figure class="profile-photo">
        <img
          src="/images/Futuristic AR_VR developer in action.png"
          alt="Vyshak V's Profile Picture"
          class="profile-img"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/250x250/1e1e1e/e0e0e0?text=VV';"
        />
      </figure>

      <article class="about-text">
        <h3>Hi, I'm Vyshak V</h3>
        <p>
          I'm an AR/VR Developer specializing in interactive, real-time immersive experiences across VR, AR, WebXR, and mobile platforms. With hands-on experience in Unreal Engine, Unity, Blender, and XR SDKs, I focus on building visually realistic, performance-optimized, and user-centric XR solutions for architecture, industrial inspection, metaverse platforms, and enterprise applications.
        </p>
        <p>
          I enjoy transforming complex ideas into intuitive spatial experiences, blending engineering precision with creative design. My expertise spans from high-fidelity VR & AR environment design to building interactive XR applications from concept to deployment, with a strong focus on performance optimization for mobile and standalone headsets.
        </p>
        <p>
          Throughout my career, I've worked on diverse XR projects including AI-driven industrial inspection systems using OpenCV, architectural visualization with Unreal Engine, and cross-platform WebXR experiences. I'vecompleted my Bachelor's in Computer Science & Engineering at KPR Institute of Engineering and Technology, I am currently working as an AR/VR Developer at IQ TechMax, where I apply academic foundations to deliver production-ready immersive solutions.
        </p>
        <p>
          My technical skillset encompasses XR engines (Unreal Engine, Unity 6), AR frameworks (ARKit, ARCore, Vuforia, AR Foundation), spatial computing, and real-time rendering optimization. I'm particularly passionate about integrating AI and computer vision into AR workflows, delivering production-ready XR solutions for real-world use cases.
        </p>
        <p>
          I'm actively seeking opportunities to work on real-world XR problems, collaborate with international teams, and contribute to cutting-edge AR/VR products while growing as a professional immersive technology developer.
        </p>

        <p class="conclusion-text">
          Feel free to reach out at vyshak1705@gmail.com or connect with me on LinkedIn. I'm enthusiastic about connecting with teams working on innovative XR solutions!
        </p>
      </article>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


.about-section {
  /* This container is now full-width and provides the top padding for the navbar */
  width: 100%;
  padding: 8rem 1.5rem 2rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  color: var( --text-color);
}

.about-content {
  /* The content card is centered with a max-width for readability */
  display: flex;
  gap: 3rem;
  align-items: flex-start; /* Aligns photo to the top of the text block */
  background-color: var(--primary-color);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 3px 3px 10px 10px var(--shadow-color);;
  max-width: 1100px;
  margin: 0 auto;
}

.profile-photo {
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--shadow-color);
  width: 200px;
  height: 200px;

}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-text {
  flex: 1;
  line-height: 1.8;
}

.about-text h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: var(--text-color);
  font-weight: 600;
  padding-bottom: 0.1rem;
}

.about-text p {
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  color: var(--text-color);
  text-align: justify;
}

/* Style for the bolded text */
.about-text p :deep(strong) {
    color: var(--highlight-color);
    font-weight: 500;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.conclusion-text {
  font-weight: 500;
  color: var(--text-color); /* Make the final text stand out a bit more */
}

/* Responsive styles */
@media (max-width: 768px) {
  .about-section {
    /* Increased top padding for mobile */
    padding: 8rem 1rem 1rem 1rem;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem; /* Restore gap for mobile */
  }

  .profile-photo {
    width: 150px;
    height: 150px;
    margin-bottom: 0; /* Remove bottom margin to control spacing with gap */
  }
  
  .about-text {
    text-align: justify;
  }

  .about-text h3 {
    font-size: 1.5rem;
    text-align: center; /* Center title on mobile */
  }

  .about-text p {
    font-size: 0.9rem;
  }
}
</style>
