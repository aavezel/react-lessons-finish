import React from 'react';
import ReactDOM from 'react-dom';
//import { HookSwitcher } from './HookSwitcher';
//import { RootContext } from './ContextChild';
// import { EffectsRoot } from './effects';
//import { EffectsNotficationRoot } from './effectsNotification';
import { PlanetInfoRoot } from './planetInfo_exp';


const App = () => <PlanetInfoRoot />;

ReactDOM.render(<App />, document.getElementById('root'));
