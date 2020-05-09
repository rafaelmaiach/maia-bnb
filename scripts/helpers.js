function formatDate(date) {
	return date.toISOString().replace(/[T].*/gi, '');
}

export {
	formatDate,
};
