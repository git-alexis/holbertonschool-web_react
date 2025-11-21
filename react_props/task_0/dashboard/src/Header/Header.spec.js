import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

describe("Header component", () => {
  test("renders header", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).to.have.lengthOf(1);
  });
})
