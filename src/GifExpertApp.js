import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd'; 
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    //const categories = ['Dragon Ball', 'Los caballeros del Zodiaco', 'Death Note']

    const [categories, setCategories] = useState(['Death Note']);

    /* const handleAdd = () => {
        const nuevo = 'Pokemon';

        setCategories((c) => [...c, nuevo]);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ul>
                { 
                    categories.map( category => 
                        <GifGrid key={category} category={ category } />
                    )
                }
            </ul>
        </>
    )
}

export default GifExpertApp;