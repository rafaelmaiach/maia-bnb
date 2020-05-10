import { formatDate, getDaysBetween } from '../helpers.js';
import createdCards from '../cards/createCards.js'

function getElements() {
	const checkin = document.getElementById('startDate');
	const checkout = document.getElementById('endDate');

	return [checkin, checkout];
};

function getElementsValues(elements = null) {
	if (!elements) {
		const [checkin, checkout] = getElements();
		return [checkin.value, checkout.value];
	}

	const [checkin, checkout] = elements;
	return [checkin.value, checkout.value];
};

function updateElementValue(element, newValue) {
	element.value = newValue;
};

function onDateChange(event) {
	event.preventDefault();
	const elements = getElements();
	const [checkin, checkout] = elements;
	const [checkinVal, checkoutVal] = getElementsValues(elements);

	checkin.setAttribute('max', checkoutVal);
	checkout.setAttribute('min', checkinVal);

	if (checkinVal && checkoutVal) {
		const daysBetween = getDaysBetween(checkinVal, checkoutVal);
		createdCards(daysBetween);
	}
};

function listenForChanges() {
	const [checkin, checkout] = getElements();
	checkin.addEventListener('change', onDateChange);
	checkout.addEventListener('change', onDateChange);
};

function setup() {
	listenForChanges();
};

setup();
