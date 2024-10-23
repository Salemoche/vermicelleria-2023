const ImageItemComponent = ({sectionItem: {image, mask, aspectRatio, width, extraSpace, hideOnScreens}}) => {

    let aspectRatioClass;

    if ( aspectRatio === 'threeTwo' ) aspectRatioClass = 'aspect-w-3 aspect-h-2'
    
    if ( aspectRatio === 'twoThree' ) aspectRatioClass = 'aspect-w-2 aspect-h-3'

    console.log(image[0])

    return (
        <div className={`only:lg:col-start-${ aspectRatio === 'twoThree' && width == 6 ? '4' : ''} col-span-${ aspectRatio === 'twoThree' && width == 6 ? 6 : 12} lg:col-span-${width} ${aspectRatioClass} mb-${ extraSpace ? '8' : '2' } lg:mb-${ extraSpace ? '20' : '4' } ${ hideOnScreens.includes('mobile') ? 'hidden' : 'inline-block' } ${ hideOnScreens.includes('desktop') ? 'lg:hidden' : 'lg:inline-block' }`}>
            { image[0] && <img 
                className="object-cover w-full" 
                src={`${image[0].url}`} 
                alt={`${image[0].alt || 'Vermicelleria Image'}`}
                srcSet={`${image[0].small_url} 500w, ${image[0].medium_url} 768w, ${image[0].large_url} 1280w, ${image[0].extraLarge_url} 1800w`}
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1800px"
            /> }
        </div>
    )
}

export default ImageItemComponent