import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<main className="w-[100vw]">
			<Header />
			<Sidebar />
			<Homepage />
		</main>
	);
}

export default App;
