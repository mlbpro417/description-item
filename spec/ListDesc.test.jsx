import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListDesc from '../react-client/src/ListDesc';

describe('ListDesc Component', () => {
  const data = ['test'];

  it('should be defined', () => {
    expect(ListDesc).toBeDefined();
  });

  it('should render a <li> tag', () => {
    expect(shallow(<ListDesc item={data} />).find('#list-item').length).toEqual(1);
  });

  it('should renders correctly', () => {
    const tree = renderer.create(<ListDesc item={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
