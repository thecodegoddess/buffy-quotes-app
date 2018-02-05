import { QUOTES_RETURN } from '../configs';
import buffyQuotesAPI from '../api/buffyQuotesAPIMock';

export function returnQuotes(data) {
	return {
		type : QUOTES_RETURN,
		data
	}
}


export function getQuotes() {

	return function (dispatch) {

		return buffyQuotesAPI()
			.then((response) => {

				dispatch(returnQuotes(response));

			})
			.catch((err) => {

				throw new Error(err);

			})

	}

}
