import connect from 'react-redux-fetch';

import { baseServiceUrl, infoServiceUrl } from '../../../config/serviceLink';
import menuLink from '../../../config/menuLink';
import { Info } from '../base/Info';

const infoID = (location) => {
  let id = 1;
  menuLink.forEach((link) => {
    if (link.base === location) {
      id = link.id;
    }
  });
  return id;
};

const InfoContainer = connect((props, context) => [
  {
    resource: 'Information',
    method: 'get',
    request: {
      method: 'get',
      url: baseServiceUrl + infoServiceUrl + infoID(props.match.params.election),
    },
  },
])(Info);

export default InfoContainer;
