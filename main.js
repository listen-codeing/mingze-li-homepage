(function () {
  const data = window.SITE_DATA || {};
  const year = document.querySelector("#year");

  function text(value) {
    return value == null ? "" : String(value);
  }

  function safeUrl(url) {
    return typeof url === "string" && url.trim() ? url.trim() : "";
  }

  function setFields() {
    document.querySelectorAll("[data-field]").forEach((node) => {
      const field = node.getAttribute("data-field");
      if (field && Object.prototype.hasOwnProperty.call(data, field)) {
        node.textContent = text(data[field]);
      }
    });

    document.querySelectorAll("[data-link='email']").forEach((node) => {
      node.href = `mailto:${data.email || "mzli@shmtu.edu.cn"}`;
    });

    document.title = `${data.name || "Mingze Li"} | Academic Homepage`;
    if (year) year.textContent = new Date().getFullYear();
  }

  function appendProfileLinks() {
    const holder = document.querySelector("#profile-links");
    if (!holder) return;

    const dt = document.createElement("dt");
    dt.textContent = "Links";
    const dd = document.createElement("dd");

    [
      { label: "CV", url: data.cvUrl },
      { label: "Google Scholar", url: data.scholarUrl },
      { label: "Personal Site", url: data.personalUrl },
    ]
      .filter((item) => safeUrl(item.url))
      .forEach((item) => {
        const link = document.createElement("a");
        link.href = safeUrl(item.url);
        link.textContent = item.label;
        link.target = "_blank";
        link.rel = "noreferrer";
        dd.appendChild(link);
      });

    if (dd.childNodes.length === 0) {
      dd.textContent = "Available upon request";
    }

    holder.append(dt, dd);
  }

  function appendPlainItems(selector, items) {
    const holder = document.querySelector(selector);
    if (!holder) return;

    (items || []).forEach((entry) => {
      const item = document.createElement("div");
      item.className = "plain-item";
      item.innerHTML = `
        <div class="plain-date"></div>
        <p class="plain-title"><span class="plain-main"></span><span class="plain-note"></span></p>
      `;
      item.querySelector(".plain-date").textContent = text(entry.date);
      item.querySelector(".plain-main").textContent = text(entry.title);
      const note = item.querySelector(".plain-note");
      note.textContent = entry.note ? `, ${entry.note}` : "";
      holder.appendChild(item);
    });
  }

  function appendResearch() {
    const holder = document.querySelector("#research-list");
    if (!holder) return;

    (data.research || []).forEach((entry) => {
      const item = document.createElement("li");
      const title = document.createElement("strong");
      title.textContent = text(entry.title);
      item.append(title, `: ${text(entry.description)}`);
      holder.appendChild(item);
    });
  }

  function appendPublications(selector, entries) {
    const holder = document.querySelector(selector);
    if (!holder) return;

    (entries || []).forEach((entry) => {
      const item = document.createElement("li");
      const title = document.createElement("span");
      title.className = "publication-title";
      title.textContent = text(entry.title);

      const meta = document.createElement("span");
      meta.className = "publication-meta";
      meta.textContent = ` ${text(entry.authors)}. ${text(entry.venue)}${entry.status ? `, ${entry.status}` : ""}.`;

      item.append(title, ".", meta);

      const links = (entry.links || []).filter((link) => safeUrl(link.url));
      if (links.length > 0) {
        const linkWrap = document.createElement("span");
        linkWrap.className = "publication-links";
        linkWrap.append(" ");
        links.forEach((link) => {
          const anchor = document.createElement("a");
          anchor.href = safeUrl(link.url);
          anchor.textContent = `[${link.label || "Link"}]`;
          anchor.target = "_blank";
          anchor.rel = "noreferrer";
          linkWrap.appendChild(anchor);
        });
        item.appendChild(linkWrap);
      }

      holder.appendChild(item);
    });
  }

  function appendSimpleList(selector, items, formatter = (entry) => entry) {
    const holder = document.querySelector(selector);
    if (!holder) return;

    (items || []).forEach((entry) => {
      const item = document.createElement("li");
      item.textContent = formatter(entry);
      holder.appendChild(item);
    });
  }

  function appendDetailedList(selector, items) {
    const holder = document.querySelector(selector);
    if (!holder) return;

    (items || []).forEach((entry) => {
      const item = document.createElement("article");
      item.className = "detail-item";

      const title = document.createElement("h3");
      title.textContent = text(entry.title);
      item.appendChild(title);

      if (entry.meta) {
        const meta = document.createElement("p");
        meta.className = "detail-meta";
        meta.textContent = text(entry.meta);
        item.appendChild(meta);
      }

      if (entry.description) {
        const description = document.createElement("p");
        description.textContent = text(entry.description);
        item.appendChild(description);
      }

      if (entry.details && entry.details.length > 0) {
        const list = document.createElement("ul");
        list.className = "detail-list";
        entry.details.forEach((detail) => {
          const detailItem = document.createElement("li");
          detailItem.textContent = text(detail);
          list.appendChild(detailItem);
        });
        item.appendChild(list);
      }

      holder.appendChild(item);
    });
  }

  setFields();
  appendProfileLinks();
  appendPlainItems("#education-list", data.education);
  appendPlainItems("#experience-list", data.experience);
  appendResearch();
  appendPublications("#publication-list", data.publications);
  appendPublications("#working-paper-list", data.workingPapers);
  appendSimpleList("#policy-list", data.policyRecommendations);
  appendDetailedList("#research-project-list", data.researchProjects);
  appendDetailedList("#professional-project-list", data.professionalProjects);
  appendSimpleList("#practice-list", data.socialPractice);
  appendDetailedList("#award-list", data.awards);
  appendDetailedList("#activity-list", data.academicActivities);
  appendDetailedList("#skill-list", data.skills);
})();
