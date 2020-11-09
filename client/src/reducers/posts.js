export default (posts = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
		case 'UPDATE':
			return [...posts, action.payload];
		default:
			return posts;
	}
};
