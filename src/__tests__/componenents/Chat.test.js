// Chat.test.js
import React from 'react';
import Chat from '../../componenents/Chat';
import renderer from 'react-test-renderer';

test('Chat send message', () => {
  const component = renderer.create(
    <Chat />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
