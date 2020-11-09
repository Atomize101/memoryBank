import * as api from '../api';

// Action Creators

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: 'CREATE', payload: data });
		console.log(post);
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log(error);
	}
};

// 4th step is to create an action creator here.

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: 'DELETE', payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log(error);
	}
};
