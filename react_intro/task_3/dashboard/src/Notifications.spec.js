// Mock des assets avant tout import de composant
jest.mock('./assets/close-button.png', () => 'close-button.png');

import { shallow } from 'enzyme';
import Notifications from './Notifications';

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
