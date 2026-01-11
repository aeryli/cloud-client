let downloading = browser.downloads.download({
  url: downloadUrl,
  filename: "index.html",
  conflictAction: "uniquify",
});
