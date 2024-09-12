/**
 * Fetch whith specific logic depending on the url
 */

import { days, labels } from "./consts";
import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from "./data";

// Set to true to use mock data
const useMockData = true;

// Get the mock data depending of the id
function getMockData(id, data) {
	const userData = data.find((user) => user.id === parseInt(id));
	if (!userData) {
		throw new Error(`No user found with id ${id}`);
	}
	return { data: userData };
}

export const fetcher = (url) => {
	// Get the user id from the url
	const id = url.split("/")[4];

	if (useMockData) {
		if (url.includes("/performance")) {
			const data = getMockData(id, USER_PERFORMANCE);
			return data.data.data.map((item) => ({
				value: item.value,
				kind: labels[item.kind.toString()],
			}));
		}
		if (url.includes("/activity")) {
			const data = getMockData(id, USER_ACTIVITY);
			return data.data.sessions.map((item, index) => ({
				day: index + 1,
				kilogram: item.kilogram,
				calories: item.calories,
			}));
		}

		if (url.includes("/average-sessions")) {
			const data = getMockData(id, USER_AVERAGE_SESSIONS);
			return data.data.sessions.map((item) => ({
				day: days[item.day],
				sessionLength: item.sessionLength,
			}));
		}

		return getMockData(id, USER_MAIN_DATA);
	} else {
		return fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (url.includes("/performance")) {
					return data.data.data.map((item) => ({
						value: item.value,
						kind: labels[item.kind.toString()],
					}));
				}

				if (url.includes("/activity")) {
					return data.data.sessions.map((item, index) => ({
						day: index + 1,
						kilogram: item.kilogram,
						calories: item.calories,
					}));
				}

				if (url.includes("/average-sessions")) {
					return data.data.sessions.map((item) => ({
						day: days[item.day],
						sessionLength: item.sessionLength,
					}));
				}

				return data;
			});
	}
};
