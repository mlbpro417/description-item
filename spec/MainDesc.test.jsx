import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MainDesc from '../react-client/src/MainDesc';

describe('MainDesc Component', () => {
  const data = {
    brand: 'brandTest',
    model: 'modelTest',
    price: 100,
    shipping: 'shippingTest',
    stock: true,
  };

  it('should be defined', () => {
    expect(MainDesc).toBeDefined();
  });

  it('should render a Brand <p> tag', () => {
    expect(shallow(<MainDesc dataDesc={data} />).find('#brand').length).toEqual(1);
  });

  it('should render a Model <h1> tag', () => {
    expect(shallow(<MainDesc dataDesc={data} />).find('#model').length).toEqual(1);
  });

  it('should render a Price and Shipping <p> tag', () => {
    expect(shallow(<MainDesc dataDesc={data} />).find('#price_shipping').length).toEqual(1);
  });

  it('should render a Stock <h3> tag', () => {
    expect(shallow(<MainDesc dataDesc={data} />).find('#stock').length).toEqual(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<MainDesc dataDesc={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
