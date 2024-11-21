//your JS code here. If required.
window.onload = function () {
  const outputElement = document.getElementById("output");
 
  const loadingRow = document.createElement("tr");
  loadingRow.setAttribute("id", "loading"); 
  const loadingCell = document.createElement("td");
  loadingCell.setAttribute("colspan", "2");
  loadingCell.textContent = "Loading...";
  loadingRow.appendChild(loadingCell);
  outputElement.appendChild(loadingRow);
 
  const startTime = Date.now();
 
  function createPromise(i) {
    const delay = Math.floor(Math.random() * 2000) + 1000; 
    const promiseStartTime = Date.now();
 
    return new Promise((resolve) => {
      setTimeout(() => {
        const timeTaken = (Date.now() - promiseStartTime) / 1000; // In seconds
        resolve({ name: "Promise " + i, timeTaken: timeTaken.toFixed(3) });
      }, delay);
    });
  }
 
  const promises = [];