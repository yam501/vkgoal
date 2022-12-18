import React from 'react';
import PropTypes from 'prop-types';
import './Home/styles.css'
import bg_url from './secBg.png';
import { ReactComponent as BackButton } from './lilCross.svg';


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

Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
