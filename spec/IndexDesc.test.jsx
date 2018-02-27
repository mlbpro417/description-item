import React from 'react';
import renderer from 'react-test-renderer';
import IndexDesc from '../react-client/src/IndexDesc';

describe('Index Component', () => {
  it('should be defined', () => {
    expect(IndexDesc).toBeDefined();
  });

  it('should renders correctly', () => {
    const tree = renderer.create(<IndexDesc />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
