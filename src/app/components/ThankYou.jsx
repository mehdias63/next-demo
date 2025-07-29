'use client'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function ThankYou() {
	const form = useSelector(state => state.form)

	useEffect(() => {
		console.log('Submitted Data:', form)
	}, [form])

	return (
		<div className="text-center mt-20">
			<h2 className="text-2xl font-bold mb-4">Thank you!</h2>
			<p className="text-gray-700">We’ve received your submission.</p>
		</div>
	)
}
