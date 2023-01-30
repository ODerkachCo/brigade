const logo = document.querySelector('.brigade__logo'),
	descriptBlock = document.querySelector('.brigade__description'),
	slider = document.querySelector('.slider'),
	sliderLine = document.querySelector('.slider_line'),
	data = {
		imgs: [
			'./imgs/slider/1.jpg',
			'./imgs/slider/2.jpg',
			'./imgs/slider/3.jpg',
			'./imgs/slider/4.jpg',
			'./imgs/slider/5.jpg',
			'./imgs/slider/6.jpg',
			'./imgs/slider/7.jpg',
			'./imgs/slider/8.jpg'
		],
		text: [
			'Photo 1',
			'Photo 2',
			'Photo 3',
			'Photo 4',
			'Photo 5',
			'Photo 6',
			'Photo 7',
			'Photo 8',
		]
		
	},
	btnNext = document.querySelector('.btn_next'),
	btnPrev = document.querySelector('.btn_prev'),
	sliderText = document.querySelector('.slider__text'),
	infoBlk = document.querySelector('.brigade__info');

let offset = 0,
	currentSlide = 0;

sliderLine.style.width = `${slider.clientWidth * data.imgs.length}px`;
sliderLine.style.height = `${slider.clientHeight}px`;

addData();

logo.addEventListener('click', () => {
	document.location.href = 'https://dpsu.gov.ua'
})

function addData() {
	data.imgs.forEach((slide) => {
		sliderLine.insertAdjacentHTML('beforeend', `<img src=${slide} alt='' width="${slider.clientWidth}" height="${slider.clientHeight}" />`);
	})
}

data.text.forEach((text) => {
	sliderText.insertAdjacentHTML('beforeend', `<span>${text}</span>`);
})

Array.from(sliderText.children).forEach((span, index) => {
	if (index != 0) {
		span.style.display = 'none';
	}
})


btnNext.addEventListener('click', () => {
	offset += slider.clientWidth;
	if (offset > slider.clientWidth * (data.imgs.length - 1)) {
		offset = 0;
	} 
	sliderLine.style.left = `${-offset}px`;

	sliderText.children[currentSlide].style.display = 'none';
	currentSlide += 1;
	if (currentSlide > data.text.length - 1) {
		currentSlide = 0;
	}
	
	sliderText.children[currentSlide].style.display = 'block';

})

btnPrev.addEventListener('click', () => {
	offset -= slider.clientWidth;
	if (offset < 0) {
		offset = slider.clientWidth * (data.imgs.length - 1);
	} 
	sliderLine.style.left = `${-offset}px`;

	sliderText.children[currentSlide].style.display = 'none';
	currentSlide -= 1;
	if (currentSlide < 0) {
		currentSlide = data.text.length - 1;
	}
	
	sliderText.children[currentSlide].style.display = 'block';
})
