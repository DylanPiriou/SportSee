import React from "react";
import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import CustomTooltip from "../CustomTooltip";
import CustomizedCursor from "../CustomizedCursor";

/**
 * Sessions duration chart component
 */
export default function SessionsDuration({ data, isLoading, error }) {
	return (
		<div className="relative w-1/3">
			<h3 className="absolute top-6 left-6 text-white font-medium w-36">
				{" "}
				Durée moyenne des sessions{" "}
			</h3>
			<ResponsiveContainer
				width="100%"
				height="100%"
				className="bg-[#FF0000] rounded-md objectif-responsive"
			>
				<LineChart
					data={data}
					margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
				>
					<XAxis
						dataKey="day"
						stroke="#FFF"
						opacity={0.5}
						tickLine={false}
						axisLine={false}
					/>
					<YAxis
						padding={{ top: 50 }}
						stroke="#FFF"
						opacity={0.5}
						tickLine={false}
						axisLine={false}
						hide
					/>
					<Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
					<Legend />
					<Line
						type="basis"
						dataKey="sessionLength"
						stroke="#FFF"
						dot={false}
						strokeWidth={2}
						legendType="none"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
