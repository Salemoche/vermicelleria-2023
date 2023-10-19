'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const GalleryComponent = ({gallery}) => {

    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className="col-span-12 relative mb-8 lg:mb-20">
            
            <Swiper
                className="w-full"
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                onSlideChange={(swiper) => {setCurrentSlide(swiper.activeIndex)}}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                
            { gallery.map( ( galleryItem, i ) => {
                return(
                    <SwiperSlide key={`gallery-item-${i}`} className={`w-full aspect-w-3 aspect-h-2 ${ galleryItem.hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ galleryItem.hideOnScreens.includes('desktop') ? 'lg:hidden' : 'lg:inline-block' }`}>
                        <img className="w-full object-contain" src={galleryItem.galleryImage[0].url} alt="" />
                    </SwiperSlide>
                )
            })}
            <div className={`w-full flex gap-4 mt-2 lg:mt-4`}>
                { gallery.map( ( galleryItem, i ) => {
                    return(
                        <div 
                            key={`gallery-tab-${i}`} 
                            className={`${ currentSlide === i && 'opacity-50' } ${ galleryItem.hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ galleryItem.hideOnScreens.includes('desktop') ? 'lg:hidden' : 'lg:inline-block' } cursor-pointer hover:opacity-50 transition-opacity duration-[0.3]`}
                            onClick={() => swiperRef.current.slideTo(i)}
                        >
                            { galleryItem.tabName }
                        </div>
                    )
                })}
            </div>
            </Swiper>
        </div>
    )
}

export default GalleryComponent