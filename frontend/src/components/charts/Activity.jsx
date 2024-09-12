import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import CustomTooltip from "../CustomTooltip";

/**
 * Activity chart component
 */
export default function Activity({ data, isLoading, error }) {
	return (
		<>
			{isLoading && <p>Chargement...</p>}
			{error && <p>Une erreur est survenue</p>}
			{data && (
				<div className="w-full h-full relative">
					<h3 className="absolute top-[-18px] left-4 text-black font-medium w-36 whitespace-nowrap">
						Performance quotidienne
					</h3>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={data}>
							<CartesianGrid strokeDasharray="3 3" vertical={false} />
							<XAxis dataKey="day" tickLine={false} axisLine={false} />
							<XAxis
								dataKey="calories"
								type="number"
								tickLine={false}
								axisLine={false}
							/>
							<YAxis
								dataKey="kilogram"
								type="number"
								tickLine={false}
								orientation="right"
								axisLine={false}
								domain={["dataMin - 1", "dataMax + 1"]}
							/>
							<YAxis dataKey="calories" type="number" yAxisId="calorie" hide />
							<Tooltip content={<CustomTooltip />} />
							<Legend
								verticalAlign="top"
								align="right"
								iconType="circle"
								wrapperStyle={{ marginTop: "-23px" }}
								formatter={(value, entry, index) => (
									<span className="text-color">{value}</span>
								)}
							/>
							<Bar
								name="Poids (kg)"
								dataKey="kilogram"
								radius={[10, 10, 0, 0]}
								barSize={7}
								fill="#282D30"
							/>
							<Bar
								name="Calories brûlées (kCal)"
								dataKey="calories"
								radius={[10, 10, 0, 0]}
								barSize={7}
								yAxisId="calorie"
								fill="#E60000"
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			)}
		</>
	);
}
