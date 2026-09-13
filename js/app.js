// ============================================================
// BADBEAR.MED - CONTROL DE ACCESO
// ============================================================

(() => {
  const ACCESS_KEY = "badbear_med_cx_access_v1";

  if (sessionStorage.getItem(ACCESS_KEY) !== "ok") {
    window.location.replace("./");
    return;
  }

  // ==========================================================
  // TEMA VISUAL BADBEAR.MED
  // ==========================================================

  if (!document.getElementById("badbear-theme")) {
    const theme = document.createElement("link");
    theme.id = "badbear-theme";
    theme.rel = "stylesheet";
    theme.href = "css/theme-badbear.css?v=20260913-2";
    document.head.appendChild(theme);
  }

  // ==========================================================
  // APLICACIÓN PRINCIPAL
  // ==========================================================

  const script = document.createElement("script");
  script.src = "js/app-core.js?v=20260913";
  script.async = false;

  script.onerror = () => {
    document.body.innerHTML = `
      <main style="min-height:100vh;display:grid;place-items:center;padding:24px;font-family:system-ui;background:#f6f8fc;color:#0d1b3e;text-align:center;">
        <div>
          <h1>BADBEAR.MED</h1>
          <p>No se pudo cargar la aplicación.</p>
          <button onclick="location.reload()" style="padding:12px 18px;border:0;border-radius:10px;background:#0d1b3e;color:#fff;font-weight:700;cursor:pointer;">Reintentar</button>
        </div>
      </main>
    `;
  };

  document.body.appendChild(script);
})();
