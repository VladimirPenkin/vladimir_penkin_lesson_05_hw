
window.onload = function () {

	let mainDiv = document.getElementById("container");

	if (container) {

		container.addEventListener("click", fixButton);

		function fixButton (e) {

			let target = e && e.target || window.event.srcElement;
			if (target.tagName != 'BUTTON') return;

			let close = event.target.closest("div");
			close.remove();
			e.preventDefault();
            return false;

		};

	};
};
