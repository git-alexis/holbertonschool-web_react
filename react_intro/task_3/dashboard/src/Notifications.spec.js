import { shallow } from 'enzyme';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  it("<App /> is rendered without crashing", () => {
    shallow(<Notifications />);
  });

  it('renders 3 list items', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('li').length).toBe(3);
  });

  test('renders the notifications title', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });
});
