import React from 'react'
import SingleImage from './singleImage'

export default function Images({allImages}) {

    const images = allImages.map((image) =>{
        return <SingleImage key={image.id} image = {image}/>;
    })


    return (
        <div className = 'grid'>
            {images}
        </div>
    )
}
