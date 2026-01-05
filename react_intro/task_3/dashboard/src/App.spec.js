jest.mock('./assets/holberton-logo.jpg', () => 'holberton-logo.jpg');
jest.mock('./assets/close-button.png', () => 'close-button.png');
jest.mock('./App.css', () => ({}));
jest.mock('./Notifications.css', () => ({}));
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it("<App /> is rendered without crashing", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1);
  });

  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it("renders a div with the class App-body", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  it("renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
