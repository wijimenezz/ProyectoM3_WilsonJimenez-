export function renderAbout() {
  const app = document.querySelector("#app");
  app.innerHTML = `<div
        class="section section-about active"
        id="section-about"
        data-section="about"
      >
        <div class="logo-row">
          <div class="logo-mark">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
          <span class="logo-text">CharChat</span>
          <span class="logo-badge">PROFILE</span>
        </div>

        <div class="hero-card">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-name">Rick Sanchez</div>
            <div class="hero-sub">
              <div class="hero-dot s-alive"></div>
              Alive &nbsp;·&nbsp; Human &nbsp;·&nbsp; Male
            </div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card glass accent">
            <div class="stat-label">Species</div>
            <div class="stat-val">Human</div>
          </div>
          <div class="stat-card glass">
            <div class="stat-label">Gender</div>
            <div class="stat-val">Male</div>
          </div>
          <div class="stat-card glass accent">
            <div class="stat-label">Origin</div>
            <div class="stat-val">Earth (C-137)</div>
          </div>
          <div class="stat-card glass">
            <div class="stat-label">Location</div>
            <div class="stat-val">Citadel of Ricks</div>
          </div>
        </div>

        <div class="ep-card glass">
          <div class="ep-row">
            <div>
              <div class="stat-label">Episodes</div>
              <div class="ep-num">51</div>
            </div>
            <div class="ep-meta">
              <div>100% of S1–S5</div>
              <div
                style="font-size: 11px; color: var(--faint); margin-top: 2px"
              >
                51 total episodes
              </div>
            </div>
          </div>
          <div class="ep-track">
            <div class="ep-fill" style="width: 100%"></div>
          </div>
        </div>

        <!-- FIX: was <label for="tab-chat">, now <button data-route="chat"> -->
        <button class="convo-btn" data-route="chat">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Start a Conversation
          </span>
        </button>

        <div class="bio-card glass">
          <div class="stat-label" style="margin-bottom: 8px">Quick bio</div>
          <p>
            <strong>Rick Sanchez</strong> is a <strong>human</strong> scientist
            from <strong>Earth C-137</strong>, currently residing at the
            <strong>Citadel of Ricks</strong>. He's appeared in
            <span class="acc">51 episodes</span> across the multiverse — the
            most-seen character in the series. Widely considered the smartest
            being in the universe, his genius is matched only by his nihilism
            and inexplicable love for Szechuan sauce.
          </p>
        </div>

        <div class="convo-suggestions">
          <div class="stat-label">Conversation starters</div>
          <!-- FIX: were <label for="tab-chat">, now <button data-route="chat"> -->
          <div class="convo-chips">
            <button class="chip" data-route="chat">Where are you from?</button>
            <button class="chip" data-route="chat">What's your story?</button>
            <button class="chip" data-route="chat">
              Tell me about the portal gun
            </button>
            <button class="chip" data-route="chat">Do you miss Beth?</button>
            <button class="chip" data-route="chat">Favourite dimension?</button>
          </div>
        </div>
</div>`;
}
