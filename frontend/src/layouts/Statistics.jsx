import React from "react";
import KeysInfos from "../components/KeysInfos";
import ObjectifScore from "../components/charts/ObjectifScore";
import Activity from "../components/charts/Activity";
import {
	useUserData,
	useUserActivity,
	useAverageSessions,
	usePerformance,
} from "../utils/API";
import Performance from "../components/charts/Performance";
import SessionsDuration from "../components/charts/SessionsDuration";

export default function Statistics() {
	/**
	 * Get data with destructuring method - return 3 values : data, isLoading, error
	 */
	const {
		data: userData,
		isLoading: userLoading,
		error: userError,
	} = useUserData();
	const {
		data: activityData,
		isLoading: activityLoading,
		error: activityError,
	} = useUserActivity();
	const {
		data: sessionsData,
		isLoading: sessionsLoading,
		error: sessionsError,
	} = useAverageSessions();
	const {
		data: performanceData,
		isLoading: performanceLoading,
		error: performanceError,
	} = usePerformance();

	/**
	 * Display the data
	 */

	return (
		<div className="flex max-lg:flex-col justify-between h-full w-full max-w-[1350px] px-7 xl:px-20 pt-20 max-lg:gap-6 xl:gap-32">
			<div className="flex flex-col flex-1 gap-6">
				<div className="w-full h-1/2 flex items-center justify-center">
					<Activity
						data={activityData}
						isLoading={activityLoading}
						error={activityError}
					/>
				</div>
				<div className=" flex-1 w-full h-1/2 flex gap-3 xl:gap-6">
					<SessionsDuration
						data={sessionsData}
						isLoading={sessionsLoading}
						error={sessionsError}
					/>
					<Performance
						data={performanceData}
						isLoading={performanceLoading}
						error={performanceError}
					/>
					<ObjectifScore
						data={userData}
						isLoading={userLoading}
						error={userError}
					/>
				</div>
			</div>
			<KeysInfos data={userData} isLoading={userLoading} error={userError} />
		</div>
	);
}
