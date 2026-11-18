/* ============================================================
   POGOLOTTI · Lógica de interacción
   Popup de personas, popup de bloques, lightbox, teclado.
   ============================================================ */

let modalState = null;   // { kind: 'person' | 'period', id }
let lastFocus = null;
/* Asigna `hidden` solo si el elemento existe (el HTML puede ser de una versión anterior) */
function setHidden(id, hidden) {
  const el = document.getElementById(id);
  if (el) el.hidden = hidden;
}

const periodViews = {}; // vista con la que se abrió cada bloque: 'node' (reducida) o 'full'

function setModalOpen() {
  const modal = document.getElementById("detailModal");
  if (!modal.classList.contains("open")) {
    lastFocus = document.activeElement;
    modal.classList.add("open");
    const root = document.querySelector(".poster-container");
    if (root) root.inert = true;
    document.getElementById("modalCloseBtn").focus();
  }
  const list = modalState.kind === "person" ? peopleOrder : Object.keys(periodData);
  const n = list.indexOf(modalState.id) + 1;
  document.getElementById("modalNavLabel").textContent =
    (modalState.kind === "person" ? "PERSONAJE " : "BLOQUE ") + n + " / " + list.length;
  modal.querySelector(".modal-card").scrollTop = 0;
}

/* Secciones de contenido extenso (opcionales, definidas en periodData[id].sections) */
function renderSections(sections) {
  const box = document.getElementById("modalSections");
  if (!box) return;
  box.textContent = "";
  if (!sections || !sections.length) { box.hidden = true; return; }

  sections.forEach((s) => {
    const wrap = document.createElement("section");
    wrap.className = "modal-section";

    if (s.kicker) {
      const k = document.createElement("div");
      k.className = "modal-section-kicker";
      k.textContent = s.kicker;
      wrap.appendChild(k);
    }

    const h = document.createElement("h4");
    h.className = "modal-section-label";
    h.textContent = s.label;
    wrap.appendChild(h);

    (s.paras || []).forEach((t) => {
      const p = document.createElement("p");
      p.className = "modal-section-text";
      p.textContent = t;
      wrap.appendChild(p);
    });

    if (s.gallery) {
      const key = s.gallery === true ? "futurismo" : s.gallery;
      const g = galleries[key];
      const grid = document.createElement("div");
      grid.className = "artwork-grid";
      g.order.forEach((id) => {
        const a = g.data[id];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "artwork-thumb";
        btn.setAttribute("aria-label", "Ver ficha de «" + a.title + "», " + a.author);
        const img = document.createElement("img");
        img.src = a.img;
        img.alt = a.alt;
        img.loading = "lazy";
        img.style.objectPosition = a.thumbPos || "50% 50%";
        const cap = document.createElement("span");
        cap.className = "artwork-thumb-caption";
        cap.textContent = a.caption;
        btn.appendChild(img);
        btn.appendChild(cap);
        btn.addEventListener("click", () => openArtworkModal(id, key));
        grid.appendChild(btn);
      });
      wrap.appendChild(grid);
    }

    // Vídeo incrustado: la sección solo se muestra si el archivo existe y se puede reproducir
    if (s.video) {
      wrap.hidden = true;
      const v = document.createElement("video");
      v.className = "modal-inline-video";
      v.controls = true;
      v.playsInline = true;
      v.preload = "metadata";
      v.addEventListener("loadedmetadata", () => { wrap.hidden = false; box.hidden = false; }, { once: true });
      v.addEventListener("error", () => { wrap.remove(); if (!box.children.length) box.hidden = true; }, { once: true });
      v.src = s.video.src;
      wrap.appendChild(v);
    }

    // Enlace a un vídeo en línea: se abre en el popup de vídeo sin salir de la página
    if (s.link) {
      const p = document.createElement("p");
      p.className = "modal-section-text";
      const a = document.createElement("a");
      a.className = "modal-link";
      a.href = s.link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.link.text;
      a.addEventListener("click", (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;   // abrir en pestaña con modificadores
        e.preventDefault();
        openVideoModal({ title: s.link.text, src: s.link.url });
      });
      p.appendChild(a);
      wrap.appendChild(p);
    }

    if (s.items && s.items.length) {
      const ul = document.createElement("ul");
      ul.className = "modal-section-list";
      s.items.forEach(([k, v]) => {
        const li = document.createElement("li");
        const key = document.createElement("strong");
        key.textContent = k;
        const txt = document.createElement("span");
        txt.textContent = v;
        li.appendChild(key);
        li.appendChild(txt);
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
    }
    box.appendChild(wrap);
  });
  box.hidden = sections.every((s) => s.video);   // solo vídeos: oculta la caja hasta que alguno cargue
}

function openPersonModal(id) {
  const d = peopleData[id];
  if (!d) return;
  pauseModalVideos();
  modalState = { kind: "person", id: id };

  document.getElementById("modalYear").textContent = d.year;
  document.getElementById("modalTitle").textContent = d.title;
  document.getElementById("modalRole").textContent = d.role;
  document.getElementById("modalDescription").textContent = d.desc;

  // Ficha técnica
  const grid = document.getElementById("modalSpecs");
  grid.innerHTML = "";
  Object.entries(d.specs).forEach(([k, v]) => {
    const cell = document.createElement("div");
    const lab = document.createElement("div");
    lab.className = "modal-spec-label"; lab.textContent = k;
    const val = document.createElement("div");
    val.className = "modal-spec-val"; val.textContent = v;
    cell.appendChild(lab); cell.appendChild(val);
    grid.appendChild(cell);
  });

  const thumb = document.getElementById("modalThumb");
  thumb.src = d.img;
  thumb.alt = "Retrato serigráfico de " + d.title;

  document.getElementById("modalThumbWrap").hidden = false;
  document.getElementById("modalSpecs").hidden = false;
  document.getElementById("modalPeriodNotes").hidden = true;
  renderSections(d.sections);   // texto y galería de la ficha (si la persona los define)
  setHidden("modalVideo", true);
  document.getElementById("modalWorks").hidden = true;

  setModalOpen();
}

function openPeriodModal(periodId, view, keepView) {
  const section = document.getElementById(periodId);
  const pd = periodData[periodId];
  if (!section || !pd) return;
  modalState = { kind: "period", id: periodId };
  if (!keepView) periodViews[periodId] = view || "full";
  const compact = periodViews[periodId] === "node" && !!pd.nodeView;

  const q = (sel) => section.querySelector(sel).textContent.replace(/\s+/g, " ").trim();
  document.getElementById("modalYear").textContent =
    pd.pill || section.querySelector(".timeline-node").textContent.trim();
  document.getElementById("modalTitle").textContent = q(".period-title");
  document.getElementById("modalRole").textContent = q(".period-subtitle");
  document.getElementById("modalDescription").textContent = pd.quote;

  const notes = document.getElementById("modalPeriodNotes");
  notes.textContent = pd.notes;
  notes.hidden = false;
  document.getElementById("modalThumbWrap").hidden = true;
  document.getElementById("modalSpecs").hidden = true;
  renderSections(compact ? null : pd.sections);

  // Enlace al vídeo (solo en la vista reducida)
  const vbox = document.getElementById("modalVideo");
  if (vbox) {
    vbox.hidden = !(compact && pd.nodeView.video);
    const vlabel = document.getElementById("modalVideoLabel");
    if (!vbox.hidden && vlabel) vlabel.textContent = pd.nodeView.video.label || "Ver vídeo";
  }

  // Personas del bloque (si las hay)
  const list = document.getElementById("modalWorksList");
  list.textContent = "";
  section.querySelectorAll("[data-person]").forEach((el) => {
    const id = el.getAttribute("data-person");
    if (!peopleData[id]) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "modal-work-btn";
    b.textContent = peopleData[id].title;
    b.addEventListener("click", () => openPersonModal(id));
    list.appendChild(b);
  });
  document.getElementById("modalWorks").hidden = !list.children.length;

  setModalOpen();
}

function modalStep(dir) {
  if (!modalState) return;
  const list = modalState.kind === "person" ? peopleOrder : Object.keys(periodData);
  const next = list[(list.indexOf(modalState.id) + dir + list.length) % list.length];
  if (modalState.kind === "person") openPersonModal(next); else openPeriodModal(next, undefined, true);
}

function pauseModalVideos() {
  document.querySelectorAll("#modalSections video").forEach((v) => v.pause());
}

function closeModal() {
  const modal = document.getElementById("detailModal");
  if (!modal.classList.contains("open")) return;
  pauseModalVideos();
  modal.classList.remove("open");
  const root = document.querySelector(".poster-container");
  if (root) root.inert = false;
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  modalState = null;
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "detailModal") closeModal();
}

/* ---- Popup de vídeo (enlace del nodo de un bloque) ---- */
let videoReturnFocus = null;

function isVideoOpen() {
  const m = document.getElementById("videoModal");
  return !!m && m.classList.contains("open");
}

/* Segundos de inicio de un enlace de YouTube (t=460s, t=460, start=460, t=7m40s) */
function youtubeStart(src) {
  const m = src.match(/[?&#](?:t|start)=([0-9hms]+)/);
  if (!m) return 0;
  const v = m[1];
  if (/^\d+$/.test(v)) return parseInt(v, 10);
  const h = /(\d+)h/.exec(v), mi = /(\d+)m/.exec(v), s = /(\d+)s/.exec(v);
  return (h ? parseInt(h[1], 10) * 3600 : 0) + (mi ? parseInt(mi[1], 10) * 60 : 0) + (s ? parseInt(s[1], 10) : 0);
}

/* Convierte enlaces habituales de YouTube/Vimeo en URL incrustable */
function toEmbedUrl(src) {
  let m = src.match(/youtu\.be\/([\w-]{6,})/) || src.match(/youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)([\w-]{6,})/);
  if (m) {
    const start = youtubeStart(src);
    return "https://www.youtube.com/embed/" + m[1] + (start ? "?start=" + start : "");
  }
  m = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return "https://player.vimeo.com/video/" + m[1];
  return src;
}

function buildPlayer(video) {
  const stage = document.getElementById("videoStage");
  stage.textContent = "";
  const src = (video.src || "").trim();

  if (!src) {
    const ph = document.createElement("div");
    ph.className = "video-placeholder";
    ph.textContent = "El vídeo se incorporará próximamente.";
    stage.appendChild(ph);
  } else if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(src)) {
    const v = document.createElement("video");
    // Si el archivo aún no existe o no se puede reproducir, se muestra el aviso «próximamente»
    v.addEventListener("error", () => buildPlayer({ title: video.title, src: "" }), { once: true });
    v.controls = true;
    v.playsInline = true;
    v.preload = "metadata";
    v.src = src;
    stage.appendChild(v);
  } else {
    const f = document.createElement("iframe");
    f.src = toEmbedUrl(src);
    f.title = video.title || "Vídeo";
    f.allow = "autoplay; fullscreen; picture-in-picture";
    f.allowFullscreen = true;
    f.referrerPolicy = "strict-origin-when-cross-origin";
    stage.appendChild(f);
  }
}

function openVideoModal(arg) {
  if (!document.getElementById("videoModal")) return;
  let video = arg && arg.src ? arg : null;      // vídeo indicado (p. ej. enlace de YouTube)
  if (!video) {                                  // si no, el vídeo de la vista de nodo del bloque
    if (!modalState || modalState.kind !== "period") return;
    const pd = periodData[modalState.id];
    if (!pd || !pd.nodeView || !pd.nodeView.video) return;
    video = pd.nodeView.video;
  }

  document.getElementById("videoPill").textContent = "VÍDEO";
  document.getElementById("videoTitle").textContent = video.title || "Vídeo";
  buildPlayer(video);

  videoReturnFocus = document.activeElement;
  document.getElementById("videoModal").classList.add("open");
  document.getElementById("detailModal").inert = true;
  document.getElementById("videoCloseBtn").focus();
}

function closeVideoModal() {
  if (!isVideoOpen()) return;
  document.getElementById("videoModal").classList.remove("open");
  document.getElementById("videoStage").textContent = "";   // detiene la reproducción
  document.getElementById("detailModal").inert = false;
  if (videoReturnFocus && document.contains(videoReturnFocus)) videoReturnFocus.focus();
}

function closeVideoOnBackdrop(e) {
  if (e.target.id === "videoModal") closeVideoModal();
}

/* ---- Popup de obra (galería de Futurismo) ---- */
let artworkId = null;
let artworkReturnFocus = null;

function isArtworkOpen() {
  const m = document.getElementById("artworkModal");
  return !!m && m.classList.contains("open");
}

let artworkKey = "futurismo";   // galería activa en el popup de ficha

function openArtworkModal(id, key) {
  if (key) artworkKey = key;
  const g = galleries[artworkKey];
  const a = g && g.data[id];
  if (!a || !document.getElementById("artworkModal")) return;
  artworkId = id;
  const modal = document.getElementById("artworkModal");

  document.getElementById("artworkPill").textContent = a.caption;
  document.getElementById("artworkTitle").textContent = a.title;
  document.getElementById("artworkAuthor").textContent = a.author;
  const img = document.getElementById("artworkImg");
  img.src = a.img;
  img.alt = a.alt;
  document.getElementById("artworkText").textContent = a.text;
  const tl = document.getElementById("artworkTextLabel");
  if (tl) tl.textContent = g.textLabel;

  const grid = document.getElementById("artworkSpecs");
  grid.textContent = "";
  Object.entries(a.specs).forEach(([k, v]) => {
    const cell = document.createElement("div");
    const lab = document.createElement("div");
    lab.className = "modal-spec-label"; lab.textContent = k;
    const val = document.createElement("div");
    val.className = "modal-spec-val"; val.textContent = v;
    cell.appendChild(lab); cell.appendChild(val);
    grid.appendChild(cell);
  });

  const n = g.order.indexOf(id) + 1;
  document.getElementById("artworkNavLabel").textContent = g.unit + " " + n + " / " + g.order.length;

  if (!isArtworkOpen()) {
    artworkReturnFocus = document.activeElement;
    modal.classList.add("open");
    document.getElementById("detailModal").inert = true;
    document.getElementById("artworkCloseBtn").focus();
  }
  modal.querySelector(".modal-card").scrollTop = 0;
}

function artworkStep(dir) {
  if (!artworkId) return;
  const order = galleries[artworkKey].order;
  const n = order.length;
  openArtworkModal(order[(order.indexOf(artworkId) + dir + n) % n]);
}

function closeArtworkModal() {
  if (!isArtworkOpen()) return;
  document.getElementById("artworkModal").classList.remove("open");
  document.getElementById("artworkImg").removeAttribute("src");
  document.getElementById("detailModal").inert = false;
  artworkId = null;
  if (artworkReturnFocus && document.contains(artworkReturnFocus)) artworkReturnFocus.focus();
}

function closeArtworkOnBackdrop(e) {
  if (e.target.id === "artworkModal") closeArtworkModal();
}

/* ---- Lightbox ---- */
let lightboxReturnFocus = null;

function isLightboxOpen() {
  return document.getElementById("imageLightbox").classList.contains("open");
}

function openLightbox() {
  if (!modalState || modalState.kind !== "person") return;
  const d = peopleData[modalState.id];
  const img = document.getElementById("lightboxImg");
  img.src = d.imgLarge;
  img.alt = d.title + " (imagen ampliada)";
  lightboxReturnFocus = document.activeElement;
  document.getElementById("imageLightbox").classList.add("open");
  document.getElementById("detailModal").inert = true;
  document.getElementById("lightboxCloseBtn").focus();
}

function closeLightbox() {
  if (!isLightboxOpen()) return;
  document.getElementById("imageLightbox").classList.remove("open");
  document.getElementById("lightboxImg").removeAttribute("src");
  document.getElementById("detailModal").inert = false;
  if (lightboxReturnFocus && document.contains(lightboxReturnFocus)) lightboxReturnFocus.focus();
}

function closeLightboxOnBackdrop(e) {
  if (e.target.id === "imageLightbox") closeLightbox();
}

/* ---- Teclado ---- */
window.addEventListener("keydown", (e) => {
  const open = document.getElementById("detailModal").classList.contains("open");
  if (isVideoOpen()) {
    if (e.key === "Escape") closeVideoModal();
    else if (e.key === "Tab") {
      const f = [...document.querySelectorAll("#videoModal button")].filter((b) => !b.disabled && b.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (!f.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    return;
  }
  if (isArtworkOpen()) {
    if (e.key === "Escape") closeArtworkModal();
    else if (e.key === "ArrowLeft") artworkStep(-1);
    else if (e.key === "ArrowRight") artworkStep(1);
    else if (e.key === "Tab") {
      const f = [...document.querySelectorAll("#artworkModal button")].filter((b) => !b.disabled && b.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (!f.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    return;
  }
  if (isLightboxOpen()) {
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "Tab") { e.preventDefault(); document.getElementById("lightboxCloseBtn").focus(); }
    return;
  }
  if (e.key === "Escape") { closeModal(); return; }
  if (!open) return;
  const onVideo = e.target && e.target.tagName === "VIDEO";   // las flechas controlan el vídeo, no el popup
  if (e.key === "ArrowLeft" && !onVideo) modalStep(-1);
  else if (e.key === "ArrowRight" && !onVideo) modalStep(1);
  else if (e.key === "Tab") {
    const f = [...document.querySelectorAll("#detailModal button")].filter((b) => !b.disabled && b.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!f.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* Personas y bloques accesibles por teclado */
document.querySelectorAll(".person-item").forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const person = el.getAttribute("data-person");
      if (person) openPersonModal(person);
      else openPeriodModal(el.closest(".period-section").id);
    }
  });
});
