import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import selection from '../img/persik.png';
import './Selection.css';

const Selection = props => (
	<Panel id={props.id}>
		<PanelHeader>Возможности</PanelHeader>
		<Group header={<Header mode="secondary">Пример</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="map">
					Перейти дальше
				</Button>
			</Div>
		</Group>
		<img className="Selection" src={selection} alt="Persik The Cat"/>
	</Panel>
);

Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
