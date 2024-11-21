//your JS code here. If required.
const output = document.getElementById('output');
const tr = document.createElement('tr');
tr.id = 'loading'
const td = document.createElement('td');
td.innerText = 'Loading...'
td.setAttribute('colspan', 2);
tr.append(td);
output.append(tr);
 
const getRandomTime = () => Math.floor(Math.random() * 3 + 1) * 1000;

const p1 = new Promise((resolve) => {
  let delay = getRandomTime();
  setTimeout(() => {
    resolve(['Promise 1', delay]);
  }, delay);
})

const p2 = new Promise((resolve) => {
  let delay = getRandomTime();
  setTimeout(() => {
    resolve(['Promise 2', delay]);
  }, delay);
})

const p3 = new Promise((resolve) => {
  let delay = getRandomTime();
  setTimeout(() => {
    resolve(['Promise 3', delay]);
  }, delay);
})
let promiseArr = [p1, p2, p3];
Promise.all(promiseArr)
.then((res) => {
	console.log(res);
	modifyTable(res);
})
 
 
function modifyTable(data) {
	output.innerHTML = null;
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
	// td2.innerText = (totalTime / 1000).toFixed(2) + '6';
	td2.innerText = totalTime/1000;
 
	tr.append(td1, td2);
	output.append(tr);
}