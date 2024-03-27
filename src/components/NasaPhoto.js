import React from 'react';
import { useState, useEffect } from 'react';

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);


    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=AHUAZIZ071wHOqoKAVXMcEiiEUWCmk5g2w1xk2th'
        );
        const data = await res.json();
        setPhotoData(data);
        }
 }, []);

 if(!photoData) return <div />;
    return(
        <div>
            <img
            src={photoData.url} alt={photoData.tilte}
            />
        </div>
    )
}