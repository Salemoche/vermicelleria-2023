const GalleryComponent = ({gallery}) => {

    console.log(gallery)
    return (
        <div className="col-span-12 relative">
        { gallery.map( ( galleryItem, i ) => {
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
        </div>
        </div>
    )
}

export default GalleryComponent