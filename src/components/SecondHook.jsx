export function SecondHook() {
	return (
		<section className='sm:my-24 my-12 px-6 mx-auto text-start'>
			<div className='px-6 max-w-[800px] mx-auto'>
				<h3 className='text-center text-yellow-300 mb-6'>No external dependencies</h3>
				<h2 className='sm:text-5xl text-2xl font-semibold text-center'>
					Super easy to{" "}
					<span className='underline underline-offset-1 decoration-double decoration-yellow-300'>
						integrate
					</span>{" "}
					no library, dependency needed.
				</h2>
				<h2 className="pt-6 text-lg sm:text-2xl font-['Heebo'] text-center sm:text-justify">
					Form backend handling is not meant to be difficult. Getform gives you the
					possibility to integrate your HTML form with all the major development
					frameworks,{" "}
					<span className='underline underline-offset-1 decoration-double decoration-yellow-300'>
						JAMStack, no-code and CMS platforms
					</span>
				</h2>
			</div>
			<div className='mt-6 px-6 mx-auto flex justify-center'>
				<img
					height='320'
					width='720'
					className='shadow-md scale-75 hover:scale-90 transition-all duration-500 ease-in-out rounded-xl'
					src='/jsgif.gif'
					alt='javascript illustration'
				/>
			</div>
		</section>
	);
}
