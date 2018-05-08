import * as React from 'react';
import { TileTitle, Info } from '../src/components/main/base/Info';
import { Main } from '../src/components/main/base/Main';
import { Outcome, GraphqlContainer, OutcomeContainer } from '../src/components/main/base/Outcome';

const title = 'default';

const informationFetchFulfilled = {
  pending: false,
  rejected: false,
  fulfilled: true,
  value: {
    id: 0,
    title: 'Example',
    description: 'This is  placeholder',
    beginDate: '',
    endDate: '',
    selectionOptions: [
      {
        position: 1,
        option: 'None',
      },
    ],
  },
};

const informationFetchPending = {
  pending: true,
  rejected: false,
  fulfilled: false,
};

const informationFetchRejected = {
  pending: false,
  rejected: true,
  fulfilled: false,
  value: {
    id: 0,
    title: 'Example',
    description: 'This is  placeholder',
    beginDate: '',
    endDate: '',
    selectionOptions: [
      {
        position: 1,
        option: 'None',
      },
    ],
  },
};

describe('render info page', () => {
  it('sould render titletitle', () => {
    const tiletitle = shallow(<TileTitle title={title} />);
    expect(tiletitle).toMatchSnapshot();
  });
  it('should render info pending', () => {
    const info = shallow(<Info dispatchInformationGet={jest.fn()} InformationFetch={informationFetchPending} />);
    expect(info).toMatchSnapshot();
  });
  it('should render info rejected', () => {
    const info = shallow(<Info dispatchInformationGet={jest.fn()} InformationFetch={informationFetchRejected} />);
    expect(info).toMatchSnapshot();
  });
  it('should render info fulfilled', () => {
    const info = shallow(<Info dispatchInformationGet={jest.fn()} InformationFetch={informationFetchFulfilled} />);
    expect(info).toMatchSnapshot();
  });
});

describe('render main page', () => {
  it('should render main', () => {
    const main = shallow(<Main redirect={jest.fn()} />);
    expect(main).toMatchSnapshot();
  });
});

const blockchain = {
  count: [100, 20, 40],
  backgroundColor: ['hsl(348, 100%, 61%)', 'hsl(204, 86%, 53%)', 'hsl(48, 100%, 67%)'],
  possibilities: ['green', 'blue', 'red'],
};

describe('render outcome page', () => {
  it('should render outcome', () => {
    const outcome = shallow(<Outcome />);
    expect(outcome).toMatchSnapshot();
  });
  it('should render graphqlcontainer loading', () => {
    const graphqlcontainer = shallow(<GraphqlContainer loading />);
    expect(graphqlcontainer).toMatchSnapshot();
  });
  it('should render graphqlcontainer error', () => {
    const graphqlcontainer = shallow(<GraphqlContainer error data={blockchain} />);
    expect(graphqlcontainer).toMatchSnapshot();
  });
  it('should render graphqlcontainer loading', () => {
    const graphqlcontainer = shallow(<GraphqlContainer data={blockchain} />);
    expect(graphqlcontainer).toMatchSnapshot();
  });
});
