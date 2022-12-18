import React, { useState } from 'react';
import PropTypes from 'prop-types';


import { Panel, PanelHeader, PanelHeaderBack, Group, Button, Div, Text } from '@vkontakte/vkui';

import './Selection.css';

const Selection = (id, go) => {

	const [active, setActive] = useState(0);

	return (
		<Panel id={id}>
			<div className='header'>
				<div> </div>
				<span>vk goal</span>
				<div> </div>
			</div>
			<div className='header_text'>Самое приятное - достичь своих</div>
			<div>
			</div>
		</Panel>
	)
};

Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
