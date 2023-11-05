import { FiAirplay } from "react-icons/fi";

export function Hero() {
	return (
		<section className='mt-12 px-6 mx-auto text-start'>
			<div className='px-6 max-w-[800px] mx-auto'>
				<h1 className='sm:text-5xl text-2xl font-semibold text-center'>
					Smart form{" "}
					<span className='underline underline-offset-1 decoration-double decoration-rose-400'>
						endpoints
					</span>{" "}
					for developers.
				</h1>
				<h2 className="pt-6 text-lg sm:text-2xl font-['Heebo'] text-center">
					Collect submissions, receive emails and{" "}
					<span className='underline underline-offset-1 decoration-double decoration-rose-300'>
						automate your form.
					</span>
				</h2>
			</div>
			<div className='mt-6 px-6 mx-auto flex justify-center'>
				<img
					height='auto'
					width='auto'
					className='shadow-md scale-75 hover:scale-90 transition-all duration-500 ease-in-out'
					src='../../public/snipet.png'
					alt='code snipet'
				/>
			</div>
			<div className='mt-6 grid grid-cols-1 sm:grid-cols-2 items-center place-items-center sm:place-items-start sm:items-start justify-center mx-auto max-w-[700px]'>
				<div className='flex flex-col mx-auto justify-between place-items-start items-start gap-4'>
					<button className='px-6 py-2 bg-green-300 text-black rounded-lg hover:bg-green-400 hover:scale-105'>
						Book a demo
					</button>
					<p className='sm:flex  flex-wrap justify-normal sm:items-start items-center gap-2 hidden '>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='#7AF69D'
								viewBox='0 0 135 135'>
								<path d='M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z'>
									<animateTransform
										attributeName='transform'
										dur='2.5s'
										from='0 67 67'
										repeatCount='indefinite'
										to='-360 67 67'
										type='rotate'></animateTransform>
								</path>
								<path d='M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z'>
									<animateTransform
										attributeName='transform'
										dur='8s'
										from='0 67 67'
										repeatCount='indefinite'
										to='360 67 67'
										type='rotate'></animateTransform>
								</path>
							</svg>
						</span>
						<span className='text-green-300'>100M+ submissions processed</span>
					</p>
				</div>
				<button className='hidden sm:flex justify-self-start items-center mx-auto mt-4 flex-wrap gap-4 hover:bg-slate-900 px-6 py-2 rounded-md'>
					<span>
						{" "}
						<FiAirplay />
					</span>
					<h3>Watch a tutorial</h3>
				</button>
			</div>
		</section>
	);
}
