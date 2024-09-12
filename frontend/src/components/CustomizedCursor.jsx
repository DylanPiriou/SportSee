import React from "react";
import { Rectangle } from "recharts";

export default function CustomizedCursor({ points}) {
	return (
		<Rectangle
			fill="#000"
			opacity={0.1}
			x={points[1].x}
			width={500}
			height={300}
		/>
	);
}
