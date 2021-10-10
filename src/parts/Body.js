import React from "react";
import "./body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Song from "./Song";
import Fade from "react-reveal/Fade";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:37i9dQZEVXcOtIiENcYEp6`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	return (
		<div className='body'>
			<Fade>
				<Header spotify={spotify} />
			</Fade>
			<Fade bottom delay={200}>
				<div className='body__info'>
					<img src={discover_weekly?.images[0].url} alt='' />
					<div className='body__infoText'>
						<strong>PLAYLIST</strong>
						<h2>Discover Weekly</h2>
						<p>{discover_weekly?.description}</p>
					</div>
				</div>
			</Fade>

			<Fade bottom delay={300}>
				<div className='body__songs'>
					<div className='body__icons'>
						<PlayCircleFilledIcon
							onClick={playPlaylist}
							className='body__shuffle'
						/>
						<FavoriteIcon fontSize='large' />
						<MoreHorizIcon />
					</div>

					{discover_weekly?.tracks.items.map((item) => (
						<Song track={item.track} playSong={playSong} />
					))}
				</div>
			</Fade>
		</div>
	);
}

export default Body;
