/**
 * ============================================================
 *  Eduardo Braun — Portfolio
 *  app.js — Central data + all site logic
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *
 *  All editable content lives in the `SITE_DATA` object below.
 *  You do not need to touch the code after that section.
 *
 *  SECTIONS YOU CAN EDIT:
 *  1. profile      — Your name, tagline, avatar path
 *  2. projects     — Your portfolio work (see field guide below)
 *  3. clients      — Client / project cards
 *  4. contact      — Email, Discord, WhatsApp toggle
 *
 *  ─────────────────────────────────────────────────────────────
 *  PROJECT FIELD GUIDE
 *  ─────────────────────────────────────────────────────────────
 *
 *  title           — Project name shown on the card
 *  tag             — Small label, e.g. "Ad Creative", "VSL"
 *  result          — Metric or note shown on the card
 *                    Use "[replace with metric]" as placeholder
 *                    Use "Sample available on request" for private work
 *
 *  format          — Card layout:
 *                    "landscape"  → 16:9, wide cards (VSLs, YouTube, Sales Videos)
 *                    "vertical"   → 9:16, tall cards (Reels, TikToks, Shorts)
 *                    "portrait"   → 3:4, tall cards (vertical ads)
 *                    "square"     → 1:1
 *
 *  thumbnail       — Path to thumbnail image:
 *                    "assets/work/thumbnails/your-file.jpg"
 *                    Leave as "" to use a warm gradient placeholder
 *
 *  previewType     — How the preview opens:
 *                    "youtube"    → Opens YouTube in a modal (uses youtubeId)
 *                    "vturb"      → Opens VTurb embed in a modal (uses vturbEmbedCode)
 *                    "localVideo" → Opens a local MP4 (uses localVideoSrc)
 *                    "image"      → Opens an image in a modal (uses imageSrc)
 *                    "external"   → Opens externalUrl in a new tab
 *                    "request"    → Shows "Sample available on request"
 *
 *  youtubeId       — YouTube video ID only (the part after ?v=)
 *                    Example: For https://youtube.com/watch?v=abc123 → "abc123"
 *
 *  vturbEmbedCode  — Paste the full VTurb JS embed snippet here as a string
 *                    Example: '<script ...></script>'
 *                    The script will only run when the user clicks Preview
 *
 *  localVideoSrc   — Path to local .mp4 file:
 *                    "assets/work/videos/your-video.mp4"
 *
 *  imageSrc        — Path to image for image preview
 *
 *  externalUrl     — Full URL for external link previews
 *
 *  availability    — "preview"             → shows Preview button
 *                    "private"             → shows nothing
 *                    "available_on_request" → shows "Sample available on request"
 *
 *  ─────────────────────────────────────────────────────────────
 *  HOW TO ADD A YOUTUBE PREVIEW
 *  ─────────────────────────────────────────────────────────────
 *  1. Upload the video to YouTube (can be unlisted)
 *  2. Copy the video ID from the URL (?v=XXXXXX)
 *  3. Set previewType: "youtube"
 *  4. Set youtubeId: "XXXXXX"
 *  5. Set availability: "preview"
 *
 *  ─────────────────────────────────────────────────────────────
 *  HOW TO ADD A VTURB EMBED
 *  ─────────────────────────────────────────────────────────────
 *  1. Copy your VTurb embed code (usually a <script> tag)
 *  2. Set previewType: "vturb"
 *  3. Paste the full code into vturbEmbedCode as a JS string
 *     (Use backticks for multi-line: vturbEmbedCode: `<script ...></script>`)
 *  4. Set availability: "preview"
 *  VTurb will only load when the user clicks Preview — not on page load.
 *
 *  ─────────────────────────────────────────────────────────────
 *  HOW TO ADD A LOCAL VIDEO
 *  ─────────────────────────────────────────────────────────────
 *  1. Drop your .mp4 file into: assets/work/videos/
 *  2. Set previewType: "localVideo"
 *  3. Set localVideoSrc: "assets/work/videos/your-file.mp4"
 *  4. Optionally set thumbnail: "assets/work/thumbnails/your-thumb.jpg"
 *
 *  ─────────────────────────────────────────────────────────────
 *  HOW TO REPLACE THE HERO PHOTO
 *  ─────────────────────────────────────────────────────────────
 *  1. Drop your photo into: assets/profile/
 *  2. Update profile.avatar below to: "assets/profile/your-photo.jpg"
 *  3. The photo will appear as a circle in the hero
 *
 *  ─────────────────────────────────────────────────────────────
 *  HOW TO ADD CLIENT LOGOS / IMAGES
 *  ─────────────────────────────────────────────────────────────
 *  1. Drop the image into: assets/clients/
 *  2. Set image: "assets/clients/your-logo.png" in the client object
 *  3. Leave image: "" to show the client initials as placeholder
 *
 *  ─────────────────────────────────────────────────────────────
 *  HOW TO ENABLE WHATSAPP
 *  ─────────────────────────────────────────────────────────────
 *  1. Set contact.showWhatsapp: true
 *  2. Set contact.whatsapp to your number with country code
 *     Example: "5511999999999" (Brazil +55, no spaces or dashes)
 * ============================================================
 */

const SITE_DATA = {

  // ─── PROFILE ────────────────────────────────────────────────
  profile: {
    // Name shown in the browser tab and header
    fullName: "Eduardo Braun",
    // First name only — shown in the hero
    firstName: "Eduardo",
    // Headline shown in the hero
    headline: "Direct Response Video Editor for Ads, VSLs & Marketing Creatives",
    // Path to your circular avatar photo
    // Replace with your actual photo path: "assets/profile/photo.jpg"
    avatar: "assets/profile/eduardo.png", // Leave empty to use initials placeholder
  },

  // ─── PROJECT GROUPS ──────────────────────────────────────────
  //
  // Projects are organized by commercial purpose, not by format.
  // Each group has a label, a layout hint, and a list of projects.
  //
  // layout: "featured" → first project is the large hero card,
  //                       remaining projects go in a compact secondary grid.
  // layout: "grid"     → all projects in a uniform portrait/vertical grid.
  //
  // Each project supports:
  //   title          — project name
  //   client         — client or project label (shown under title)
  //   tag            — primary category badge (VSL, Ad Creative, etc.)
  //   formatLabel    — small format badge ("16:9", "9:16", "3:4")
  //   format         — card aspect ratio: "landscape" | "vertical" | "portrait" | "square"
  //   result         — metric / note shown on the card
  //   thumbnail      — path to thumbnail image (leave "" for warm gradient placeholder)
  //   previewType    — "youtube" | "vturb" | "localVideo" | "image" | "external" | "request"
  //   youtubeId      — YouTube video ID (the part after ?v=)
  //   vturbEmbedCode — full VTurb <script> embed code as a JS string
  //   localVideoSrc  — path to local .mp4 file
  //   imageSrc       — path to image for image preview
  //   externalUrl    — full URL for external link previews
  //   availability   — "preview" | "available_on_request" | "private"
  //
  projectGroups: [

    // ── GROUP 1: VSLs & Lead Videos ──────────────────────────
    {
      id: "vsls-lead",
      label: "VSLs & Lead Videos",
      layout: "grid-then-featured", // 8 portrait/vertical, then 1 landscape
      projects: [
        {
          title: "AI Avatar VSL #1",
          client: "AI Avatar / Testimonials",
          tag: "VSL",
          formatLabel: "3:4",
          format: "portrait",
          result: "AI avatar / testimonial-style VSL",
          thumbnail: "assets/work/thumbnails/1.png",
          previewType: "youtube",
          youtubeId: "PQQtCBS6FEM",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "AI Avatar VSL #2",
          client: "AI Avatar / Testimonials",
          tag: "VSL",
          formatLabel: "3:4",
          format: "portrait",
          result: "AI avatar / testimonial-style VSL",
          thumbnail: "assets/work/thumbnails/2.png",
          previewType: "youtube",
          youtubeId: "Pd03L-sXGwg",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "AI Avatar VSL #3",
          client: "AI Avatar / Testimonials",
          tag: "VSL",
          formatLabel: "3:4",
          format: "portrait",
          result: "AI avatar / testimonial-style VSL",
          thumbnail: "assets/work/thumbnails/3.png",
          previewType: "youtube",
          youtubeId: "LZsDEZDFj5E",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "Dieta das 3 Fases",
          client: "MeuFluxo / Eduardo Class",
          tag: "VSL",
          formatLabel: "9:16",
          format: "vertical",
          result: "Vertical VSL",
          thumbnail: "assets/work/thumbnails/4.png",
          previewType: "youtube",
          youtubeId: "A3773P1FsnY",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "Jejum 2.0",
          client: "MeuFluxo / Lucas Mallmann",
          tag: "VSL",
          formatLabel: "3:4",
          format: "portrait",
          result: "Sales video / VSL",
          thumbnail: "assets/work/thumbnails/5.png",
          previewType: "youtube",
          youtubeId: "g15-es1pPw0",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "AI Avatar Lead VSL #1",
          client: "AI Avatar / Testimonials",
          tag: "Lead VSL",
          formatLabel: "9:16",
          format: "vertical",
          result: "AI avatar / testimonial creative",
          thumbnail: "assets/work/thumbnails/6.png",
          previewType: "youtube",
          youtubeId: "RucrTf8JC9U",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "AI Avatar Lead VSL #2",
          client: "AI Avatar / Testimonials",
          tag: "Lead VSL",
          formatLabel: "9:16",
          format: "vertical",
          result: "AI avatar / testimonial creative",
          thumbnail: "assets/work/thumbnails/7.png",
          previewType: "youtube",
          youtubeId: "e__L4fKW_yg",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "AI Avatar Lead VSL #3",
          client: "AI Avatar / Testimonials",
          tag: "Lead VSL",
          formatLabel: "3:4",
          format: "portrait",
          result: "AI avatar / testimonial creative",
          thumbnail: "assets/work/thumbnails/8.png",
          previewType: "youtube",
          youtubeId: "9TOk0CJXojA",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "Fator da Atração",
          client: "Luz da Serra / Bruno Gimenes",
          tag: "VSL",
          formatLabel: "16:9",
          format: "landscape",
          result: "Sales video / VSL",
          thumbnail: "assets/work/thumbnails/9.png",
          previewType: "youtube",
          youtubeId: "kJ1WUbt08gA",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        }
      ]
    },

    // ── GROUP 2: Ads & Microlead VSLs ──────────────────────────────
    {
      id: "ads",
      label: "Ads & Micro VSLs",
      layout: "grid",
      projects: [
        {
          title: "AI Avatar Microlead VSL",
          client: "AI Avatar / Testimonials",
          tag: "Ad / Microlead VSL",
          formatLabel: "3:4",
          format: "portrait",
          result: "Short-form ad creative",
          thumbnail: "assets/work/thumbnails/10.png",
          previewType: "youtube",
          youtubeId: "_0zXMs6B4eM",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "HardCopy Style Ad",
          client: "MeuFluxo / Marcelo Roxo",
          tag: "Ad Creative",
          formatLabel: "3:4",
          format: "portrait",
          result: "Hard copy style ad",
          thumbnail: "assets/work/thumbnails/11.png",
          previewType: "youtube",
          youtubeId: "VcGVJtZyFtk",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "Weight Loss Ad #1",
          client: "MeuFluxo / Lucas Mallmann",
          tag: "Ad Creative",
          formatLabel: "9:16",
          format: "vertical",
          result: "Weight loss ad creative",
          thumbnail: "assets/work/thumbnails/12.png",
          previewType: "youtube",
          youtubeId: "czWMnlSrBYE",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
        {
          title: "Weight Loss Ad #2",
          client: "MeuFluxo / Lucas Mallmann",
          tag: "Ad Creative",
          formatLabel: "9:16",
          format: "vertical",
          result: "Weight loss ad creative",
          thumbnail: "assets/work/thumbnails/13.png",
          previewType: "youtube",
          youtubeId: "cg4OSid6TeE",
          vturbEmbedCode: "",
          localVideoSrc: "",
          imageSrc: "",
          externalUrl: "",
          availability: "preview"
        },
      ]
    },

  ],

  // ─── CLIENTS ────────────────────────────────────────────────
  // Add or remove client cards here.
  // Leave image: "" to show initials as a placeholder.
  clients: [
    {
      name: "MeuFluxo",
      niche: "Health-related courses",
      url: "https://www.instagram.com/meufluxo/",
      image: "assets/clients/meufluxo.jpg"
    },
    {
      name: "Projeto P&S",
      niche: "Niche marketing / diabetes, prostate, weight loss",
      url: "",
      image: ""
    },
    {
      name: "Applaus",
      niche: "Theatre projects based on Augusto Cury books",
      url: "https://www.instagram.com/applausarteyalma/",
      image: "assets/clients/applaus.jpg"
    },
    {
      name: "Luz da Serra",
      niche: "Spirituality and holistic treatments",
      url: "https://www.instagram.com/luzdaserraoficial/",
      image: "assets/clients/luzdaserra.jpg"
    },
    {
      name: "Lucas Mallmann",
      niche: "Nutrition and weight loss",
      url: "https://www.instagram.com/lucasmallmann/",
      image: "assets/clients/lucas.jpg"
    },
    {
      name: "Eduardo Class",
      niche: "Nutrition",
      url: "https://www.instagram.com/dreduardoclaas/",
      image: "assets/clients/eduardo.jpg"
    },
    {
      name: "Patrícia Cândido",
      niche: "Spirituality and life mission",
      url: "https://www.instagram.com/pat.candido/",
      image: "assets/clients/patricia.jpg"
    },
    {
      name: "Bruno Gimenes",
      niche: "Prosperity and life alignment",
      url: "https://www.instagram.com/brunojgimenes/",
      image: "assets/clients/bruno.jpg"
    },
    {
      name: "Fitoenergética",
      niche: "Plant-based energetic treatment",
      url: "https://www.instagram.com/fitoenergeticaoficial/",
      image: "assets/clients/fito.jpg"
    },
    {
      name: "Dr. Marcelo Roxo",
      niche: "Neurology",
      url: "https://www.instagram.com/drmarceloroxo/",
      image: "assets/clients/marcelo.jpg"
    }
  ],

  // ─── CONTACT ────────────────────────────────────────────────
  contact: {
    email: "eduardobraun50@gmail.com",
    discord: "eduardozbraun",
  },

  // ─── SERVICES / WHAT I EDIT ─────────────────────────────────
  services: {
    video: [
      "VSLs",
      "Lead VSLs",
      "Ad Creatives",
      "Short-Form Ads",
      "Sales Videos",
      "YouTube Videos",
    ],
    ai: [
      "AI Avatars",
      "AI Lip Sync",
      "AI Voiceovers",
      "AI Testimonials",
      "AI UGC-style Creatives",
    ],
  },

};

// ================================================================
//  BELOW THIS LINE: SITE LOGIC
//  You do not need to edit anything below for normal content updates.
// ================================================================

// ─── UTILITIES ──────────────────────────────────────────────────

function getInitials(name) {
  return name
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function isAvailableOnRequest(project) {
  return (
    project.availability === "available_on_request" ||
    project.previewType === "request"
  );
}

// Gradient palettes for placeholder thumbnails (warm/dark tones)
const THUMB_GRADIENTS = [
  "linear-gradient(135deg, #1a1208 0%, #2e1c08 50%, #3d2410 100%)",
  "linear-gradient(135deg, #110e0a 0%, #281809 50%, #1f1108 100%)",
  "linear-gradient(135deg, #0d0b09 0%, #221408 50%, #2b1c0d 100%)",
  "linear-gradient(135deg, #160f06 0%, #2a1a0a 50%, #341f0c 100%)",
  "linear-gradient(135deg, #12100a 0%, #1e1408 50%, #261a0a 100%)",
];

function getThumbGradient(index) {
  return THUMB_GRADIENTS[index % THUMB_GRADIENTS.length];
}

// ─── RENDER: PROFILE / HEADER ───────────────────────────────────

function renderHeader() {
  const el = document.getElementById("site-logo");
  if (el) el.textContent = SITE_DATA.profile.fullName;
}

// ─── RENDER: HERO ───────────────────────────────────────────────

function renderHero() {
  const avatarEl = document.getElementById("hero-avatar");
  const nameEl = document.getElementById("hero-name");
  const headlineEl = document.getElementById("hero-headline");

  if (nameEl) nameEl.textContent = SITE_DATA.profile.firstName;
  if (headlineEl) headlineEl.textContent = SITE_DATA.profile.headline;

  if (avatarEl) {
    if (SITE_DATA.profile.avatar) {
      avatarEl.innerHTML = `<img src="${SITE_DATA.profile.avatar}" alt="${SITE_DATA.profile.fullName}" class="avatar-img" />`;
    } else {
      avatarEl.innerHTML = `<span class="avatar-initials">${getInitials(SITE_DATA.profile.fullName)}</span>`;
    }
  }
}

// ─── UTILITIES: FLAT PROJECT LIST ───────────────────────────────

// Returns all projects from all groups as a flat array.
// Used to assign stable global indices for the modal system.
function getAllProjects() {
  return SITE_DATA.projectGroups.flatMap(g => g.projects);
}

// ─── RENDER: SELECTED WORK ──────────────────────────────────────

function renderWork() {
  const container = document.getElementById("work-groups-container");
  if (!container) return;

  SITE_DATA.projectGroups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "work-group";
    groupEl.id = `group-${group.id}`;

    // Group header
    const header = document.createElement("div");
    header.className = "work-group-header";
    header.innerHTML = `<span class="work-group-label">${group.label}</span>`;
    groupEl.appendChild(header);

    if (group.layout === "grid-then-featured") {
      renderGridThenFeaturedGroup(group, groupEl);
    } else {
      renderStandardGroup(group, groupEl);
    }

    container.appendChild(groupEl);
  });
}

function renderGridThenFeaturedGroup(group, container) {
  const allProjects = getAllProjects();
  const lastProject = group.projects[group.projects.length - 1];
  const gridProjects = group.projects.slice(0, group.projects.length - 1);

  // Render the portrait/vertical grid first
  if (gridProjects.length > 0) {
    const grid = document.createElement("div");
    grid.className = "work-standard-grid";
    gridProjects.forEach((project) => {
      const idx = allProjects.indexOf(project);
      grid.appendChild(createProjectCard(project, idx));
    });
    container.appendChild(grid);
  }

  // Render the featured (landscape) card below
  if (lastProject) {
    const featuredWrap = document.createElement("div");
    featuredWrap.className = "work-group-featured-last";
    featuredWrap.style.marginTop = "var(--gap)";
    const idx = allProjects.indexOf(lastProject);
    featuredWrap.appendChild(createProjectCard(lastProject, idx));
    container.appendChild(featuredWrap);
  }
}

function renderStandardGroup(group, container) {
  const allProjects = getAllProjects();
  const grid = document.createElement("div");
  grid.className = "work-standard-grid";
  group.projects.forEach((project) => {
    const idx = allProjects.indexOf(project);
    grid.appendChild(createProjectCard(project, idx));
  });
  container.appendChild(grid);
}

function createProjectCard(project, index) {
  const card = document.createElement("div");
  card.className = `project-card format-${project.format}`;

  const onRequest = isAvailableOnRequest(project);
  const gradientBg = getThumbGradient(index);

  // Thumbnail
  let thumbHtml;
  const fallbackSvg = `
    <svg class="thumb-play-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" stroke="rgba(192,130,64,0.25)" stroke-width="1.5"/>
      <polygon points="20,16 34,24 20,32" fill="rgba(192,130,64,0.4)"/>
    </svg>
  `;

  if (project.thumbnail) {
    thumbHtml = `
      <img src="${project.thumbnail}" alt="${project.title}" class="card-thumb-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="card-thumb-placeholder" style="background: ${gradientBg}; display: none;">
        ${fallbackSvg}
      </div>`;
  } else {
    thumbHtml = `
      <div class="card-thumb-placeholder" style="background: ${gradientBg};">
        ${fallbackSvg}
      </div>`;
  }

  // Badges: tag + format label
  const tagBadge = project.tag
    ? `<span class="card-tag">${project.tag}</span>`
    : "";
  const formatBadge = project.formatLabel
    ? `<span class="card-format-badge">${project.formatLabel}</span>`
    : "";

  // Preview action
  let actionHtml;
  if (onRequest) {
    actionHtml = `<span class="card-action card-action--request">Sample available on request</span>`;
  } else {
    actionHtml = `<button class="card-action card-action--preview" data-index="${index}" aria-label="Preview ${project.title}">Preview</button>`;
  }

  card.innerHTML = `
    <div class="card-thumb">
      ${thumbHtml}
      ${!onRequest ? `<div class="card-thumb-overlay">
        <button class="card-thumb-btn" data-index="${index}" aria-label="Preview ${project.title}">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="18" cy="18" r="17" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
            <polygon points="15,12 26,18 15,24" fill="white"/>
          </svg>
        </button>
      </div>` : ""}
    </div>
    <div class="card-body">
      <div class="card-meta">
        <div class="card-badges">${tagBadge}${formatBadge}</div>
        ${actionHtml}
      </div>
      <h3 class="card-title">${project.title}</h3>
      ${project.client ? `<p class="card-client">${project.client}</p>` : ""}
      ${project.result ? `<p class="card-result">${project.result}</p>` : ""}
    </div>
  `;

  // Attach click handlers
  if (!onRequest) {
    card.querySelectorAll("[data-index]").forEach(btn => {
      btn.addEventListener("click", () => openModal(index));
    });
  }

  return card;
}

// ─── RENDER: CLIENTS ────────────────────────────────────────────

function renderClients() {
  const track = document.getElementById("clients-track");
  if (!track) return;

  SITE_DATA.clients.forEach(client => {
    const isLink = Boolean(client.url);
    const wrapperTag = isLink ? "a" : "div";
    
    const card = document.createElement(wrapperTag);
    card.className = "client-card" + (isLink ? " client-card--link" : "");
    if (isLink) {
      card.href = client.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    let imageHtml;
    if (client.image) {
      imageHtml = `<img src="${client.image}" alt="${client.name}" class="client-logo" loading="lazy" />`;
    } else {
      const fallbackInitials = client.name === "Projeto P&S" ? "P&S" : getInitials(client.name);
      imageHtml = `<div class="client-initials">${fallbackInitials}</div>`;
    }

    const cueHtml = isLink 
      ? `<span class="client-cue client-cue--link">View Instagram <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`
      : `<span class="client-cue client-cue--private">Private project</span>`;

    card.innerHTML = `
      <div class="client-image-wrap">${imageHtml}</div>
      <div class="client-info">
        <span class="client-name">${client.name}</span>
        <span class="client-niche">${client.niche}</span>
        ${cueHtml}
      </div>
    `;
    track.appendChild(card);
  });

  initCarousel();
}

// ─── RENDER: SERVICES ───────────────────────────────────────────

function renderServices() {
  const strip = document.getElementById("services-strip");
  if (!strip) return;

  const renderGroup = (title, items) => {
    const group = document.createElement("div");
    group.className = "services-group";
    
    const label = document.createElement("span");
    label.className = "services-group-label";
    label.textContent = title;
    group.appendChild(label);

    const pills = document.createElement("div");
    pills.className = "services-pills";
    items.forEach(tag => {
      const pill = document.createElement("span");
      pill.className = "service-pill";
      pill.textContent = tag;
      pills.appendChild(pill);
    });
    group.appendChild(pills);
    
    strip.appendChild(group);
  };

  renderGroup("Video Editing", SITE_DATA.services.video);
  renderGroup("AI Production", SITE_DATA.services.ai);
}

// ─── RENDER: CONTACT ────────────────────────────────────────────

function renderContact() {
  const emailText = document.getElementById("contact-email-text");
  const discordText = document.getElementById("contact-discord-text");
  
  if (emailText) emailText.textContent = SITE_DATA.contact.email;
  if (discordText) discordText.textContent = SITE_DATA.contact.discord;

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

// ─── MODAL SYSTEM ───────────────────────────────────────────────

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

  // Reset all format classes, then apply the correct one
  content.classList.remove("modal-content--vertical", "modal-content--portrait");
  if (project.format === "vertical") {
    content.classList.add("modal-content--vertical");
  } else if (project.format === "portrait") {
    content.classList.add("modal-content--portrait");
  }

  // Build player content
  if (project.previewType === "youtube" && project.youtubeId && project.youtubeId !== "PASTE_YOUTUBE_ID_HERE") {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=0&rel=0&modestbranding=1`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.className = "modal-iframe";
    player.appendChild(iframe);

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

// ─── CAROUSEL ───────────────────────────────────────────────────

function initCarousel() {
  const wrapper = document.getElementById("clients-wrapper");
  const track = document.getElementById("clients-track");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (!wrapper || !track) return;

  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;
  let hasDragged = false;

  function getCardWidth() {
    const firstCard = track.querySelector(".client-card");
    if (!firstCard) return 280;
    const style = getComputedStyle(firstCard);
    const margin = parseFloat(style.marginRight) || 0;
    return firstCard.offsetWidth + margin;
  }

  function scrollBy(direction) {
    const cardW = getCardWidth();
    wrapper.scrollBy({ left: direction * cardW, behavior: "smooth" });
  }

  if (prevBtn) prevBtn.addEventListener("click", () => scrollBy(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => scrollBy(1));

  // Mouse drag
  wrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    hasDragged = false;
    startX = e.pageX;
    scrollStart = wrapper.scrollLeft;
    wrapper.style.cursor = "grabbing";
    wrapper.style.userSelect = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 4) hasDragged = true;
    wrapper.scrollLeft = scrollStart - dx;
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    wrapper.style.cursor = "";
    wrapper.style.userSelect = "";
  });

  // Prevent link click if it was a drag
  wrapper.addEventListener("click", (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, { capture: true });

  // Touch drag (mobile)
  wrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    scrollStart = wrapper.scrollLeft;
  }, { passive: true });

  wrapper.addEventListener("touchmove", (e) => {
    const dx = e.touches[0].pageX - startX;
    wrapper.scrollLeft = scrollStart - dx;
  }, { passive: true });

  // Arrow visibility
  function updateArrows() {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = wrapper.scrollLeft <= 8;
    nextBtn.disabled = wrapper.scrollLeft + wrapper.clientWidth >= track.scrollWidth - 8;
    prevBtn.style.opacity = prevBtn.disabled ? "0.25" : "1";
    nextBtn.style.opacity = nextBtn.disabled ? "0.25" : "1";
  }

  wrapper.addEventListener("scroll", updateArrows, { passive: true });
  updateArrows();
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

// ─── INIT ────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHero();
  renderWork();
  renderClients();
  renderServices();
  renderContact();
  initModal();
  initStickyHeader();
  initSmoothScroll();
  initMobileNav();
});
