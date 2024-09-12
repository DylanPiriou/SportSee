import React from "react";
import KeyInfo from "./KeyInfo";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

/**
 * Parent component for the key infos
 */

export default function KeysInfos({ data, isLoading, error }) {
	return (
		<ul className="h-full w-fit flex lg:flex-col max-lg:flex-wrap items-start justify-start gap-6 lg:gap-14">
			{isLoading && <p>Chargement...</p>}
			{error && <p>Une erreur est survenue</p>}
			{data &&
				Object.entries(data.data.keyData).map(([key, value], index) => (
					<KeyInfo key={index} data={{ key, value }} />
				))}
		</ul>
	);
}
