//your JS code here. If required.
const output = document.getElementById('output');

// Add "Loading..." row initially
function showLoadingRow() {
  // Clear existing rows
  output.innerHTML = '';

  const tr = document.createElement('tr');
  tr.id = 'loading'; // Set ID for reference
  const td = document.createElement('td');
  td.innerText = 'Loading...';
  td.setAttribute('colspan', 2); // Span two columns
  tr.append(td);
  output.append(tr);
}

// Create promises with random delays
function createRandomPromise(name) {
  const delay = Math.floor(Math.random() * 2000) + 1000; // 1 to 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([name, delay]);
    }, delay);
  });
}

// Function to update the table after promises resolve
function modifyTable(data) {
  // Clear the table content (removes "Loading..." row)
  output.innerHTML = '';

  let totalTime = 0;

  // Add rows for each promise result
  data.forEach((el) => {
    totalTime += el[1]; // Accumulate time
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = el[0]; // Promise name
    const td2 = document.createElement('td');
    td2.innerText = (el[1] / 1000).toFixed(2); // Time in seconds (formatted)

    tr.append(td1, td2);
    output.append(tr);
  });

  // Add "Total" row
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerText = 'Total';
  const td2 = document.createElement('td');
  td2.innerText = (totalTime / 1000).toFixed(2); // Total time in seconds

  tr.append(td1, td2);
  output.append(tr);
}

// Main function to execute promises
function runPromises() {
  showLoadingRow(); // Show "Loading..." initially

  const p1 = createRandomPromise('Promise 1');
  const p2 = createRandomPromise('Promise 2');
  const p3 = createRandomPromise('Promise 3');

  const promiseArr = [p1, p2, p3];

  Promise.all(promiseArr).then((res) => {
    modifyTable(res); // Update table with resolved data
  });
}

// Run the function
runPromises();
