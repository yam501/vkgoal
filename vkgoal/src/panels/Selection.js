import React from 'react';
import PropTypes from 'prop-types';
import './Home/styles.css'
import bg_url from './secBg.png';
import { ReactComponent as BackButton } from './lilCross.svg';

<<<<<<< HEAD

import { Panel, PanelHeader, PanelHeaderBack, Group, Button, Div, Text } from '@vkontakte/vkui';

import selection from '../img/persik.png';
import './Selection.css';

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



=======

import { Panel } from '@vkontakte/vkui';

const Selection = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<div className='header2'>
			<div>
			<BackButton
				style={{transform: "translateY(1px)"}}
				height={20} width={20} fill="white" />
				 </div>
			<span>GOAL</span>
			<div></div>
		</div>
		<div className='main-container'>
			<img className='main-container__bg' src={bg_url} />
			<span data-to="index" onClick={go}>
				<div data-to="index" onClick={go} className="cum-btn1">
					<span>Поставить цель</span>
				</div>
			</span>
		</div>
	</Panel>
);
>>>>>>> 06bd95efc9ac4e2f543016c30730b48514b58b16

Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
