import React from 'react';
import { withRouter } from 'react-router-dom';

import DoubleCol from '../double-col';

import { PersonList, PersonDetail } from '../sw-components';
import { PlanetList, PlanetDetail } from '../sw-components';
import { StarshipList, StarshipDetail } from '../sw-components';

import ErrorBoundary from '../error-boundary';

import './pages.css';

const SWPage = (Left, Right) => withRouter(({ itemId, history }) => {

    return (
        <ErrorBoundary>
            <DoubleCol
                left={<Left itemId={itemId} onItemSelected={(id) => history.push(`${id}`)} />}
                right={<Right itemId={itemId} />}
            />
        </ErrorBoundary>
    );
});

const PeoplePage = SWPage(PersonList, PersonDetail);
const PlanetsPage = SWPage(PlanetList, PlanetDetail);
const StarshipsPage = SWPage(StarshipList, StarshipDetail);


export { PeoplePage, PlanetsPage, StarshipsPage };