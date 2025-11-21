import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it("<App /> is rendered without crashing", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).to.have.lengthOf(1);
  });

  it("<App /> renders a div with the class App-header", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-header')).to.have.lengthOf(1);
  });

  it("<App /> renders a div with the class App-body", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-body')).to.have.lengthOf(1);
  });

  it("<App /> renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-footer')).to.have.lengthOf(1);
  });
});
