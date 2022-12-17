import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Selection = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<Group header={<Header>Самое приятное - достичь своих целей</Header>}>
			<Div>
				<Button stretched size="l" onClick={go} data-to="selection">
					Поставить цель 
				</Button>
			</Div>
		</Group>
	</Panel>
);

Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
