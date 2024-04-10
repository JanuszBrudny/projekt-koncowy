const nav = document.querySelector(".nav-menu");
const burgerBtn = document.querySelector(".burger-icon");
const navLinks = document.querySelectorAll(".nav-link");
const footeryear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.add("active");
};

navLinks.forEach((item) => {
	item.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footeryear.innerText = year;
};
handleCurrentYear();
burgerBtn.addEventListener("click", handleNav);
