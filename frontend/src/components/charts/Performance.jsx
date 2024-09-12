import React from "react";
import {
	Legend,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts";

/**
 * Performance chart component
 */
export default function Performance({ data, isLoading, error }) {

	return (
		<>
			{isLoading && <p>Chargement...</p>}
			{error && <p>Une erreur est survenue</p>}
			{data && (
				<div className="w-1/3">
					<ResponsiveContainer
						width="100%"
						height="100%"
						className="bg-[#282D30] text-2xs xl:text-xs rounded-md"
					>
						<RadarChart outerRadius={70} data={data}>
							<PolarGrid />
							<PolarAngleAxis
								angleAxisId="angleAxis1"
								dataKey="kind"
								stroke="#FFFFFF"
								tickLine={false}
							/>
							<Radar
								angleAxisId="angleAxis1"
								dataKey="value"
								stroke="#E60000"
								fill="#FF0101"
								fillOpacity={0.7}
								legendType="none"
							/>
						</RadarChart>
					</ResponsiveContainer>
				</div>
			)}
		</>
	);
}
