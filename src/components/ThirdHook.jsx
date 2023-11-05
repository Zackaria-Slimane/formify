import {
	FaCodeMerge,
	FaGitlab,
	FaDev,
	FaCheckDouble,
	FaSlack,
	FaDiscord,
	FaAtlassian,
	FaTrello,
} from "react-icons/fa6";

export function ThirdHook() {
	return (
		<section className='sm:my-24 my-12 px-6 mx-auto text-start'>
			<div className='px-6 max-w-[800px] mx-auto'>
				<h3 className='text-center text-cyan-300 mb-6'>Powerful automations</h3>
				<h2 className='text-2xl sm:text-5xl font-semibold text-center'>
					<span className='underline underline-offset-1 decoration-double decoration-cyan-300'>
						Automate
					</span>{" "}
					your form with powerful features and integrations.
				</h2>
				<h2 className="pt-6 text-lg sm:text-2xl font-['Heebo'] text-justify">
					Form backend handling is not meant to be difficult. Getform gives you the
					possibility to integrate your HTML form with all the major development
					frameworks,{" "}
					<span className='underline underline-offset-1 decoration-double decoration-cyan-300'>
						JAMStack, no-code and CMS platforms
					</span>
				</h2>
			</div>
			<div className='mt-10 px-6 mx-auto flex justify-center gap-0'>
				<div className='border-2 border-neutral-600 p-8 my-6 rounded-lg'>
					<ul className='grid grid-cols-1 gap-4'>
						<li className='flex flex-wrap gap-2 items-center'>
							{" "}
							<FaCodeMerge className='text-cyan-500 h-5 w-5' />{" "}
							<span className='px-2'>branch automation</span>
						</li>
						<li className='flex flex-wrap gap-2 items-center'>
							{" "}
							<FaDev className='text-cyan-500 h-5 w-5' />{" "}
							<span className='px-2'> dx first </span>
						</li>
						<li className='flex flex-wrap gap-2 items-center'>
							{" "}
							<FaCheckDouble className='text-cyan-500 h-5 w-5' />{" "}
							<span className='px-2'> test suites included </span>
						</li>
						<li className='flex flex-wrap gap-2 items-center'>
							{" "}
							<FaTrello className='text-cyan-500 h-5 w-5' />{" "}
							<span className='px-2'> easy integration </span>
						</li>
						<ul className='ml-4 mt-2 grid grid-cols-1 gap-4'>
							<li className='flex flex-wrap gap-2 items-center'>
								{" "}
								<FaSlack /> <span className='px-2'>Slack</span>
							</li>
							<li className='flex flex-wrap gap-2 items-center'>
								{" "}
								<FaDiscord /> <span className='px-2'> Discord</span>
							</li>
							<li className='flex flex-wrap gap-2 items-center'>
								{" "}
								<FaAtlassian /> <span className='px-2'>Jira</span>
							</li>
						</ul>
					</ul>
				</div>
				<div className='ml--6 hidden sm:block'>
					<img
						className='animate-pulse'
						width='400'
						height='auto'
						src='/techbg.png'
						alt='tech illustration'
					/>
				</div>
			</div>
		</section>
	);
}
