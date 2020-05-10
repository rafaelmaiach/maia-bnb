import api from './api.js';

function normalizeData(data) {
	return data.map((value) => ({
		name: value.name,
		property_type: value.property_type,
		photo: value.photo.replace(/x_large|xx_large/gi, 'medium'),
		price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value.price),
	}));
};

function appendCards(container, cards) {
	cards.forEach((card) => {
		container.appendChild(card);
	})
};

function createSingleCard(properties) {
	const { photo, property_type, name, price } = properties;

	const cardStructure = document.createElement('div');
	cardStructure.setAttribute('class', 'card-wrapper col-sm-12 col-md-6 col-lg-4');

	cardStructure.innerHTML = `
		<div class="card house-card">
			<img src="${photo}" class="card-img" alt="${name}">
			<div class="card-body">
				<h6>${property_type}</h6>
				<h4>${name}</h4>
				<span>${price} / night</span>
				<span>Total: ${price}</span>
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

async function setup() {
	const data = await api();
	const normalizedData = normalizeData(data);
	const cards = createCards(normalizedData);
};

setup();
