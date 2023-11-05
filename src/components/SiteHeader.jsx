import { FaNfcDirectional } from "react-icons/fa6";

export function SiteHeader() {
	return (
		<header className='mx-auto sm:px-12 px-10 py-6'>
			<nav className='flex justify-between'>
				<a href='#' className='hover:text-green-400 scale-110'>
					<FaNfcDirectional className='h-8 w-8' />
				</a>
				<ul className='flex flex-wrap gap-6 items-center '>
					<li className='hover:text-green-400 hover:underline underline-offset-8'>
						<a href='#'>About</a>
					</li>
					<li className='bg-green-400 text-black px-6 py-2 rounded-lg hover:bg-green-400'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
