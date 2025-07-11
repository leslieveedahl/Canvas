document.addEventListener("DOMContentLoaded", () => {
  fetch("pages.json")
    .then(res => res.json())
    .then(pages => {
      const container = document.getElementById("pages");

      pages.forEach(page => {
        const div = document.createElement("div");
        div.className = "page";

        div.innerHTML = `
          <br>
          <h3>${page.name}</h3>
          <h4>By: ${page.author}</h4>
          <a href="pages/${page.file}" target="_blank" rel="noopener">
            <button>Open Page</button>
          </a>
        `;

        container.appendChild(div);
      });
    });
});
