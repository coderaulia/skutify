import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function Sidebar() {
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
			<SidebarOption title='Hip Hop' />
			<SidebarOption title='Rocks' />
			<SidebarOption title='Jazz' />
		</div>
	);
}

export default Sidebar;
