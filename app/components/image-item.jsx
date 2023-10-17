const ImageItemComponent = ({sectionItem: {image, mask, aspectRatio, width, extraSpace, hideOnScreens}}) => {

    let aspectRatioClass;

    if ( aspectRatio === 'threeTwo' ) aspectRatioClass = 'aspect-w-3 aspect-h-2'
    
    if ( aspectRatio === 'twoThree' ) aspectRatioClass = 'aspect-w-2 aspect-h-3'

    return (
        <div className={`col-span-${ aspectRatio === 'twoThree' && width == 6 ? 6 : 12} md:col-span-${width} ${aspectRatioClass} mb-${ extraSpace ? '8' : '2' } md:mb-${ extraSpace ? '20' : '4' } ${ hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ hideOnScreens.includes('desktop') ? 'md:hidden' : 'md:inline-block' }`}>
            { image[0] && <img className="object-cover w-full" src={`${image[0].url}`} alt="" /> }
        </div>
    )
}

export default ImageItemComponent