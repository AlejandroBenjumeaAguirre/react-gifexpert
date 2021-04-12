import React from 'react';
import GifGridItem from '../../components/GifGridItem';
const { shallow } = require("enzyme");


describe('Pruebas en <GifGridItem />', () => {

    const title = 'titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);

    test('debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);

    });

    test('Debe de tener una imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });
    
    test('Debe tener animate_fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.prop('className'));
        expect( div.prop('className').includes('animate__fadeIn') ).toBe(true);
    });
    
});