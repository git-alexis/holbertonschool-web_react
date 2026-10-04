import { shallow } from 'enzyme';
import Notifications from './Notifications';

jest.mock('./assets/close-button.png', () => 'close-button.png');
jest.mock('./Notifications.css', () => ({}));

describe('Notifications component', () => {
  test("<Notifications /> is rendered without crashing", () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper).toHaveLength(1);
  });

  test("renders the notifications title", () => {
    const wrapper = shallow(<Notifications />)
    const text = wrapper.find('p').text();
    expect(text.toLowerCase()).toContain(
      'here is the list of notifications'
    );
  });

  test("renders the close button", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  test("renders 3 list items", () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('li')).toHaveLength(3);
  });

  test("logs a message when the close button is clicked", () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    const wrapper = shallow(<Notifications />);
    wrapper.find('button').simulate('click');

    expect(consoleSpy).toHaveBeenCalledWith(
      'Close button has been clicked'
    );

    consoleSpy.mockRestore();
  });
});
