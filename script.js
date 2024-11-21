//your JS code here. If required.
const output = document.getElementById('output');

// Add "Loading..." row initially
const tr = document.createElement('tr');
tr.id = 'loading';
const td = document.createElement('td');
td.innerText = 'Loading...';
td.setAttribute('colspan', 2);
tr.append(td);
output.append(tr);

// Create promises with random delays
const p1 = new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 2000) + 1000; // 1 to 3 seconds
    setTimeout(() => {
        resolve(['Promise 1', delay]);
    }, delay);
});

const p2 = new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 2000) + 1000; // 1 to 3 seconds
    setTimeout(() => {
        resolve(['Promise 2', delay]);
    }, delay);
});

const p3 = new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 2000) + 1000; // 1 to 3 seconds
    setTimeout(() => {
        resolve(['Promise 3', delay]);
    }, delay);
});

// Handle promises
let promiseArr = [p1, p2, p3];
Promise.all(promiseArr).then((res) => {
    console.log(res);
    modifyTable(res);
});

// Update table function
function modifyTable(data) {
    output.innerHTML = ''; // Clear "Loading..." row
    let totalTime = 0;

    data.forEach((el) => {
        totalTime += el[1];
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = el[0];
        const td2 = document.createElement('td');
        td2.innerText = (el[1] / 1000).toFixed(2); // Time in seconds

        tr.append(td1, td2);
        output.append(tr);
    });

    // Add "Total" row
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = 'Total';
    const td2 = document.createElement('td');
    td2.innerText = (totalTime / 1000).toFixed(2);

    tr.append(td1, td2);
    output.append(tr);
}
