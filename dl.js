async function downloadFile(url, fileName) {
  const response = await fetch(url);
  const blob = await response.blob(); // Convert response to binary data
  const link = document.createElement('a');
  
  link.href = URL.createObjectURL(blob); // Create temporary local URL
  link.download = fileName; // Suggested filename
  document.body.appendChild(link);
  link.click(); // Programmatically click to trigger download
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
