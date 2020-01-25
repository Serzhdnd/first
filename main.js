var xhr = new XMLHttpRequest();
	xhr.open('GET', "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", false);
	xhr.send ();
	let obj=JSON.parse(xhr.responseText);
	for (let i=0; i<obj.length; i++) {
	var o=document.createElement('kurs');
	o.innerHTML='Покупка ' + obj[i].buy + 'Продажа: ' + obj[i]. sale;
	o.classList.add('obj[i]');
	document.querySelector('.obj[i]').appendChild(o);
}