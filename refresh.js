const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "pages");

const files = fs.readdirSync(dir).filter(file => file.endsWith(".html"));

fs.writeFileSync("pages.json", JSON.stringify(files, null, 2));

console.log("Pages Refreshed")