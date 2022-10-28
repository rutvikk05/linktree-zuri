import { useState, useEffect } from 'react';
import { Header, Body, BodyItem, } from './components';
import { user, links } from './__mocks__';

const App = () => {
  const [state, setState] = useState({
    links,
    user,
  });

  return (
    <>
      <Header {...state.user} />
      <Body>
        {state.links.map((link, index) => (
          <BodyItem key={index} {...link} />
        ))}
      </Body>
    </>
  );
};

export default App;
