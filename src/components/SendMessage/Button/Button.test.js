import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const TEST_STRING = 'testing';

function noop () {}

function createTestProps (props) {
	return {
		label: TEST_STRING,
		clickHandler: noop,
		...props,
	};
}

describe('<Button />', () => {
	describe('Rendering', () => {
		let props;
		let wrapper;
		
		beforeEach(() => {
			props = createTestProps();
			wrapper = shallow(<Button {...props} />);
		});

		it('renders without crashing', () => {
			expect(wrapper).toBeTruthy();
		});
		
		it('renders a <button> element', () => {
			expect(wrapper.find('button')).toHaveLength(1);
		});
		
		it('renders the button with a label prop', () => {
			expect(wrapper.find('button').text()).toEqual(TEST_STRING);
		});
	});
	
	describe ('Interaction', () => {
		let props;
		let wrapper;
		let mockCallback;
		
		beforeEach(() => {
			mockCallback = jest.fn();
			props = createTestProps({clickHandler: mockCallback});
			wrapper = shallow(<Button {...props} />);
		});

		it('runs its `clickHandler` prop function when clicked', () => {
			wrapper.find('button').simulate('click');
			
			expect(mockCallback.mock.calls.length).toBe(1);
		});
	})
});
