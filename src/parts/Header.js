import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../DataLayer";

export default function Header() {
	const [{ user }, dispatch] = useDataLayerValue();
	return (
		<div className='header'>
			<div className='header__left'>
				<SearchIcon />
				<input
					type='text'
					placeholder='Cari artis, lagu, album kesayanganmu disini!'
				/>
			</div>
			<div className='header__right'>
				<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}
