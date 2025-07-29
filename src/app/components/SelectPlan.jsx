import { useDispatch, useSelector } from 'react-redux'
import { setPlan, nextStep, prevStep } from '../store/formSlice'

export default function SelectPlan() {
	const dispatch = useDispatch()
	const plan = useSelector(state => state.form.plan)

	const plans = [
		{ name: 'Basic', monthly: 10, yearly: 100 },
		{ name: 'Pro', monthly: 20, yearly: 200 },
		{ name: 'Ultimate', monthly: 30, yearly: 300 },
	]

	const toggleYearly = () => {
		dispatch(setPlan({ ...plan, yearly: !plan.yearly }))
	}

	const handleSelect = selected => {
		dispatch(
			setPlan({
				name: selected.name,
				price: plan.yearly ? selected.yearly : selected.monthly,
				yearly: plan.yearly,
			}),
		)
	}

	return (
		<div>
			<h2 className="text-xl font-bold mb-4">Select Plan</h2>
			<div className="space-y-4">
				{plans.map(p => (
					<div
						key={p.name}
						className={`p-4 border rounded ${
							plan.name === p.name
								? 'border-blue-600'
								: 'border-gray-300'
						}`}
						onClick={() => handleSelect(p)}
					>
						<p className="font-bold">{p.name}</p>
						<p>
							{plan.yearly ? `$${p.yearly}/yr` : `$${p.monthly}/mo`}
						</p>
					</div>
				))}
				<button
					onClick={toggleYearly}
					className="text-blue-500 underline"
				>
					Switch to {plan.yearly ? 'Monthly' : 'Yearly'}
				</button>
				<div className="flex justify-between mt-4">
					<button
						onClick={() => dispatch(prevStep())}
						className="text-gray-600"
					>
						Back
					</button>
					<button
						onClick={() => dispatch(nextStep())}
						className="bg-blue-600 text-white px-4 py-2 rounded"
					>
						Next Step
					</button>
				</div>
			</div>
		</div>
	)
}
