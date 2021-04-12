import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba en <GifExpertApp />', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)

        expect( wrapper ).toMatchSnapshot();

    });
    
});