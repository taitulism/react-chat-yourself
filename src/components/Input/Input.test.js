import React from 'react';
import Input from './Input';
import { shallow, mount } from 'enzyme';

function createTestProps (props) {
	return {
		sendHandler: jest.fn(),
		...props,
	};
}

describe('<Input />', () => {
	let wrapper;
	let props;

	beforeEach(() => {
		props = createTestProps();
		wrapper = shallow(<Input {...props} />)
	});
	
	it('renders without crashing');

	it('has an input field', () => {
		expect(wrapper.find('input')).toHaveLength(1);
	});

	it('has a "send" button', () => {
		expect(wrapper.find('button')).toHaveLength(1);
	});

	it('calls the "sendHandler" function when "send" is clicked', () => {
		const button = wrapper.find('button');
		
		button.simulate('click');

		expect(props.sendHandler).toHaveBeenCalledTimes(1);
	});

	it('calls the "sendHandler" function when "Enter" is pressed', () => {
		const input = wrapper.find('input');
		
		input.simulate('keyPress', {key: 'Enter'});

		expect(props.sendHandler).toHaveBeenCalledTimes(1);
	});

	it('calls the "sendHandler" with the input value', () => {
		const input = wrapper.find('input');
		const button = wrapper.find('button');
		
		wrapper.setState({ message: 'abc' });
		button.simulate('click');

		expect(props.sendHandler.mock.calls[0][0]).toEqual('abc');
	});
});