import { url } from './config';

class Api {
	fetchApi(path) {
		return fetch(path).then(data => data.json());
	}

	fetchMovies(search) {
		return this.fetchApi(`${url}&s=${search}`);
	}
}

export default new Api();
