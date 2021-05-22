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
		setInterval(() =>{
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
	})

	

	return(
		<div className="cd-main">
			<div>
				Countdown
			</div>
			<div className="cd-date">
				<div className="days">{days}</div>
				<div className="hours">{hours}</div>
				<div className="minutes">{minutes}</div>
				<div className="seconds">{seconds}</div>
			</div>
			
		</div>
	)


}

CountDown.propTypes ={
	tillDate: PropTypes.String,
}

export default CountDown