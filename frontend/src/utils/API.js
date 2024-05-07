import useSWR from "swr";
import { fetcher } from "./fetcher";

const url = "http://localhost:3000/user/12";

export function useUserData() {
	return useSWR(url, fetcher);
}

export function useUserActivity() {
	return useSWR(`${url}/activity`, fetcher);
}

export function useAverageSessions() {
	return useSWR(`${url}/average-sessions`, fetcher);
}

export function usePerformance() {
	return useSWR(`${url}/performance`, fetcher);
}
