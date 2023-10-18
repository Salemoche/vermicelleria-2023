'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const GalleryComponent = ({gallery}) => {

    const swiperRef = useRef(null)

    return (
        <div className="col-span-12 relative">
            {/* { gallery.map( ( galleryItem, i ) => {
                return(
                    <div key={`gallery-item-${i}`} className={`w-full aspect-w-3 aspect-h-2 absolute first:relative first:z-10 top-0 ${ galleryItem.hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ galleryItem.hideOnScreens.includes('desktop') ? 'md:hidden' : 'md:inline-block' }`}>
                        <img className="w-full object-cover" src={galleryItem.galleryImage[0].url} alt="" />
                    </div>
                )
            })}
            <div className={`w-full flex gap-4`}>
                { gallery.map( ( galleryItem, i ) => {
                    return(
                        <div key={`gallery-tab-${i}`} className={`${ galleryItem.hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ galleryItem.hideOnScreens.includes('desktop') ? 'md:hidden' : 'md:inline-block' }`}>
                            { galleryItem.tabName }
                        </div>
                    )
                })}
            </div> */}
            
            <Swiper
                className="w-full"
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                
            { gallery.map( ( galleryItem, i ) => {
                return(
                    <SwiperSlide key={`gallery-item-${i}`} className={`w-full aspect-w-3 aspect-h-2 ${ galleryItem.hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ galleryItem.hideOnScreens.includes('desktop') ? 'md:hidden' : 'md:inline-block' }`}>
                        <img className="w-full object-cover" src={galleryItem.galleryImage[0].url} alt="" />
                    </SwiperSlide>
                )
            })}
            <div className={`w-full flex gap-4`}>
                { gallery.map( ( galleryItem, i ) => {
                    return(
                        <div 
                            key={`gallery-tab-${i}`} 
                            className={`${ galleryItem.hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ galleryItem.hideOnScreens.includes('desktop') ? 'md:hidden' : 'md:inline-block' }`}
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