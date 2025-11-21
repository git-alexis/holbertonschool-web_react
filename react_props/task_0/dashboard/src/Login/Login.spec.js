import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'
import userEvent from '@testing-library/user-event'

describe("Login component", () => {
  test("renders login", () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).to.have.lengthOf(1);
  });
})
