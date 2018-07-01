import React from 'react';
import { shallow } from 'enzyme';
import SendMessage from './SendMessage';

const TEST_STRING = 'testing';

function createTestProps (props) {
	return {
		
		...props,
	};
}

describe('<SendMessage />', () => {
	let props;
	let wrapper;
	
    beforeEach(() => {
      props  = createTestProps();
      wrapper = shallow(<SendMessage {...props} />)
	});
	
	it('renders without crashing')
});
