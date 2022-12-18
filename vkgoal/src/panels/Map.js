import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Map = props => (
	<Panel id={props.id}>
		<PanelHeader>
            left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
			Карта, возможность добавить ментора, шаблон
		</PanelHeader>
        <Group header={<Header mode="secondary">Пример</Header>}>
			<Div>
				<Button stretched size="l" onClick={go} data-to="map">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Map.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Map;
