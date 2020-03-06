
window.onload = function () {

	let myClick = document.getElementById("myclick");
	let mysticalDiv = document.getElementById("mysticaldiv");
	let stopClick = document.getElementById("stopclick");

	myClick.addEventListener("click", action);
	stopClick.addEventListener("click", stopAction);
	
	function action () {
		if (mysticalDiv.style.display == "none") {
			mysticalDiv.style.display = "block";
		} else {
			mysticalDiv.style.display = "none";
		}
	};

	function stopAction () {
		myClick.removeEventListener("click", action); 
	};
}

