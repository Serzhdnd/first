function sendQuery(path) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET',path , false);
	xhr.send();
	return xhr;
}
function renderText(response, objectID) {
	let obj = JSON.parse(response.responseText);
	for (let i = 0; i < obj.length; i++) {
		var o = document.createElement('p');
		o.innerHTML = 'Покупка ' + obj[i].buy + 'Продажа: ' + obj[i].sale;
		o.classList.add('obj[i]');
		document.getElementById(objectID).appendChild(o);
	}//
}

function main(){
	let data = sendQuery("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
	renderText(data, 'kurs');
}

document.addEventListener("DOMContentLoaded", main);

