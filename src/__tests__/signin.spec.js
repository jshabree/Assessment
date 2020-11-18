import { React } from "react";
import { shallow } from "enzyme";

import { Signin } from "../components/signin";

describe('test case for logging in', () => {
    let wrapper;

    test('username check', () => {
        wrapper = shallow(<Signin/>);

        // logic

        expect(wrapper.state('username')).toEqual('yourusername');
    })

    it('password check', () => {
        wrapper = shallow(<Signin/>);

        // logic

        expect(wrapper.state('password')).toEqual('yourpassword');
    })

    it('login button check', () => {

        wrapper = shallow(<Signin/>);

        // logic from 1st and 2nd test

        wrapper.find('button').simulate('click');

        expect(wrapper.state('isLoggedIn')).toBe(true)
    })

})