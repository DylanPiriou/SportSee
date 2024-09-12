import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

/**
 * Simple pie chart component
 */
export default function SimplePieChart({ data, isLoading, error }) {
	const pieData = [
		{ name: "Score", value: data?.data.todayScore * 100 },
		{ name: "Rest", value: 100 - data?.data.todayScore },
	];

	return (
		<>
			{isLoading && <p>Chargement...</p>}
			{error && <p>Une erreur est survenue</p>}
			{data && (
				<div className="relative w-1/3">
					<h3 className="absolute top-6 left-6 text-black font-medium w-36">
						Score
					</h3>
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={pieData}
								cx="50%"
								cy="50%"
								dataKey="value"
								innerRadius="65%"
								outerRadius="75%"
								startAngle={110}
								endAngle={450}
							>
								<Cell key="cell-0" fill="#FF0101" cornerRadius="50%" />
								<Cell key="cell-1" fill="transparent" />
							</Pie>
						</PieChart>
						<div className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-xs">
							{pieData[0].value ? (
								<>
									<span className="text-black font-bold text-2xl">
										{pieData[0].value}%
									</span>{" "}
									de votre objectif
								</>
							) : (
								<p>Pas de données disponibles</p>
							)}
						</div>
					</ResponsiveContainer>
				</div>
			)}
		</>
	);
}
