import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<APP />', () => {
	let wrapper;
	let props;

	beforeEach(() => {
		wrapper = shallow(<App />)
	});
	
	it('renders without crashing');

	it('has a conversation section', () => {
		expect(wrapper.find('Conversation')).toHaveLength(1);
	});

	it('has two input fields', () => {
		expect(wrapper.find('SendMessage')).toHaveLength(2);
	});
});
