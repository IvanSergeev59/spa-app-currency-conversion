import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import App from '../src/app';

Enzyme.configure({ adapter: new Adapter() });

it('should render App comment', () => {
    const component = shallow (<App />)
    const wrapper = component.find(".app");
    expect(wrapper.length).toBe(1)
};