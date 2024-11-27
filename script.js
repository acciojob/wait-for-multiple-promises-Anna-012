//your JS code here. If required.
const output = document.getElementById('output');
const tr = document.createElement('tr');
tr.id = 'loading'
const td = document.createElement('td');
td.innerText = 'Loading...'
td.setAttribute('colspan', 2);
tr.append(td);
output.append(tr);

function createPromise() {
	return new Promise((resolve) => {
		let delay = Math.floor(Math.random()*2000) + 1000;
		setTimeout(() => {
			resolve({name:'Promise 1', timeTaken:delay});
		}, delay);
	})
}


let allPromises = [];
for(let i=0; i<3; i++) {
	allPromises.push(createPromise());
}


Promise.all(allPromises)
.then((res) => {
	modifyTable(res);
})


function modifyTable(data) {
	output.innerHTML = null;
	let totalTime = 0;

	data.forEach((el, index) => {
		totalTime += el.timeTaken;
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		td1.innerText = el.name;
		const td2 = document.createElement('td');
		td2.innerText = el.timeTaken / 1000;

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
