const TextItemComponent = ({ sectionItem: {text, hideOnScreens} }) => {

    return (
        <div className={`col-span-12 lg:col-span-6 ${''} mb-8 lg:mb-20 first:mb-2 lg:first:mb-20 ${ hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ hideOnScreens.includes('desktop') ? 'lg:hidden' : 'lg:inline-block' }`} dangerouslySetInnerHTML={{ __html: text }}></div>
    )
}

export default TextItemComponent