jest.mock('./assets/close-button.png', () => 'close-button.png');
jest.mock('./Notifications.css', () => ({}));
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it("<Notifications /> is rendered without crashing", () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper).toHaveLength(1);
  });

  it("renders the notifications title", () => {
    const wrapper = shallow(<Notifications />)
    const text = wrapper.find('p').text();
    expect(text.toLowerCase()).toContain(
      'here is the list of notifications'
    );
  });

  it("renders the close button", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it("renders 3 list items", () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it("logs a message when the close button is clicked", () => {
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
