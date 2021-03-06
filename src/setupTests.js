// Configure react-testing-library
// See https://create-react-app.dev/docs/running-tests/#option-2-react-testing-library
import '@testing-library/jest-dom/extend-expect';

// Configure enzyme
// See https://create-react-app.dev/docs/running-tests/#srcsetuptestsjs
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
