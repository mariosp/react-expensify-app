import React from 'react'
import {shallow} from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', ()=> {

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h2').text()).toBe("Expenses app");
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    

});