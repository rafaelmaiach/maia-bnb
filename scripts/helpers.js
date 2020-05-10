function formatDate(date) {
	return date.toISOString().replace(/[T].*/gi, '');
};

function formatPrice(price) {
	return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

function getDaysBetween(firstDate, secondDate) {
	const dt1 = new Date(firstDate);
	const dt2 = new Date(secondDate);

	const utcDt1 = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
	const utcDt2 = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());

	const millisecondsDay = 1000 * 60 * 60 * 24;
	const daysBetween = Math.floor(utcDt2 - utcDt1) / millisecondsDay;
	return daysBetween;
};

export {
	formatDate,
	formatPrice,
	getDaysBetween,
};
