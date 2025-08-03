'use client'
import { useDispatch } from 'react-redux'
import { resetForm } from '../store/formSlice'

export default function ThankYou() {
	const dispatch = useDispatch()

	const handleRestart = () => {
		dispatch(resetForm())
	}

	return (
		<div className="flex flex-col items-center text-center p-6">
			<img
				src="/images/icon-thank-you.svg"
				alt="Thank you"
				className="w-16 h-16 mb-6"
			/>
			<h2 className="text-2xl font-bold mb-4">Thank you!</h2>
			<p className="text-gray-600 mb-8">
				Thanks for confirming your subscription! We hope you have fun
				using our platform. If you ever need support, feel free to
				email us at support@example.com.
			</p>

			<button
				onClick={handleRestart}
				className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all"
			>
				Start Over
			</button>
		</div>
	)
}
