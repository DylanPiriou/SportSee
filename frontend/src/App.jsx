import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<main>
			<Header />
			<Sidebar />
			<Homepage />
		</main>
	);
}

export default App;
