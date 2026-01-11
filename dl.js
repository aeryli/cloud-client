let dUrl = "https://github.com/aeryli/cloud-client/raw/refs/heads/main/index.html"
let downloading = browser.downloads.download({
  url: dUrl,
  filename: "index.html",
  conflictAction: "uniquify",
});
