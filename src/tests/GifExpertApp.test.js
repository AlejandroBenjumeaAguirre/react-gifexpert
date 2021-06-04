import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba en <GifExpertApp />', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)

        expect( wrapper ).toMatchSnapshot();

    });

    test('deb de mostrar una lista de categorias', () => {
        
        const categorias = ('One Punc', 'DBZ');
        const wrapper = shallow(<GifExpertApp defaultCategories={ categorias } />)
    
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categorias.length );
    
    });
    
    
});