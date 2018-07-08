import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

const TEST_STRING = 'testing';

function createTestProps (props) {
	return {
		body: 'testing',
		...props,
	};
}

describe('<Message />', () => {
	let props;
	let wrapper;
	
    beforeEach(() => {
      props  = createTestProps();
      wrapper = shallow(<Message {...props} />)
	});
	
	it('renders without crashing')

	it('displays the message text', () => {
		const wrapper = shallow(<Message body={TEST_STRING} />);

		expect(wrapper.text()).toEqual(TEST_STRING);
	});
});
