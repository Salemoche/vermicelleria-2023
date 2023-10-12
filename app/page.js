import LandingComponent from '@/app/components/landing'
import Image from 'next/image'
import BannerComponent from './components/banner'

export default function Home() {
	return (
		<main className="min-h-[100svh]">
            <div className="h-[100svh].w-full"></div>
            <LandingComponent />
            {/* <BannerComponent /> */}
            {/* <div>

            </div> */}
		</main>
	)
}
