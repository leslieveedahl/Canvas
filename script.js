fetch("pages.json")
  .then(res => res.json())
  .then(pages => {
    const container = document.getElementById("pages-container");

    pages.forEach(filename => {
      const title = filename
        .replace(/[-_]/g, ' ')
        .replace(/\.html$/, '')
        .replace(/\b\w/g, c => c.toUpperCase());

      const div = document.createElement("div");
      div.className = "page";

      div.innerHTML = `
        <br>
        <h3>${title}</h3>
        <button onclick="window.open('pages/${filename}', '_blank')">Open Page</button>
      `;

      container.appendChild(div);
    });
  });
