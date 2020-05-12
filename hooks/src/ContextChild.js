import React, { useContext } from 'react';

const UserNameConetxt = React.createContext();

export const RootContext = () => {
  return (
    <UserNameConetxt.Provider value="Jone">
      <ContextChild />
    </UserNameConetxt.Provider>
  )
}

export const ContextChild = () => {
  const name = useContext(UserNameConetxt);
  return (<div>
    Hello, {name}!
  </div>);
};
