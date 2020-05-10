import api from './api.js';
import { formatPrice } from '../helpers.js';

function normalizeData(value, housingDays = 1) {
	const { name, property_type, photo, price } = value;

	const mediumPhoto = photo.replace(/x_large|xx_large/gi, 'medium');
	const totalPrice = housingDays * price;

	return {
		name,
		property_type,
		photo: mediumPhoto,
		price: formatPrice(price),
		totalPrice: formatPrice(totalPrice),
	};
};

function appendCards(container, cards) {
	container.innerHTML = '';

	cards.forEach((card) => {
		container.appendChild(card);
	})
};

function createSingleCard(properties) {
	const { photo, property_type, name, price, totalPrice } = properties;

	const cardStructure = document.createElement('div');
	cardStructure.setAttribute('class', 'card-wrapper col-sm-12 col-md-6 col-lg-4');

	cardStructure.innerHTML = `
		<div class="card house-card">
			<img src="${photo}" class="card-img" alt="${name}">
			<div class="card-body">
				<h6>${property_type}</h6>
				<h4>${name}</h4>
				<span>${price} / night</span>
				<span>Total: ${totalPrice}</span>
			</div>
		</div>
	`;

	return cardStructure;
};

function createCards(data) {
	const container = document.getElementById('cards');
	const cards = data.map(createSingleCard);

	appendCards(container, cards);
};

async function setup(housingDays) {
	console.log(1);
	const data = await api();
	const normalizedData = data.map(value => normalizeData(value, housingDays));
	const cards = createCards(normalizedData);
};

setup();

export default setup;
