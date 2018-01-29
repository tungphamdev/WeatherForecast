import React from 'react';
// import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
import Banner from './anshin.png';
// import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://github.com/tungphamdev/WeatherForecast">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
      </div>
    );
  }
}

export default Header;
