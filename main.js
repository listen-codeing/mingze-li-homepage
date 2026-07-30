(function () {
  const data = window.SITE_DATA || {};
  const byField = document.querySelectorAll("[data-field]");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.querySelector("#year");

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value || "";
    });
  }

  function safeLink(url) {
    return typeof url === "string" && url.trim().length > 0 ? url.trim() : "";
  }

  function makeLink(label, url, className) {
    const link = document.createElement("a");
    const href = safeLink(url);
    link.className = className || "text-link";
    link.textContent = label;
    if (href) {
      link.href = href;
      link.target = href.startsWith("mailto:") || href.startsWith("#") ? "" : "_blank";
      link.rel = href.startsWith("http") ? "noreferrer" : "";
    } else {
      link.href = "#";
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
    return link;
  }

  byField.forEach((node) => {
    const field = node.getAttribute("data-field");
    if (field && Object.prototype.hasOwnProperty.call(data, field)) {
      node.textContent = data[field];
    }
  });

  document.title = `${data.name || "Mingze Li"} | Academic Homepage`;
  year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-link='email']").forEach((node) => {
    node.href = `mailto:${data.email || "mzli@shmtu.edu.cn"}`;
  });
  document.querySelector("[data-link='cv']").replaceWith(
    makeLink("Download CV", data.cvUrl, "button secondary")
  );
  document.querySelector("[data-link='scholar']").replaceWith(
    makeLink("Google Scholar", data.scholarUrl, "button ghost")
  );

  const quickFacts = document.querySelector("#quick-facts");
  (data.quickFacts || []).forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = fact;
    quickFacts.appendChild(item);
  });

  const infoGrid = document.querySelector("#info-grid");
  (data.info || []).forEach((entry) => {
    const item = document.createElement("article");
    item.className = "info-item";
    item.innerHTML = `<p class="info-label"></p><p class="info-value"></p>`;
    setTextIn(item, ".info-label", entry.label);
    setTextIn(item, ".info-value", entry.value);
    infoGrid.appendChild(item);
  });

  const researchGrid = document.querySelector("#research-grid");
  (data.research || []).forEach((entry) => {
    const card = document.createElement("article");
    card.className = "research-card";
    card.innerHTML = `
      <span class="card-tag"></span>
      <h3></h3>
      <p></p>
    `;
    setTextIn(card, ".card-tag", entry.tag);
    setTextIn(card, "h3", entry.title);
    setTextIn(card, "p", entry.description);
    researchGrid.appendChild(card);
  });

  const publicationList = document.querySelector("#publication-list");
  (data.publications || []).forEach((entry) => {
    const item = document.createElement("article");
    item.className = "publication-item";
    item.innerHTML = `
      <div class="publication-year"></div>
      <div>
        <p class="publication-title"></p>
        <p class="publication-meta"></p>
        <div class="link-row"></div>
      </div>
    `;
    setTextIn(item, ".publication-year", entry.year);
    setTextIn(item, ".publication-title", entry.title);
    setTextIn(
      item,
      ".publication-meta",
      `${entry.authors || ""}. ${entry.venue || ""}${entry.status ? `, ${entry.status}` : ""}.`
    );
    const row = item.querySelector(".link-row");
    (entry.links || []).forEach((link) => row.appendChild(makeLink(link.label, link.url)));
    publicationList.appendChild(item);
  });

  const projectGrid = document.querySelector("#project-grid");
  (data.projects || []).forEach((entry) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <span class="card-tag"></span>
      <h3></h3>
      <p></p>
      <div class="link-row"></div>
    `;
    setTextIn(card, ".card-tag", entry.tag);
    setTextIn(card, "h3", entry.title);
    setTextIn(card, "p", entry.description);
    card.querySelector(".link-row").appendChild(makeLink("Open", entry.url));
    projectGrid.appendChild(card);
  });

  const talkList = document.querySelector("#talk-list");
  (data.talks || []).forEach((entry) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-date"></div>
      <div>
        <p class="timeline-title"></p>
        <p class="timeline-meta"></p>
      </div>
    `;
    setTextIn(item, ".timeline-date", entry.date);
    setTextIn(item, ".timeline-title", entry.title);
    setTextIn(item, ".timeline-meta", entry.venue);
    talkList.appendChild(item);
  });

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  function setTextIn(parent, selector, value) {
    const target = parent.querySelector(selector);
    if (target) target.textContent = value || "";
  }
})();
