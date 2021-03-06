import {React, useState} from "react"
import "./NavBar.css"
import Nav from "./nav"
import items from "./navitems"
import {FaBars} from "react-icons/fa"


const NavBar  = () =>{
	const [isToggled, setToggeled] = useState(false)
	const navItems = items.map((data, i)=>{
		return <Nav text = {data.text} url = {data.url} key ={i}></Nav>
	})


	// const navItems2= items.map((data, i)=>{
	// 	return <Nav text = {data.text} url = {data.url} key ={i} ></Nav>
	// })
	

	const toggleNav = ()=>{
		setToggeled(!isToggled)
	}
	return(
		<div className="main">
			<div className="mobile-only" onClick = {toggleNav}>
				<FaBars className="icon"/>
			</div>
			<div className={isToggled ? "mobile-menu" : "desktop-view"}>
				{navItems}
			</div>
		</div>	
	)
}
	
export default NavBar