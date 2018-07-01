import React from 'react';
import Conversation from './Conversation';
import { shallow } from 'enzyme';

function createTestProps (props) {
	return {
		messages: [{body: 'Hi from A'},  {body: 'Hello from B'}],
		...props,
	};
}

describe('<Conversation />', () => {
	let wrapper;
	let props;

	beforeEach(() => {
		props = createTestProps();
		wrapper = shallow(<Conversation {...props} />)
	});
	
	it('renders without crashing');
	
	it('displays messages history', () => {
		
	});
});