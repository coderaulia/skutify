import React from "react";
import Fade from "react-reveal/Fade";
import "./sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
	const [{ playlists }, dispatch] = useDataLayerValue();
	return (
		<div className='sidebar'>
			<Fade>
				<img
					className='sidebar__logo'
					src={(process.PUBLIC_URL, "logo.png")}
					alt='Skutify'
				/>
			</Fade>
			<Fade left delay={200}>
				<SidebarOption title='Beranda' Icon={HomeIcon} />
			</Fade>
			<Fade left delay={300}>
				<SidebarOption title='Cari' Icon={SearchIcon} />
			</Fade>
			<Fade left delay={400}>
				<SidebarOption title='Pustaka Anda' Icon={LibraryMusicIcon} />
			</Fade>
			<br />
			<Fade left delay={500}>
				<strong className='sidebar__title'>Playlists</strong>
				<hr />
			</Fade>

			{/* looping playlists */}
			{playlists?.items?.map((playlist) => (
				<Fade delay={500}>
					<SidebarOption title={playlist.name} />
				</Fade>
			))}
		</div>
	);
}

export default Sidebar;
