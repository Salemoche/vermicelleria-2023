import './globals.css'
import localFont from '@next/font/local'

export const metadata = {
	title: 'Vermicelleria',
    openGraph: {
        title: 'Vermicelleria',
        description: 'Die Vermicelleria ist ein saisonales Restaurant, ein herbstlicher Ort, wo während drei Novemberwochen das feine Kastaniendessert ab Presse ausgiebig gefeiert wird.',
        url: 'https://vermicelleria.ch',
        siteName: 'Vermicelleria',
        images: [
            {
                url: 'https://backend.vermicelleria.ch/craft/web/assets/uploads/vermicelleria-google-meta.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'de_CH',
        type: 'website',
    },
}

const obibok = localFont({
	src: './fonts/convertet-obibok/Obibok-Inversed.woff2',
	variable: '--font-special',
});

const polisans = localFont({
	src: './fonts/PolySans-Neutral-web/PolySans-Neutral.woff2',
	variable: '--font-regular',
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${obibok.variable} ${polisans.variable} font-regular max-w-screen overflow-y-auto overflow-x-hidden lg:mb-20 mb-[130px]`}>{children}</body>
		</html>
	)
}
