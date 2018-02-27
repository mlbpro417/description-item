import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../react-client/src/IndexDesc';

describe('Index Component', () => {
  it('should be defined', () => {
    expect(Index).toBeDefined();
  });

  it('should renders correctly', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
