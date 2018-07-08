import React from 'react';
import Input from './Input';
import { shallow, mount } from 'enzyme';

const TEST_STRING = 'testing';

function noop () {}

function createTestProps (props) {
	return {
		onChange: noop,
		...props,
	};
}

describe('<Input />', () => {
	describe('Rendering', () => {
		let props;
		let wrapper;
		
		beforeEach(() => {
			props = createTestProps();
			wrapper = shallow(<Input {...props} />);
		});
		
		it('renders without crashing', () => {
			expect(wrapper).toBeTruthy();
		});
		
		it('renders an <input> element', () => {
			expect(wrapper.find('input')).toHaveLength(1);
		});
		
		describe('with `text` prop', () => {
			beforeEach(() => {
				props = createTestProps({text: TEST_STRING});
				wrapper = shallow(<Input {...props} />);
			});

			it('renders the <input> with text when `text` prop is passed in', () => {
				expect(wrapper.find('input').props().value).toEqual(TEST_STRING);
			});
		});
	});
	
	describe ('Interaction', () => {
		describe ('when typing (or any value change)', () => {
			let props;
			let wrapper;
			let mockCallback;
			
			beforeEach(() => {
				mockCallback = jest.fn();
				props = createTestProps({onChange: mockCallback});
				wrapper = shallow(<Input {...props} />);
			});
	
			it('runs its `onChange` prop-function when its value changes', () => {
				wrapper.simulate('change', {target: {key: 'A'}});
	
				expect(mockCallback.mock.calls.length).toBe(1);
			});
		});

		describe ('when pressing the `Enter` key', () => {
			let props;
			let wrapper;
			let mockCallback;
			
			beforeEach(() => {
				mockCallback = jest.fn();
				props = createTestProps({text: TEST_STRING, onEnter: mockCallback});
				wrapper = shallow(<Input {...props} />);
			});
	
			it('runs its `onEnter` prop-function when you hit `Enter`', () => {
				wrapper.simulate('keyPress', {key: 'Enter'});
	
				expect(mockCallback.mock.calls.length).toBe(1);
			});
		});
	});
});