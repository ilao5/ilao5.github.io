// 数据储存算法
const stockpile = (data, storeData, tpData, val) => {
	const td = [];
	td.push(val);
	localStorage.setItem(data, td);

	const sd = [];
	if (localStorage.getItem(tpData) === null) {
		sd.push(localStorage.getItem(data));
	} else {
		sd.push(localStorage.getItem(data), localStorage.getItem(tpData));
	}
	localStorage.setItem(storeData, sd);

	const tpd = [];
	tpd.push(localStorage.getItem(storeData));
	localStorage.setItem(tpData, tpd);

	const arr = localStorage.getItem(storeData).split(',');
	let row = [];
	for (var i in arr) { row.push(arr[i]) }
	return row
}


