export function renderNotFound() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="section section-notFound active">

      <div class="nf-portal">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="url(#pg)"/>
          <circle cx="80" cy="80" r="58" stroke="rgba(99,102,241,0.25)" stroke-width="1" stroke-dasharray="8 6" fill="none" class="nf-ring1"/>
          <circle cx="80" cy="80" r="46" stroke="rgba(139,92,246,0.3)" stroke-width="1" stroke-dasharray="4 8" fill="none" class="nf-ring2"/>
          <circle cx="80" cy="80" r="36" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.3)" stroke-width="1"/>
          <text x="80" y="90" text-anchor="middle" fill="#a78bfa" font-family="Sora,sans-serif" font-size="28" font-weight="800">?</text>
          <circle cx="30" cy="40" r="4" fill="#6366f1" opacity="0.6"/>
          <circle cx="130" cy="55" r="3" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="120" cy="130" r="5" fill="#06b6d4" opacity="0.4"/>
          <circle cx="40" cy="120" r="3" fill="#6366f1" opacity="0.5"/>
          <circle cx="80" cy="18" r="2.5" fill="#a78bfa" opacity="0.6"/>
        </svg>
      </div>

      <div class="nf-code">404</div>
      <span class="logo-badge" style="margin:0 0 20px">Línea temporal perdida</span>

      <h1 class="sec-title" style="font-size:22px">
        Esta ruta no existe<br/>en ninguna realidad
      </h1>

      <p style="font-size:13px;color:var(--muted);line-height:1.7;max-width:300px;margin:0 auto 28px">
        Rick rastreó el error: la página que buscas colapsó junto con la línea temporal C-137. Ni el portal gun puede ayudarte aquí.
      </p>

      <div class="glass" style="display:flex;align-items:center;gap:10px;padding:14px 16px;margin-bottom:28px;max-width:340px;width:100%">
        <span class="status-dot s-dead" style="position:static;border:none;flex-shrink:0"></span>
        <span style="font-size:12px;color:var(--muted);line-height:1.5">
          <strong style="color:var(--text)">Diagnóstico multiversal:</strong>
          ruta no encontrada en ninguna dimensión conocida.
        </span>
      </div>

      <button class="cta-btn" style="display:flex;max-width:240px" data-route="home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12l9-9 9 9"/><path d="M9 21V12h6v9"/>
        </svg>
        Volver al inicio
      </button>

    </div>
  `;

  // Wire the home button
  app
    .querySelector("[data-route='home']")
    ?.addEventListener("click", () => navigateTo("home"));
}
