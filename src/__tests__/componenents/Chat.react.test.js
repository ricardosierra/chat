// Chat.test.js
import React from 'react';
import Chat from '../../componenents/Chat';
import renderer from 'react-test-renderer';

test('Chat changes the class when hovered', () => {
  const component = renderer.create(
    <Chat />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
