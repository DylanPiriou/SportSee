import React from "react";
import Heading from "../layouts/Heading";
import Statistics from "../layouts/Statistics";
import { useUserData } from "../utils/API";

export default function Homepage() {

	/**
	 * Get user data with destructuring method - return 3 values : data, isLoading, error
	 */
	const { data, isLoading, error } = useUserData();

	return (
		<div className="w-full h-[100dvh] pt-24 pb-14 pl-24 flex flex-col items-left justify-center bg-white">
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
