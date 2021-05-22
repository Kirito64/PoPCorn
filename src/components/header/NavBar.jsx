import React from "react"
import "./NavBar.css"
import Nav from "./nav"
import items from "./navitems"
const NavBar  = () =>{
	const navItems = items.map((data, i)=>{
		return <Nav text = {data.text} url = {data.url} key ={i}></Nav>
	})
	return(
		<div className="main">
			{/* <Nav className = "blocker"></Nav> */}
			{navItems}
			{/* <Nav className = "Blocker"></Nav> */}
		</div>	
	)
}
export default NavBar