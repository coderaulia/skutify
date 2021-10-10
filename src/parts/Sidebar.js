import React from "react";
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
			<img
				className='sidebar__logo'
				src={(process.PUBLIC_URL, "logo.png")}
				alt='Skutify'
			/>

			<SidebarOption title='Beranda' Icon={HomeIcon} />
			<SidebarOption title='Cari' Icon={SearchIcon} />
			<SidebarOption title='Pustaka Anda' Icon={LibraryMusicIcon} />
			<br />
			<strong className='sidebar__title'>Playlists</strong>
			<hr />

			{/* looping playlists */}
			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
		</div>
	);
}

export default Sidebar;
