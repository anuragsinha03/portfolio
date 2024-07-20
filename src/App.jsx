import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ThankYou from "./Components/ThankYou";
import "./index.css";

function App() {
	return (
		<Router>
			<div className='bg-[#002244]'>
				<Navbar />
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					<Route
						path='/thank-you'
						element={<ThankYou />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

