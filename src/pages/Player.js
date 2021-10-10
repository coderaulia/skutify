import React from "react";
import "./player.css";
import Fade from "react-reveal/Fade";
import Sidebar from "../parts/Sidebar";
import Body from "../parts/Body";
import Footer from "../parts/Footer";

function Player() {
	return (
		<div className='player'>
			<div className='player__body'>
				{/* sidebar */}
				<Sidebar />

				{/* body */}
				<Body />
			</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

export default Player;
