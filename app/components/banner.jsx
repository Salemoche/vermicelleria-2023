'use client'

import { useEffect, useState, useRef } from "react"

const BannerComponent = ({ globalSet: { email, date, time} }) => {

    const bannerRef = useRef(null)

    const handleScroll = (e) => {

        const pageHeight = document.querySelector('html').scrollHeight
        const pageScrolled = document.querySelector('html').scrollTop
        const bannerWidth = bannerRef.current.scrollWidth;
        const scrollPercent = pageScrolled / (pageHeight - window.innerHeight);

        bannerRef.current.scrollTo((bannerWidth - window.innerWidth) * scrollPercent, 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className="border-t-2 border-black fixed z-20 bottom-0 left-0 w-full bg-white text-sm lg:text-lg">
            <div ref={bannerRef} className="min-h-[100px] h-20 overflow-scroll whitespace-nowrap z-10 pointer-events-all">
                <BannerInner date={date} time={time}/>
                <BannerInner date={date} time={time}/>
            </div>
            <div className="w-full flex justify-between lg:hidden px-2 lg:px-4">
                <div>{date}</div>
                <div>{time}</div>
            </div>
        </nav>
    )
}

const BannerInner = ({ date, time }) => {
    return(
        <div className="inline-flex w-screen gap-4 h-full justify-between align-center mr-2 last:mr-0 lg:mr-4 px-2 lg:px-4">
            <div className={`h-full items-center items-center justify-center hidden lg:flex `}>
                <div>{date}</div>
            </div>
            <div className="flex justify-center lg:justify-between flex-grow-[1] gap-4">
                <div className={`h-full items-center justify-center  hidden lg:flex`}>
                    <img className={`h-[50%]`} src={`/images/vermi-banner-wurm-desktop-outline.svg`} alt="" />
                </div>
                <div className={`h-full items-center justify-center  lg:hidden flex`}>
                    <img className={`h-[50%]`} src={`/images/vermi-banner-wurm-mobile-outline.svg`} alt="" />
                </div>
                <div className={`h-full items-center justify-center  hidden lg:flex`}>
                    <img className={`h-[50%]`} src={`/images/vermi-banner-meringues-outline.svg`} alt="" />
                </div>
                <div className={`h-full items-center justify-center  hidden lg:flex`}>
                    <img className={`h-[50%] translate-y-[5%]`} src={`/images/vermicelleria-banner-halbkreis-outline.svg`} alt="" />
                </div>
            </div>
            <div className={`h-full flex mx-4 items-center justify-center basis-[40%] lg:basis-auto`}>
                <img className={`h-[80%]`} src={`/images/logo-vermicelleria-schwarz.svg`} alt="" />
            </div>
            <div className="flex justify-center lg:justify-between flex-grow-[1] gap-4">
                <div className={`h-full items-center justify-center flex`}>
                    <img className={`h-[50%]`} src={`/images/vermi-banner-meringues-outline.svg`} alt="" />
                </div>
                <div className={`h-full items-center justify-center  hidden lg:flex`}>
                    <img className={`h-[50%]`} src={`/images/vermi-banner-wurm-desktop-outline.svg`} alt="" />
                </div>
                <div className={`h-full items-center justify-center  hidden lg:flex`}>
                    <img className={`h-[50%] translate-y-[5%]`} src={`/images/vermicelleria-banner-halbkreis-outline.svg`} alt="" />
                </div>
                <div className={`h-full items-center justify-center  hidden lg:flex`}>
                    <img className={`h-[50%]`} src={`/images/vermi-banner-wurm-mobile-outline.svg`} alt="" />
                </div>
            </div>
            <div className={`h-full items-center items-center justify-center hidden lg:flex `}>
                <div>{time}</div>
            </div>
        </div>
    )
}


export default BannerComponent