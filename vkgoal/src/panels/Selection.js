import React from 'react';
import PropTypes from 'prop-types';
import './Home/styles.css'
import bg_url from './secBg.png';
import { ReactComponent as BackButton } from './lilCross.svg';


import { Panel, PanelHeader, PanelHeaderBack, Group, Button, Div, Text } from '@vkontakte/vkui';



const Selection = (id, go) => {

	const [active, setActive] = useState(0);

	return (
		<Panel id={id}>
			<PanelHeader className='header'>
				VK GOAL
			</PanelHeader>
			<Group className="content">
				<Div className='content__select_maket'>
					<div
					onClick={() => setActive(0)} 
					className='select_maket_card'>
						<div className='card__icon'></div>
						<div className='card__text'>Программирование</div>
					</div>
					<div
					onClick={() => setActive(1)} 
					className={`select_maket_card ${active === 1 ? "active" : ''}`}>
						<div className='card__icon'></div>
						<div className='card__text'>Спорт</div>
					</div>
					<div
					onClick={() => setActive(2)}
					className='select_maket_card'>
						<div className='card__icon'></div>
						<div className='card__text'>Творчество</div>
					</div>
				</Div>
			</Group>
		</Panel>
	)
};




Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
