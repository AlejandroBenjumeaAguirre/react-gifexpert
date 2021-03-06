import React from 'react'
/* import getGif from '../helpers/getGifs'; */
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

   /*  const [images, setImages] = useState([]); */

   /*  useEffect( () => {
        getGif( category )
            .then(imgs => setImages(imgs));
    }, [category]); */

    return (
        <>
        <h3>{ category }</h3>

        <div className="card-grid">
            <ul>
                {
                    images.map( img => 
                        <GifGridItem 
                            key={img.id} 
                            { ...img }
                        />
                    )
                }
            </ul>
        </div>
        </>
    );
}

export default GifGrid;