const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const dotsContainer = document.querySelector(".dots"); 
const slideLength = slides.length;
let slideIndex = 0;

arrowLeft.addEventListener('click', () => {
	slideIndex = slideIndex > 0 ? slideIndex-1 : slideLength-1;
	handleBulletPoints(slideIndex);
});

arrowRight.addEventListener('click', () => {
	slideIndex = slideIndex < slideLength-1 ? slideIndex+1 : 0;
	handleBulletPoints(slideIndex);
});

for (let i = 0; i < slideLength; i++) {
	const dot = document.createElement("div");
	dot.setAttribute("class", "dot");
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dot);
}

function handleBulletPoints(slideIndex) {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot) => {
		dot.classList.remove("dot_selected");
	})
	dots[slideIndex].classList.add("dot_selected");
}

