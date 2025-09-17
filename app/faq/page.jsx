"use client";
import { useState } from "react";
import BannerComponent from '../components/banner'
import { apolloClient } from '../data/apolloClient';
import { FAQ_QUERY } from '../data/queries';

async function getData() {
    const contentData = await apolloClient.query({
        query: FAQ_QUERY
    });
    const content = contentData.data;
    return content;
}

export default function FAQPageWrapper() {
    const [data, setData] = useState(null);

    // Fetch data client-side
    useState(() => {
        getData().then(setData);
    }, []);

    if (!data) return <div></div>;

    return <FAQPage data={data} />;
}

function FAQPage({ data }) {
    const { footerLeft, footerRight, faqItems, itemImage, title } = data.entry;
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <main className="min-h-[100svh]">
            <BannerComponent globalSet={data.globalSet} />
            <div className="lg:fixed relative left-2 lg:left-4 top-2 lg:top-4 mb-8"><a href="/">Zurück</a></div>
            <div className="w-full flex flex-col content-center lg:px-36 px-2 lg:py-4 py-2 max-w-[1800px] mx-auto">
                <h1 className="font-regular text-sm lg:text-xl border-black border-b-[1px] pb-2 lg:pb-4 m-0">{title}</h1>
                <ul className="">
                {faqItems.map((item, idx) => (
                    <li key={item.id} className=" border-black border-b-[1px] w-full">
                        <button
                            type="button"
                            className="text-left flex w-full justify-between focus:outline-none py-2 lg:py-4"
                            onClick={() => toggle(idx)}
                            aria-expanded={openIndex === idx}
                        >
                            <h2 className="font-regular text-sm lg:text-xl m-0">{item.question}</h2>
                            <div className="relative lg:w-[1.875rem] lg:h-[1.875rem] w-[1rem] h-[1rem]">
                                <div className={`w-full absolute top-1/2 border-black border-b-[1px] -translate-y-1/2 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}></div>
                                <div className={`h-full absolute left-1/2 border-black border-l-[1px] -translate-x-1/2 transition-transform duration-300 ${openIndex === idx ? "rotate-90" : ""}`}></div>
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`}
                            style={{ transitionProperty: "max-height, opacity" }}
                        >
                            <p className="text-sm lg:text-xl pb-2 lg:pb-4 max-w-[80%]" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
            <div className="w-full flex justify-center mt-4 lg:mt-[400px] mb-[100px] lg:mb-[400px] px-2 lg:px-4 max-w-[960px] mx-auto">
                {itemImage && (
                    <img
                        src={itemImage[0]?.url}
                        alt={itemImage[0]?.alt || 'FAQ Item Image'}
                        className="w-full object-cover"
                    />
                )}
            </div>
            <footer className="w-full grid grid-cols-12 gap-4 px-2 lg:px-4 pb-2 lg:pb-4">
                <div className="col-span-12 lg:col-span-6" dangerouslySetInnerHTML={{ __html: footerLeft }}></div>
                <div className="col-span-12 lg:col-span-6" dangerouslySetInnerHTML={{ __html: footerRight }}></div>
            </footer>
        </main>
    );
}