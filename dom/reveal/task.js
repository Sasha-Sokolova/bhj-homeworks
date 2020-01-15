let elements = document.querySelectorAll(".reveal");

for (let i = 0; i < elements.length; i++) {
	let element = elements.item(i);
	function handler() {
	    let viewportHeight = window.innerHeight;
		let elementTop = wind.getBoundingClientRect().top;
	    if (element.classList.contains("reveal") === true && elementTop < viewportHeight) {
            element.classList.add("reveal_active");
	    } else {
			element.classList.remove("reveal_active");
		};
	}

   window.addEventListener("scroll", handler); 
}