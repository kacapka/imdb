import { url } from './config';

class Api {
	fetchApi(path) {
		return fetch(path)
			.then(data => data.json())
			.catch(err => {
				console.log(err);
				return err;
			});
	}

	fetchMovies(search) {
		return this.fetchApi(`${url}&s=${search}`);
	}
}

export default new Api();
