import React from "react";
import KeysInfos from "../components/charts/KeysInfos";
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

	return (
		<div className="w-full h-full flex-1 grid grid-cols-4 items-start justify-center px-28 pb-16 gap-6">
			<div className="col-span-3 flex flex-col h-full gap-6">
				<div className="flex-1 w-full flex items-center justify-center">
					<Activity
						data={activityData}
						isLoading={activityLoading}
						error={activityError}
					/>
				</div>
				<div className="w-full flex-1 grid grid-cols-3 gap-6">
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
