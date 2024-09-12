import React from "react";

/**
 * Custom tooltip component
 */
export default function CustomTooltip({ active, payload }) {
	return (
		<>
			{active && payload ? (
				payload.length > 1 ? (
					<div className="px-6 py-4 bg-[#E60000] text-white">
						<p>{payload[0]?.value}kg</p>
						<p>{payload[1]?.value}kCal</p>
					</div>
				) : (
					<p className="px-6 py-4 bg-white">{payload[0]?.value}min</p>
				)
			) : (
				<p>No data</p>
			)}
		</>
	);
}
