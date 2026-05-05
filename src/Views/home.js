export function renderHome() {
  const app = document.querySelector("#app");
  app.innerHTML = `<div
        class="section section-home active"
        id="section-home"
        data-section="home"
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
          <span class="logo-badge">BETA</span>
        </div>

        <p class="sec-label">Characters</p>
        <h1 class="sec-title">Pick your<br />companion</h1>

        <div class="search-wrap">
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
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            class="search-box"
            type="text"
            placeholder="Search characters…"
          />
        </div>

        <div class="pills">
          <div class="pill on">All</div>
          <div class="pill">Alive</div>
          <div class="pill">Dead</div>
          <div class="pill">Unknown</div>
          <div class="pill">Human</div>
          <div class="pill">Alien</div>
        </div>

        <div class="char-grid">
          <div class="char-card selected">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt="Rick Sanchez"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-alive"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Rick Sanchez</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                alt="Morty Smith"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-alive"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Morty Smith</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
                alt="Summer Smith"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-alive"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Summer Smith</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
                alt="Beth Smith"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-alive"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Beth Smith</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
                alt="Jerry Smith"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-alive"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Jerry Smith</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
                alt="Abadango Cluster Princess"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-alive"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Abadango C.P.</div>
              <div class="char-species">Alien</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/8.jpeg"
                alt="Adjudicator Rick"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-dead"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Adjudicator Rick</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/9.jpeg"
                alt="Agency Director"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-dead"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Agency Director</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
                alt="Alan Rails"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-dead"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Alan Rails</div>
              <div class="char-species">Human</div>
            </div>
          </div>

          <div class="char-card">
            <div class="char-check">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div class="char-img-wrap">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/11.jpeg"
                alt="Albert Einstein"
                loading="lazy"
              />
              <div class="img-overlay"></div>
              <div class="status-dot s-dead"></div>
            </div>
            <div class="char-info">
              <div class="char-name">Albert Einstein</div>
              <div class="char-species">Human</div>
            </div>
          </div>
        </div>

        <!-- FIX: was <label for="tab-chat">, now <button data-route="chat"> -->
        <div class="cta-bar">
          <button class="cta-btn" data-route="chat">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
            </svg>
            Chat with Rick
          </button>
        </div>
  </div>
`;
}
