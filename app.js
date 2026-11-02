/**
 * ============================================================
 *  Eduardo Braun — Portfolio
 *  app.js — Central data + all site logic  (v2 — compact, 2 columns)
 * ============================================================
 *
 *  All editable content lives in SITE_DATA below.
 *
 *  LAYOUT
 *  ──────
 *  • Each category (projectGroups) is a panel; panels sit 2 per row.
 *  • Each category shows up to 2 videos side by side (MAX_PER_GROUP).
 *    Extra projects in a group are ignored, so you can keep spares here.
 *
 *  PROJECT FIELDS
 *  ──────────────
 *  title         — card title
 *  client        — small line under the title
 *  tag           — label shown in the video modal
 *  formatLabel   — badge on the thumbnail ("9:16", "3:4", "16:9")
 *  format        — "vertical" (9:16) | "portrait" (3:4) | "landscape" (16:9) | "square"
 *                  Tip: keep both videos of a category in the same format.
 *  thumbnail     — "assets/work/thumbnails/x.png" (leave "" for a dark placeholder)
 *  previewType   — "youtube" | "vturb" | "localVideo" | "image" | "external" | "request"
 *  youtubeId     — the ID after ?v= or after /shorts/
 *  vturbEmbedCode, localVideoSrc, imageSrc, externalUrl — per previewType
 *
 *  A project with no video configured (e.g. youtubeId: "") shows as
 *  "Coming soon" and is not clickable — just paste the ID to turn it on.
 * ============================================================
 */

const MAX_PER_GROUP = 2;

const SITE_DATA = {

  // ─── PROFILE ────────────────────────────────────────────────
  profile: {
    fullName: "Eduardo Braun",
    firstName: "Eduardo",
    headline: "Direct Response Video Editor for Ads, VSLs & Marketing Creatives",
    avatar: "assets/profile/eduardo.png",
  },

  // ─── PROJECT GROUPS (2 videos each) ─────────────────────────
  projectGroups: [

    {
      id: "vsls",
      label: "VSLs",
      note: "Sales videos",
      more: {
        title: "Full-length VSL samples",
        text: "Complete 50-min VSLs, start to finish",
        url: "https://drive.google.com/drive/u/0/folders/1zi2sdNGSMrVp-bRXNB59ATZntX6hjyXv",
      },
      projects: [
        {
          title: "Lead VSL — Veteran Testimonial",
          client: "AI Avatar / Testimonials",
          tag: "Lead VSL",
          formatLabel: "9:16",
          format: "vertical",
          thumbnail: "https://i.ytimg.com/vi/RucrTf8JC9U/hq720.jpg",
          thumbZoom: 1.34,
          previewType: "youtube",
          youtubeId: "RucrTf8JC9U",
        },
        {
          title: "Lead VSL — AI Avatar",
          client: "AI Avatar / Testimonials",
          tag: "Lead VSL",
          formatLabel: "3:4",
          format: "portrait",
          thumbnail: "assets/work/thumbnails/8.png",               // frame from the video
          previewType: "youtube",
          youtubeId: "9TOk0CJXojA",
        },
        // Spares (not shown while MAX_PER_GROUP = 2):
        // Bariatric Seed Trick VSL — taken down by YouTube (MTJ_jPpoYxE / md13ny-MOHo), thumbnail kept:
        { title: "Bariatric Seed Trick VSL", client: "Weight loss / DTC", tag: "VSL", formatLabel: "9:16", format: "vertical", thumbnail: "assets/work/thumbnails/vsl-1102-hook.jpg", previewType: "youtube", youtubeId: "" },
        { title: "AI Avatar VSL", client: "AI Avatar / Testimonials", tag: "VSL", formatLabel: "3:4", format: "portrait", thumbnail: "assets/work/thumbnails/1.png", previewType: "youtube", youtubeId: "PQQtCBS6FEM" },
        { title: "Jejum 2.0", client: "MeuFluxo / Lucas Mallmann", tag: "VSL", formatLabel: "3:4", format: "portrait", thumbnail: "assets/work/thumbnails/5.png", previewType: "youtube", youtubeId: "g15-es1pPw0" },
        { title: "Fator da Atração", client: "Luz da Serra / Bruno Gimenes", tag: "VSL", formatLabel: "16:9", format: "landscape", thumbnail: "assets/work/thumbnails/9.png", previewType: "youtube", youtubeId: "kJ1WUbt08gA" },
      ]
    },

    {
      id: "ai-ugc",
      label: "AI UGC",
      note: "Paid social",
      projects: [
        { title: "AI UGC #1", client: "AI creator ad", tag: "AI UGC", formatLabel: "9:16", format: "vertical", thumbnail: "https://i.ytimg.com/vi/MHBEMjtmBiE/oar2.jpg", previewType: "youtube", youtubeId: "MHBEMjtmBiE" },
        { title: "AI UGC #2", client: "AI creator ad", tag: "AI UGC", formatLabel: "9:16", format: "vertical", thumbnail: "https://i.ytimg.com/vi/S5_8YOc9Vk0/oar2.jpg", previewType: "youtube", youtubeId: "S5_8YOc9Vk0" },
      ]
    },

    {
      id: "drama-ads",
      label: "Drama Ads",
      note: "Story-driven ads",
      projects: [
        // YouTube gives these a 16:9 thumbnail, so it is zoomed in to the vertical frame
        { title: "Drama Ad", client: "Story-driven ad", tag: "Drama Ad", formatLabel: "9:16", format: "vertical", thumbnail: "https://i.ytimg.com/vi/pLh5uP4d8d0/hq720.jpg", thumbZoom: 1.34, previewType: "youtube", youtubeId: "pLh5uP4d8d0" },
        { title: "Animated Drama Ad", client: "Story-driven ad", tag: "Drama Ad", formatLabel: "9:16", format: "vertical", thumbnail: "https://i.ytimg.com/vi/HjJd-Byl61A/hq720.jpg", thumbZoom: 1.34, previewType: "youtube", youtubeId: "HjJd-Byl61A" },
      ]
    },

    {
      id: "animations",
      label: "Animations",
      note: "AI animation creatives",
      more: {
        title: "More animation ads",
        text: "The full library of animated creatives",
        url: "https://drive.google.com/drive/u/0/folders/1WJsl_d5pKzaDX1jNX8w9hhg8nXhMfEuI",
      },
      projects: [
        { title: "Animation Ad #1", client: "AI animation", tag: "Animation", formatLabel: "9:16", format: "vertical", thumbnail: "https://i.ytimg.com/vi/rkDJDk93MDw/oar2.jpg", previewType: "youtube", youtubeId: "rkDJDk93MDw" },
        { title: "Animation Ad #2", client: "AI animation", tag: "Animation", formatLabel: "9:16", format: "vertical", thumbnail: "https://i.ytimg.com/vi/Q6Mo8Y_OxYI/oar2.jpg", previewType: "youtube", youtubeId: "Q6Mo8Y_OxYI" },
      ]
    },

  ],

  // ─── SPENT PROOF ────────────────────────────────────────────
  // Each row = one live ad creative. spend = amount invested in that ad,
  // roas = return on ad spend (revenue ÷ spend). Totals are calculated.
  spentProof: {
    currency: "$",          // ← symbol shown before spend values ("" to hide)
    screenshot: "assets/proof/spent-proof-full.jpg",     // the full print, shown as-is
    // Where the columns sit in the screenshot: [left %, width %]
    columns: { editor: [0, 10], spend: [56.95, 26.5], roas: [83.5, 16.5] },
    rows: [
      { creative: "DCT#127", client: "Zyren Beauty", launched: "09/10", status: "Live", spend: 34087.31, roas: 1.99 },
      { creative: "DCT#196", client: "Zyren Beauty", launched: "09/10", status: "Live", spend: 858.50,   roas: 1.469 },
      { creative: "DCT#131", client: "Zyren Beauty", launched: "11/10", status: "Live", spend: 13950.68, roas: 1.571 },
      { creative: "DCT#136", client: "Zyren Beauty", launched: "11/10", status: "Live", spend: 76303.54, roas: 1.6022 },
    ],
  },

  // ─── CLIENTS ────────────────────────────────────────────────
  clients: [
    { name: "Zyren Beauty",  niche: "Skincare — rising brand",          url: "https://zyrenofficial.com", image: "assets/clients/zyren.webp" },
    { name: "Sabel Life",    niche: "Gut health supplements",           url: "https://sabellife.com", image: "assets/clients/sabel.webp" },
    { name: "MeuFluxo",      niche: "Health-related courses",           url: "https://www.instagram.com/meufluxo/", image: "assets/clients/meufluxo.jpg" },
    { name: "Projeto P&S",   niche: "Diabetes, prostate, weight loss",  url: "", image: "", initials: "P&S" },
    { name: "Luz da Serra",  niche: "Spirituality & holistic",          url: "https://www.instagram.com/luzdaserraoficial/", image: "assets/clients/luzdaserra.jpg" },
    { name: "Bruno Gimenes", niche: "Prosperity & life alignment",      url: "https://www.instagram.com/brunojgimenes/", image: "assets/clients/bruno.jpg" },
  ],

  // ─── CONTACT ────────────────────────────────────────────────
  contact: {
    email: "eduardobraun50@gmail.com",
    discord: "eduardozbraun",
    whatsapp: "5554984473403",            // country code + number, digits only
    whatsappDisplay: "+55 54 98447-3403",
  },

  // ─── SERVICES (pills in the hero) ───────────────────────────
  services: {
    video: ["VSLs", "Lead VSLs", "Ad Creatives", "Short-Form Ads", "Drama Ads"],
    ai:    ["AI UGC", "AI Avatars", "AI Lip Sync", "AI Voiceovers", "AI Animation"],
  },
};

// ================================================================
//  SITE LOGIC — no need to edit below for content updates
// ================================================================

function getInitials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

// Only the projects actually displayed (first MAX_PER_GROUP of each group)
function getVisibleGroups() {
  return SITE_DATA.projectGroups.map(g => ({ ...g, projects: g.projects.slice(0, MAX_PER_GROUP) }));
}
function getAllProjects() {
  return getVisibleGroups().flatMap(g => g.projects);
}

function hasPreview(p) {
  switch (p.previewType) {
    case "youtube":    return Boolean(p.youtubeId);
    case "vturb":      return Boolean(p.vturbEmbedCode);
    case "localVideo": return Boolean(p.localVideoSrc);
    case "image":      return Boolean(p.imageSrc);
    case "external":   return Boolean(p.externalUrl);
    default:           return false;
  }
}

// ─── HERO ────────────────────────────────────────────────────

function renderHero() {
  const { fullName, headline, avatar } = SITE_DATA.profile;
  document.getElementById("site-logo").textContent = fullName;
  document.getElementById("hero-name").textContent = SITE_DATA.profile.firstName || fullName;
  document.getElementById("hero-headline").textContent = headline;

  const avatarEl = document.getElementById("hero-avatar");
  avatarEl.innerHTML = avatar
    ? `<img src="${avatar}" alt="${fullName}" class="avatar-img" />`
    : `<span class="avatar-initials">${getInitials(fullName)}</span>`;
}

function renderServices() {
  const strip = document.getElementById("services-strip");
  if (!strip) return;
  const group = (title, items) => {
    const g = document.createElement("div");
    g.className = "services-group";
    g.innerHTML = `<span class="services-group-label">${title}</span>
      <div class="services-pills">${items.map(t => `<span class="service-pill">${t}</span>`).join("")}</div>`;
    strip.appendChild(g);
  };
  group("Video Editing", SITE_DATA.services.video);
  group("AI Production", SITE_DATA.services.ai);
}

// ─── SELECTED WORK ───────────────────────────────────────────

function renderWork() {
  const container = document.getElementById("work-groups-container");
  if (!container) return;
  const all = getAllProjects();

  getVisibleGroups().forEach(group => {
    const groupEl = document.createElement("div");
    groupEl.className = "work-group reveal";
    groupEl.id = `group-${group.id}`;
    groupEl.innerHTML = `
      <div class="work-group-header">
        <span class="work-group-label">${group.label}</span>
        ${group.note ? `<span class="work-group-note">${group.note}</span>` : ""}
      </div>`;

    const pair = document.createElement("div");
    pair.className = "work-pair";
    group.projects.forEach(p => pair.appendChild(createProjectCard(p, all.indexOf(p))));
    groupEl.appendChild(pair);
    if (group.more && group.more.url) groupEl.appendChild(createMoreTile(group.more));
    container.appendChild(groupEl);
  });
}

// "More work" tile — links to a Drive folder (or any URL) with extra samples
function createMoreTile(more) {
  const a = document.createElement("a");
  a.className = "more-tile";
  a.href = more.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.innerHTML = `
    <span class="more-tile-icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
    </span>
    <span class="more-tile-text">
      <span class="more-tile-kicker">More work</span>
      <span class="more-tile-title">${more.title}</span>
      ${more.text ? `<span class="more-tile-sub">${more.text}</span>` : ""}
    </span>
    <span class="more-tile-cta">Open folder
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>`;
  return a;
}

const PLAY_SVG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="white" aria-hidden="true"><polygon points="8,5 20,12 8,19"/></svg>`;

function createProjectCard(project, index) {
  const ready = hasPreview(project);
  const card = document.createElement(ready ? "button" : "div");
  card.className = `project-card format-${project.format}` + (ready ? " is-clickable" : "");
  if (ready) {
    card.type = "button";
    card.setAttribute("aria-label", `Play ${project.title}`);
    card.addEventListener("click", () => openModal(index));
  }
  card.style.textAlign = "left";
  card.style.width = "100%";

  const placeholder = `
    <div class="card-thumb-placeholder" style="${project.thumbnail ? "display:none;" : ""}">
      <svg class="thumb-play-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="23" stroke="rgba(192,130,64,0.25)" stroke-width="1.5"/>
        <polygon points="20,16 34,24 20,32" fill="rgba(192,130,64,0.4)"/>
      </svg>
      ${ready ? "" : "<span>Coming soon</span>"}
    </div>`;

  const img = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title}" class="card-thumb-img" loading="lazy" style="--z:${project.thumbZoom || 1}"
         onerror="if(this.dataset.fb){this.style.display='none';this.nextElementSibling.style.display='flex';}else{this.dataset.fb=1;this.src=${project.youtubeId ? `'https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg'` : "''"};}" />`
    : "";

  card.innerHTML = `
    <div class="card-thumb">
      ${img}${placeholder}
      ${project.formatLabel ? `<span class="card-format-badge">${project.formatLabel}</span>` : ""}
      ${ready ? `<div class="card-thumb-overlay"><span class="card-play">${PLAY_SVG}</span></div>` : ""}
      ${!ready && project.thumbnail ? `<span class="card-soon">Coming soon</span>` : ""}
    </div>
    <div class="card-body">
      <h3 class="card-title">${project.title}</h3>
      ${project.client ? `<p class="card-client">${project.client}</p>` : ""}
    </div>`;
  return card;
}

// ─── CLIENTS ─────────────────────────────────────────────────

const EXT_SVG = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function renderClients() {
  const track = document.getElementById("clients-track");
  if (!track) return;

  SITE_DATA.clients.forEach(client => {
    const isLink = Boolean(client.url);
    const card = document.createElement(isLink ? "a" : "div");
    card.className = "client-card" + (isLink ? " client-card--link" : "");
    if (isLink) { card.href = client.url; card.target = "_blank"; card.rel = "noopener noreferrer"; }

    const initials = client.initials || getInitials(client.name);
    const imageHtml = client.image
      ? `<img src="${client.image}" alt="${client.name}" class="client-logo" loading="lazy"
           onerror="this.outerHTML='<span class=&quot;client-initials&quot;>${initials.replace("&", "&amp;amp;")}</span>'" />`
      : `<span class="client-initials">${initials.replace("&", "&amp;")}</span>`;

    card.innerHTML = `
      <div class="client-image-wrap">${imageHtml}</div>
      <div class="client-info">
        <span class="client-name">${client.name}${isLink ? EXT_SVG : ""}</span>
        <span class="client-niche">${client.niche}</span>
      </div>`;
    track.appendChild(card);
  });
}

// ─── REVEAL ON SCROLL ────────────────────────────────────────

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("is-visible")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach((e, i) => { e.style.transitionDelay = `${(i % 2) * 80}ms`; io.observe(e); });
}

// ─── RENDER: CONTACT ────────────────────────────────────────────

function renderContact() {
  const emailText = document.getElementById("contact-email-text");
  const discordText = document.getElementById("contact-discord-text");
  
  if (emailText) emailText.textContent = SITE_DATA.contact.email;
  if (discordText) discordText.textContent = SITE_DATA.contact.discord;

  const waText = document.getElementById("contact-whatsapp-text");
  const waLink = document.getElementById("contact-whatsapp-link");
  if (waText) waText.textContent = SITE_DATA.contact.whatsappDisplay;
  if (waLink) waLink.href = `https://wa.me/${SITE_DATA.contact.whatsapp}`;

  const setupCopy = (btnId, textToCopy) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("copied");
        }, 2000);
      });
    });
  };

  setupCopy("contact-email-copy", SITE_DATA.contact.email);
  setupCopy("contact-discord-copy", SITE_DATA.contact.discord);
}

// ─── RENDER: SPENT PROOF ────────────────────────────────────────

function renderSpentProof() {
  const container = document.getElementById("proof-cards");
  const data = SITE_DATA.spentProof;
  if (!container || !data || !data.rows || !data.rows.length) return;

  const cur = data.currency || "";
  const money = (v, dec = 0) => cur + v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const totalSpend = data.rows.reduce((t, r) => t + r.spend, 0);
  const blendedRoas = data.rows.reduce((t, r) => t + r.spend * r.roas, 0) / totalSpend;
  const bestRoas = Math.max(...data.rows.map(r => r.roas));

  container.innerHTML = `
    <figure class="proof-shot">
      <div class="proof-shot-labels" aria-hidden="true">
        <span class="proof-shot-label proof-shot-label--editor" style="left:${data.columns.editor[0]}%;width:${data.columns.editor[1]}%">Editor</span>
        <span class="proof-shot-label proof-shot-label--spend" style="left:${data.columns.spend[0]}%;width:${data.columns.spend[1]}%">Ad spend</span>
        <span class="proof-shot-label proof-shot-label--roas" style="left:${data.columns.roas[0]}%;width:${data.columns.roas[1]}%">ROAS</span>
      </div>
      <div class="proof-shot-frame">
        <img src="${data.screenshot}" alt="Client ads tracker: ads edited by Eduardo, with ad spend and ROAS" loading="lazy" />
        <span class="proof-shot-box proof-shot-box--spend" style="left:${data.columns.spend[0]}%;width:${data.columns.spend[1]}%"></span>
        <span class="proof-shot-box proof-shot-box--roas" style="left:${data.columns.roas[0]}%;width:${data.columns.roas[1]}%"></span>
      </div>
      <figcaption class="proof-legend">A sample of my live ads, straight from a client's tracker. <b>Ad spend</b> = money invested in the ad · <b>ROAS</b> = revenue ÷ ad spend</figcaption>
    </figure>`;

  const shot = container.querySelector(".proof-shot-frame");
  if (shot) shot.addEventListener("click", () => openProofImage({ imageSrc: data.screenshotFull || data.screenshot, label: "Ads manager screenshot" }));
}

function openProofImage(proof) {
  const overlay = document.getElementById("proof-modal-overlay");
  const img = document.getElementById("proof-modal-img");
  if (!overlay || !img) return;
  img.src = proof.imageSrc;
  img.alt = proof.label;
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function initProofModal() {
  const overlay = document.getElementById("proof-modal-overlay");
  const closeBtn = document.getElementById("proof-modal-close");

  if (closeBtn) closeBtn.addEventListener("click", () => {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  });

  if (overlay) overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay?.classList.contains("is-open")) {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  });
}



// ─── YOUTUBE PLAYER (with automatic fallback) ────────────────────
// Uses the official IFrame API so that if YouTube refuses to play inside the site
// (error 153/150/101 etc.), the modal swaps to a "Watch on YouTube" card instead of an error screen.

let ytApiPromise = null;
function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise(resolve => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(); };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onerror = () => resolve();          // API blocked → plain iframe below still works
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

function showYouTubeFallback(player, project) {
  player.innerHTML = `<div class="modal-placeholder"><p>This preview couldn't load right now.</p>
    <p style="font-size:0.85rem;opacity:0.6;margin-top:0.5rem;">Please try again in a moment.</p></div>`;
}

function renderYouTube(player, project, watchUrl) {
  const holder = document.createElement("div");
  holder.className = "modal-iframe";
  holder.id = "yt-holder-" + Date.now();
  player.appendChild(holder);


  loadYouTubeApi().then(() => {
    if (!document.getElementById(holder.id)) return;          // modal closed meanwhile
    if (window.YT && window.YT.Player) {
      new window.YT.Player(holder.id, {
        videoId: project.youtubeId,
        host: "https://www.youtube.com",
        playerVars: { autoplay: 1, rel: 0, modestbranding: 1, playsinline: 1, origin: location.origin },
        events: { onError: () => showYouTubeFallback(player, project) },
      });
    } else {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&playsinline=1`;
      iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      iframe.className = "modal-iframe";
      holder.replaceWith(iframe);
    }
  });
}

let modalOpen = false;

function openModal(projectIndex) {
  const project = getAllProjects()[projectIndex];
  if (!project) return;

  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  const player = document.getElementById("modal-player");

  if (!overlay || !content || !player) return;

  // Clear previous content
  player.innerHTML = "";
  const ytLink = document.getElementById("modal-yt-link");
  if (ytLink) ytLink.hidden = true;

  // Reset all format classes, then apply the correct one
  content.classList.remove("modal-content--vertical", "modal-content--portrait");
  if (project.format === "vertical") {
    content.classList.add("modal-content--vertical");
  } else if (project.format === "portrait") {
    content.classList.add("modal-content--portrait");
  }

  // Build player content
  if (project.previewType === "youtube" && project.youtubeId) {
    const watchUrl = `https://www.youtube.com/watch?v=${project.youtubeId}`;
    // YouTube only plays embeds on a real website (Vercel, Netlify, localhost…).
    // Opened straight from disk (file://) it would show error 153, so explain instead.
    if (!/^https?:$/.test(location.protocol)) {
      player.innerHTML = `<div class="modal-placeholder"><p>The video preview plays here once the site is online.</p>
        <p style="font-size:0.85rem;opacity:0.6;margin-top:0.5rem;">(YouTube blocks embeds on pages opened directly from your computer.)</p></div>`;
    } else {
      renderYouTube(player, project, watchUrl);
    }

  } else if (project.previewType === "vturb" && project.vturbEmbedCode) {
    // Inject VTurb embed code only when modal opens
    const wrapper = document.createElement("div");
    wrapper.className = "modal-vturb-wrap";
    wrapper.innerHTML = project.vturbEmbedCode;
    player.appendChild(wrapper);
    // Execute any scripts inside the embed code
    wrapper.querySelectorAll("script").forEach(oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

  } else if (project.previewType === "localVideo" && project.localVideoSrc) {
    const video = document.createElement("video");
    video.src = project.localVideoSrc;
    video.controls = true;
    video.preload = "metadata";
    if (project.thumbnail) video.poster = project.thumbnail;
    video.className = "modal-video";
    player.appendChild(video);

  } else if (project.previewType === "image" && project.imageSrc) {
    const img = document.createElement("img");
    img.src = project.imageSrc;
    img.alt = project.title;
    img.className = "modal-image";
    player.appendChild(img);

  } else if (project.previewType === "external" && project.externalUrl) {
    window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    return;

  } else {
    // Placeholder: no valid embed configured yet
    player.innerHTML = `
      <div class="modal-placeholder">
        <p>Preview not configured yet.</p>
        <p style="font-size:0.85rem;opacity:0.5;margin-top:0.5rem;">
          Add a YouTube ID, VTurb embed, or local video file in app.js to enable this preview.
        </p>
      </div>`;
  }

  // Modal title
  const titleEl = document.getElementById("modal-title");
  if (titleEl) titleEl.textContent = project.title;

  const tagEl = document.getElementById("modal-tag");
  if (tagEl) tagEl.textContent = project.tag || "";

  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  modalOpen = true;
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  const player = document.getElementById("modal-player");

  if (!overlay) return;

  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
  modalOpen = false;

  // Stop & unload all media
  setTimeout(() => {
    if (player) player.innerHTML = "";
  }, 300);
}

function initModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  const content = document.getElementById("modal-content");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOpen) closeModal();
  });
}

// ─── STICKY HEADER ──────────────────────────────────────────────

function initStickyHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

// ─── SMOOTH SCROLL ──────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const headerH = document.getElementById("site-header")?.offsetHeight || 60;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// ─── MOBILE NAV TOGGLE ──────────────────────────────────────────

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.classList.toggle("is-active", isOpen);
  });

  // Close on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", false);
      toggle.classList.remove("is-active");
    });
  });
}

// ─── INIT ────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderServices();
  renderWork();
  renderSpentProof();
  renderClients();
  renderContact();
  initModal();
  initProofModal();
  initStickyHeader();
  initSmoothScroll();
  initMobileNav();
  initReveal();
  const y = document.getElementById("footer-year");
  if (y) y.textContent = new Date().getFullYear();
});
