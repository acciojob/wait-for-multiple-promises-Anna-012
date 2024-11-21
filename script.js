//your JS code here. If required.
onst output = document.getElementById('output');

const createPromise = (name) => {
  let delay = Math.floor(Math.random() * 3 + 1) * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([name, delay]);
    }, delay);
  });
}

let promise1 = createPromise('Promise 1');
let promise2 = createPromise('Promise 2');
let promise3 = createPromise('Promise 3');

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
    modifyTable(res);
  });

function modifyTable(data) {
  output.innerHTML = '';
  let totalTime = 0;

  data.forEach((el, index) => {
    totalTime += el[1];
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = el[0];
    const td2 = document.createElement('td');
    td2.innerText = el[1] / 1000;

    tr.append(td1, td2);
    output.append(tr);
  })

  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerText = 'Total';
  const td2 = document.createElement('td');
  td2.innerText = totalTime / 1000;

  tr.append(td1, td2);
  output.append(tr);
}