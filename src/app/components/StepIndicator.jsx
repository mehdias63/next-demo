export default function StepIndicator({ currentStep, isSubmitted }) {
	const steps = ['1', '2', '3', '4']

	return (
		<div className="w-40 bg-blue-900 text-white py-6 px-4 space-y-4 hidden md:block">
			{steps.map((step, index) => (
				<div key={step} className="flex items-center space-x-3">
					<div
						className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
            ${
							parseInt(step) === currentStep ||
							(isSubmitted && step === '4')
								? 'bg-blue-300 text-blue-900'
								: 'border border-white text-white'
						}`}
					>
						{step}
					</div>
					<div className="uppercase text-sm hidden lg:block">
						Step {step}
					</div>
				</div>
			))}
		</div>
	)
}
