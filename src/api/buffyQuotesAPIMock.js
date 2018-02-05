import { DELAY } from '../configs';
import { images, seasons, quotes, chars } from '../quotes/bq';

function getBuffyQuotes(badCall = false) {

	return new Promise((resolve, reject) => {

		setTimeout(() => {

			if (badCall) {

				return reject('bummer!!!');

			}

			resolve({
				images,
				seasons,
				quotes,
				chars
			});

		}, DELAY)

	});

}

export default getBuffyQuotes;
