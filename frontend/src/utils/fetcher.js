import { days, labels } from "./consts";

export const fetcher = (url) =>
	fetch(url)
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
