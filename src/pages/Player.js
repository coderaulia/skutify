import React from "react";
import "./player.css";
import Fade from "react-reveal/Fade";
import Sidebar from "../parts/Sidebar";
import Body from "../parts/Body";
import Footer from "../parts/Footer";

function Player({ spotify }) {
	return (
		<div className='player'>
			<div className='player__body'>
				{/* sidebar */}
				<Sidebar />

				{/* body */}
				<Body spotify={spotify} />
			</div>
			{/* footer */}
			<Footer spotify={spotify} />
		</div>
	);
}

export default Player;
