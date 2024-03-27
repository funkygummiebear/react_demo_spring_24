import React from 'react';
import { useState, useEffect } from 'react';

const APIKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);


    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=${APIKey}'
            //'https://api.nasa.gov/planetary/apod?api_key=AHUAZIZ071wHOqoKAVXMcEiiEUWCmk5g2w1xk2th'
        );
        const data = await res.json();
        setPhotoData(data);
        console.log(data);
        }
 }, []);

 if(!photoData) return <div />;
    return(
        <div>
            <img src={photoData.url} alt={photoData.tilte}/>
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    )
}