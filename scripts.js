let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

if (localStorage.is_dark_mode == "true") {
    document.body.classList.add("dark-mode")
} else {
    document.body.classList.add("light-mode")
}

function toggle_dark_mode() {
    let is_dark_mode = localStorage.is_dark_mode == "true"
    is_dark_mode = !is_dark_mode;

    if (is_dark_mode) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }

    localStorage.is_dark_mode = is_dark_mode;
}