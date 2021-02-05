import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='OK STATUS' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('OK STATUS');   //проверяем что добавился статус
  });
  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus />);
    const instance = component.root;
    const span = instance.findByType('span');
    expect(span).not.toBeNull();  // проверяем что спан создался
  });
  test('after creation <span> should contain correct status', () => {
    const component = create(<ProfileStatus status='OK STATUS' />);
    const instance = component.root;
    const span = instance.findByType('span');
    expect(span.children[0]).toBe('OK STATUS');  // проверяем что при отрисовке спан содержит корректный статус
  });
  test('after creation <input> should not be displayed', () => {
    const component = create(<ProfileStatus />);
    const instance = component.root;
    expect(() => {
      const input = instance.findByType('input');
    }).toThrow();  // проверяем что при отрисовке компоненты, инпут не создался
  });
  test('after clicking, the <span> should go into formatting mode and change to <input>', () => {
    const component = create(<ProfileStatus />);
    const instance = component.root;
    const span = instance.findByType('span');
    span.props.onClick();
    const input = instance.findByType('input');
    expect(input).not.toBeNull(); // проверяем что при нажатии на спан, он изменился на инпут
  });
  test('after switching to formatting mode, <input> should contain status from props', () => {
    const component = create(<ProfileStatus status='OK STATUS'/>);
    const instance = component.root;
    const span = instance.findByType('span');
    span.props.onClick();
    const input = instance.findByType('input');
    expect(input.props.value).toBe('OK STATUS'); // проверяем что после перехода в режим форматирования <input> должен содержать статус из props
  });
  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus updateUserStatusTC={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivate();
    expect(mockCallback.mock.calls.length).toBe(1); // проверяем что updateUserStatusTC вызывается
  });
});
