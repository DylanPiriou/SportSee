import React from "react";

export default function Heading({ data, isLoading, error }) {

	/**
	 * Switch statement to display a motivational message based on the user's score
	 */
	let motivationMessage;
	const score = data?.data?.todayScore * 100;

	switch (true) {
		case score < 50:
			motivationMessage =
				"Continuez à travailler, vous pouvez faire mieux ! 💪";
			break;
		case score < 75:
			motivationMessage = "Bon travail, continuez comme ça ! 🙌";
			break;
		case score < 100:
			motivationMessage = "Excellent travail, vous êtes presque à 100% ! 💯";
			break;
		case score === 100:
			motivationMessage =
				"Félicitation ! Vous avez explosé vos objectifs hier 👏!";
			break;
		default:
			motivationMessage =
				"Continuez à travailler, chaque jour est une nouvelle opportunité ! 🔥";
	}

	/**
	 * Display the user's first name and a motivational message
	 */

	return (
		<div className="w-full flex flex-col items-left justify-center gap-4 font-bold pt-14 pl-7 xl:pl-20">
			{isLoading && <p>Chargement...</p>}
			{error && <p>Une erreur est survenue: {error}</p>}
			{data && (
				<>
					<h1 className="text-4xl">
						Bonjour{" "}
						<span className="text-red-500">
							{data.data.userInfos.firstName}
						</span>
					</h1>
					<p>{motivationMessage}</p>
				</>
			)}
		</div>
	);
}
