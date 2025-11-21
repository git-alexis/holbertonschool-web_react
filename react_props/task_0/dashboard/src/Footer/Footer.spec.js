import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'
import * as myModule from '../utils/utils.js'

describe("Footer component", () => {
  test("renders footer", () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).to.have.lengthOf(1);
  });
})
