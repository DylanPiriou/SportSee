// api.js
import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useUserData() {
	return useSWR("http://localhost:3000/user/12", fetcher);
}

export function useUserActivity() {
	return useSWR("http://localhost:3000/user/12/activity", fetcher);
}

export function useAverageSessions() {
	return useSWR("http://localhost:3000/user/12/average-sessions", fetcher);
}

export function usePerformance() {
	return useSWR("http://localhost:3000/user/12/performance", fetcher);
}
