'use client'
import { useSelector, useDispatch } from 'react-redux'
import StepIndicator from '../app/components/StepIndicator'
import PersonalInfo from '../app/components/PersonalInfo'
import SelectPlan from '../app/components/SelectPlan'
import AddOns from '../app/components/AddOns'
import Summary from '../app/components/Summary'
import ThankYou from '../app/components/ThankYou'
import { setSubmitted } from '../app/store/formSlice'

export default function Home() {
	const dispatch = useDispatch()
	const step = useSelector(state => state.form.step)
	const isSubmitted = useSelector(state => state.form.isSubmitted)

	return (
		<div className="flex min-h-screen bg-gray-100">
			<StepIndicator currentStep={step} isSubmitted={isSubmitted} />
			<div className="flex-1 p-6">
				{isSubmitted ? (
					<ThankYou />
				) : (
					<>
						{step === 1 && <PersonalInfo />}
						{step === 2 && <SelectPlan />}
						{step === 3 && <AddOns />}
						{step === 4 && (
							<Summary
								onConfirm={() => dispatch(setSubmitted(true))}
							/>
						)}
					</>
				)}
			</div>
		</div>
	)
}
