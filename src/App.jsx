import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SecondHook } from "./components/SecondHook";
import { Showcase } from "./components/Showcase";
import { SiteHeader } from "./components/SiteHeader";
import { ThirdHook } from "./components/ThirdHook";

function App() {
	return (
		<div className='h-screen mx-auto py-6 w-full sm:max-w-[1200px]'>
			<SiteHeader />
			<Hero />
			<Showcase />
			<SecondHook />
			<ThirdHook />
			<Cta />
			<Footer />
		</div>
	);
}

export default App;
