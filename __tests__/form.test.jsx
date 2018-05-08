import * as React from 'react';
import { LoginForm, TextInput } from '../src/components/forms/base/LoginForm';
// import { Vote } from '../src/components/forms/voteForm';

describe('rendering forms', () => {
  it('render textinput', () => {
    const textinput = TextInput({ input: 'text' });
    expect(textinput).toMatchSnapshot();
  });
  it('render loginform', () => {
    const login = shallow(<LoginForm generateKey={jest.fn()} handleSubmit={jest.fn()} />);
    expect(login).toMatchSnapshot();
  });
  // it('render voteform', () => {
  //   const vote = shallow(<Vote handleSubmit={jest.fn()} />);
  //   expect(vote).toMatchSnapshot();
  // });
});
