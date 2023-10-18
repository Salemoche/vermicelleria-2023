import LandingComponent from '@/app/components/landing'
import Image from 'next/image'
import BannerComponent from './components/banner'
import { entry } from './data/demoContent'
import ImageItemComponent from './components/image-item'
import TextItemComponent from './components/text-item';
import { apolloClient } from './data/apolloClient';
import { CONTENT_QUERY } from './data/queries';
import Head from 'next/head';
import GalleryComponent from './components/gallery';


async function getData() {
    

    const contentData = await apolloClient.query({
        query: CONTENT_QUERY
    });

    
    const content = contentData.data;

    return content;
}

export default async function Home() {

    const data = await getData()

    const { landingImage, landingImageMobile, mainContent, footerLeft, footerRight } = data.entry;
    const { email, date, time } = data.globalSet;

    const getSectionItem = ( sectionItem, index ) => {
        let item = <></>;

        if ( sectionItem.image ) {
            item = <ImageItemComponent key={`section-item-${index}`} sectionItem={sectionItem} />
        }

        if ( sectionItem.text ) {
            item = <TextItemComponent key={`section-item-${index}`} sectionItem={sectionItem} />
        }
        
        return item;
    }

    // console.log(mainContent)

	return (
		<main className="min-h-[100svh]">
            <div className="h-[100svh] w-full pb-[7rem] md:pb-20">
                <img className="w-full h-full portrait:hidden object-cover" src={landingImage[0].url} alt="" />
                <img className="w-full h-full landscape:hidden object-cover object-bottom" src={landingImageMobile[0].url} alt="" />
            </div>
            <BannerComponent globalSet={data.globalSet} />
            <div className="px-2 md:px-4">
                { mainContent.map(( section, i) => (
                    <section id={section.sectionId} key={`content-section-${i}`} className={`w-full grid grid-cols-12 gap-x-4`}>
                        { section.sectionItems.map(( sectionItem, j ) => {
                            return( getSectionItem( sectionItem, j ))
                        })}
                        { section.gallery.length > 1 && <GalleryComponent gallery={section.gallery } /> }
                    </section>
                ))}
            </div>
            <footer className="w-full grid grid-cols-12 gap-4 px-2 md:px-4 pb-2 md:pb-4">
                <div className="col-span-12 md:col-span-6" dangerouslySetInnerHTML={{ __html: footerLeft }}></div>
                <div className="col-span-12 md:col-span-6" dangerouslySetInnerHTML={{ __html: footerRight }}></div>
            </footer>
		</main>
	)
}