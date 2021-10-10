import React, { useEffect, useState } from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__left'></div>
			<div className='footer__center'>Footer</div>
			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
