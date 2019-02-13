import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

const assert = require('chai').assert;

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('app should retrieve data from api', () => {
    assert.equal(App, 'hello');
  })
});
