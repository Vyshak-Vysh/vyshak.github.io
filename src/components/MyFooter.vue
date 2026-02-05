<template>
  <footer class="footer">
   
    <ul class="footer-social-links">
      <li>
        <a href="mailto:vyshak1705@gmail.com" class="social-btn" aria-label="Email">
          <i class="fa-regular fa-envelope"></i>
        </a>
      </li>
      <li>
        <a href="tel:+918220373329" class="social-btn" aria-label="Phone">
          <i class="fa-solid fa-phone"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/Vyshak-Vysh" class="social-btn" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vyshak-v-591101234/" class="social-btn" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>
    </ul>
    <p class="footer-copy">&copy; 2025 Vyshak V. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
 
  padding: 1.5rem 0;
  background-color: var(--primary-color);
  text-align: center;
  color: var(--button-border);
}

.footer-social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 18px;
  border: 2px solid var(--button-border);
  border-radius: 50%;
  background-color: transparent;
  color: inherit;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  /* No background or color change — preserves original icon color */
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
}
@media (max-width: 1023px) {
  .footer {
    background-color: var(--secondary-color);
    padding-bottom: 5rem; /* mobile only */
  } }
</style>

