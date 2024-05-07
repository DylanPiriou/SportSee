import React from "react";

export default function Heading({ data, isLoading, error }) {
	let motivationMessage;
	const score = data?.data?.todayScore * 100;

	switch (true) {
		case score < 50:
			motivationMessage = "Continuez à travailler, vous pouvez faire mieux !";
			break;
		case score < 75:
			motivationMessage = "Bon travail, continuez comme ça !";
			break;
		case score < 100:
			motivationMessage = "Excellent travail, vous êtes presque à 100% !";
			break;
		case score === 100:
			motivationMessage =
				"Félicitation ! Vous avez explosé vos objectifs hier 👏!";
			break;
		default:
			motivationMessage =
				"Continuez à travailler, chaque jour est une nouvelle opportunité !";
	}

	return (
		<div className="flex flex-col items-left justify-center gap-4 px-28 py-16 font-bold">
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
