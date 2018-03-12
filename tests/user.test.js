import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import User from '../react/components/user.jsx';
import axios from 'axios';

function handleClick() {
  return true;
}

describe('User', () => {

  it('-- should render <User /> component', () => {
    const handleClick = sinon.spy();
    const component = shallow(<User handleClick={ handleClick } />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it('-- should validate button click', () => {
    const handleClick = sinon.spy();
    const component = shallow(<User handleClick={ handleClick } />);
    component.find('button').simulate('click');
    expect(handleClick).toHaveProperty('callCount', 1);
  });

  it('-- should validate user data', done => {
    const handleClick = (cb) => {
      cb(null, {
        username: "Amilea",
        contract: "Consultant",
        country: "uk"
      });


      setTimeout(() => {
           expect(component.ref('username').innerHTML).toEqual('Amilea');
           expect(component.ref('consultant').getAttribute('value')).toEqual('true');
           expect(component.ref('country').value).toEqual('uk');
           done();
       }, 0);
    }

    const component = mount(<User handleClick={ handleClick } />);
    component.find('button').simulate('click');
  });

});
