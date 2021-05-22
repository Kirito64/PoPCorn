import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./countdown.css"
import moment from "moment"

const CountDown = (props)=>{
	const [days, setDays] = useState(10)
	const [hours, setHours] = useState(10)
	const [minutes, setMinutes] = useState(10)
	const [seconds, setSeconds] = useState(10)

	const setTime = (d,h,m,s)=>{
		setDays(d)
		setHours(h)
		setMinutes(m)
		setSeconds(s)
	}


	useEffect(()=>{
		const interval = setInterval(() =>{
			const {tillDate} = props
			const then = moment(tillDate, "YYYYMMDD")
			const now = moment()
			const countdown = moment(then - now)
			const days = countdown.format("DD")
			const hours = countdown.format("HH")
			const minutes = countdown.format("mm")
			const seconds = countdown.format("ss")
			setTime(days, hours, minutes, seconds)
		}, 1000)
		return ()=>{
			clearInterval(interval)
		}
	}, [])


	

	return(
		<div className="cd-main">
			<div>
				Countdown
			</div>
			<div className="cd-date">
				<p className="days">{days}</p>
				<p className="hours">{hours}</p>
				<p className="minutes">{minutes}</p>
				<p className="seconds">{seconds}</p>
			</div>
			
		</div>
	)


}

CountDown.propTypes ={
	tillDate: PropTypes.String,
}

export default CountDown