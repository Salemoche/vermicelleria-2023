const LandingComponent = () => {
    return (
        <section className="h-screen py-2 justify-between flex flex-col lg:text-lg">
            <div className="w-full flex justify-between">
                <div className="base-1/2 landscape:base-1/3">02.—26. November</div>
                <div className="portrait:hidden base-1/3">
                    <a href="https://maps.app.goo.gl/Q6GzC2B9nPQXNVfw6" target="_blank">Bäckerstrasse 26, 8004 Zürich</a>
                </div>
                <div className="base-1/2 landscape:base-1/3 text-right">immer 14:00–22:00</div>
            </div>
            <div className="w-full md:flex relative flex flex-col justify-between flex-1">
                <img className="w-full absolute -z-10 max-h-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 landscape:hidden" src="./images/graphics/landingpage-1080x1920-02.svg" />
                <img className="w-full absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 portrait:hidden" src="./images/graphics/landingpage-1920x1080-01.svg" />
                <div className="w-full flex justify-center landscape:hidden ">
                    <img className="max-w-[60%] mt-[5%] xs:max-w-[68%] xs:mt-[12%]" src="./images/graphics/logo-vermicelleria-schwarz.svg" />
                </div>
                <div className="flex justify-between content-center landscape:hidden">
                    <div className="basis-1/2 flex content-center">
                        <img className="" src="./images/graphics/jubilaeums-banner.svg" />
                    </div>
                    <div className="basis-1/2 flex content-center justify-end">
                        <img className="w-[80%]" src="./images/graphics/fuenf-jahres-stern.svg" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between content-center">
                <div className="landscape:hidden">
                    <a href="https://maps.app.goo.gl/Q6GzC2B9nPQXNVfw6" target="_blank">Bäckerstrasse 26, 8004 Zürich</a>
                </div>
                <div className="portrait:hidden basis-[20%] flex items-center justify-center">
                    <a href="https://www.instagram.com/vermicelleria/">Instagram</a>
                </div>
                <div className="portrait:hidden basis-[20%] flex items-center justify-center">
                    <img className="w-[60%]" src="./images/graphics/jubilaeums-banner.svg" />
                </div>
                <div className="portrait:hidden basis-[20%] flex items-center justify-center">
                    <img className="w-[60%]" src="./images/graphics/logo-vermicelleria-schwarz.svg" />
                </div>
                <div className="portrait:hidden basis-[20%] flex items-center justify-center">
                    <img className="w-[50%]" src="./images/graphics/fuenf-jahres-stern.svg" />
                </div>
                <div className="text-right landscape:basis-[20%] flex items-center justify-center">
                    <a href="mailto:mhmm@vermicelleria.ch">Mail</a>
                </div>
            </div>
        </section>
    )
}

export default LandingComponent