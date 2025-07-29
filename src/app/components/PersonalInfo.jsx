'use client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, setPersonalInfo } from '../store/formSlice'

export default function PersonalInfo() {
	const dispatch = useDispatch()
	const { name, email, phone } = useSelector(
		state => state.form.personalInfo,
	)

	const [form, setForm] = useState({ name, email, phone })
	const [errors, setErrors] = useState({})

	const validate = () => {
		const newErrors = {}
		if (!form.name) newErrors.name = 'This field is required'
		if (!form.email) newErrors.email = 'This field is required'
		if (!form.phone) newErrors.phone = 'This field is required'
		return newErrors
	}

	const handleSubmit = () => {
		const validation = validate()
		if (Object.keys(validation).length > 0) {
			setErrors(validation)
		} else {
			dispatch(setPersonalInfo(form))
			dispatch(nextStep())
		}
	}

	return (
		<div>
			<h2 className="text-xl font-bold mb-4">Your Info</h2>
			<div className="space-y-4">
				<div>
					<input
						className={`w-full p-2 border ${
							errors.name ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Name"
						value={form.name}
						onChange={e => setForm({ ...form, name: e.target.value })}
					/>
					{errors.name && (
						<p className="text-red-500 text-sm">{errors.name}</p>
					)}
				</div>
				<div>
					<input
						className={`w-full p-2 border ${
							errors.email ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Email"
						value={form.email}
						onChange={e =>
							setForm({ ...form, email: e.target.value })
						}
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email}</p>
					)}
				</div>
				<div>
					<input
						className={`w-full p-2 border ${
							errors.phone ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Phone"
						value={form.phone}
						onChange={e =>
							setForm({ ...form, phone: e.target.value })
						}
					/>
					{errors.phone && (
						<p className="text-red-500 text-sm">{errors.phone}</p>
					)}
				</div>
				<button
					onClick={handleSubmit}
					className="bg-blue-600 text-white px-4 py-2 rounded"
				>
					Next Step
				</button>
			</div>
		</div>
	)
}
