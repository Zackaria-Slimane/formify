export function Showcase() {
	return (
		<section className='mt-8 sm:mt-24 mx-auto px-8'>
			<h2 className='text-center py-12'>
				Trusted by <span className='text-green-300'> 100+ </span> companies
			</h2>
			<div className='grid overflow-hidden gap-4 sm:grid-cols-5 items-center justify-items-center'>
				<div>
					<img
						width='70'
						height='70'
						className='hover:scale-110 transition-all duration-300 ease-in-out'
						src='/burgerking.svg'
						alt='burgerking logo'
					/>
				</div>
				<div>
					<img
						width='130'
						height='40'
						className='hover:scale-110 transition-all duration-300 ease-in-out'
						src='/codecademy.svg'
						alt='codeacademy logo'
					/>
				</div>
				<div>
					<img
						width='70'
						height='70'
						className='hover:scale-110 transition-all duration-300 ease-in-out'
						src='/lidl.svg'
						alt='lidl logo'
					/>
				</div>
				<div>
					<img
						width='130'
						height='40'
						className='hover:scale-110 transition-all duration-300 ease-in-out'
						src='/section.svg'
						alt='section logo'
					/>
				</div>
				<div>
					<img
						width='130'
						height='40'
						className='hover:scale-110 transition-all duration-300 ease-in-out'
						src='/toyota.svg'
						alt='toyota logo'
					/>
				</div>
			</div>
		</section>
	);
}
