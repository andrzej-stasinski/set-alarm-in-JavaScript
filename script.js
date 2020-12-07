function odliczanie() {
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = 
		 dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
		 
		setTimeout("odliczanie()",1000);
	}

function stoper(czas) {
	var sec = czas;

	document.querySelector('#stoper').innerHTML = 'Remain seconds: ' + sec;
	sec--;
	if(sec < 0) {
		sec = clearTimeout(stoper);
		console.log('Alarm!!!');
		var alarm = document.getElementById('alarm');
		console.log(alarm);
		alarm.innerHTML = "ALARM !!!";

		var audio = new Audio('alarm.mp3');
		audio.play();
	}
	else
		var stoper = setTimeout("stoper("+sec+")", 1000);
	const inputReset = document.querySelector('#ile')
	inputReset.addEventListener('click', () => {
		const alarm = document.querySelector('#alarm')
		alarm.innerText = ''
	})
}

function start() {
	var but = document.querySelector("#but");
	var ile = document.querySelector("#ile");

	but.onclick = function() {
		const value = +ile.value;
		console.log(value);
		console.log(typeof value);
		console.log(isNaN(value));

		if(isNaN(value) || value === 0) {
			console.log('Value is NaN');
			document.querySelector('#error').innerHTML = 'To nie jest liczba sekund';

		} else {
			document.querySelector('#error').innerHTML = '';
			stoper(value);
		}

	}
}

window.onload = function() {
	odliczanie();
	start();
}











