import React from "react";
import "./App.css";

// React Toastify
import { ToastContainer } from "react-toastify";

// components
import Main from "./components/main/Main";
import Catmostdog from "./components/catmostdog/Catmostdog";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
	return (
		<main className="main">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Main />} />
					<Route path="catmostdog" element={<Catmostdog />} />
				</Route>
			</Routes>
			<ToastContainer autoClose={10000}></ToastContainer>
		</main>
	);
};

export default App;
