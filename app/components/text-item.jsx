const TextItemComponent = ({ sectionItem: {text, hideOnScreens} }) => {

    return (
        <div className={`col-span-12 md:col-span-6 ${''} mb-8 md:mb-20 first:mb-2 md:first:mb-20 ${ hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ hideOnScreens.includes('desktop') ? 'md:hidden' : 'md:inline-block' }`} dangerouslySetInnerHTML={{ __html: text }}></div>
    )
}

export default TextItemComponent