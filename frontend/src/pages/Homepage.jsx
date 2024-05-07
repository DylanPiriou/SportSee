import React from "react";
import Heading from "../layouts/Heading";
import Statistics from "../layouts/Statistics";
import { useUserData } from "../utils/API";

export default function Homepage() {
	const {
		data,
		isLoading,
		error,
	} = useUserData();

	return (
		<div className="pl-28 pt-28 w-full h-[100vh] flex flex-col items-left justify-center bg-white">
			{data === undefined ? (
				<p className="text-center">Impossible de récupérer les données</p>
			) : (
				<>
					<Heading data={data} isLoading={isLoading} error={error} />
					<Statistics />
				</>
			)}
		</div>
	);
}
