import React from 'react';
import PropTypes from 'prop-types';
import './Selection.css';
// import { useState } from 'react';
import { ReactComponent as PlayIcon } from './arrow.svg';
import { Panel } from '@vkontakte/vkui';
import bg_1 from '../img/bg_1.png'

import MyButton from '../components/MyButton';
// const [days, setDays] = UseState(`День ${days}`);

// const ro


const Selection = (id, go) => {
	return (
		<Panel id={id} >
			<div className='selection-header'>
				<div> </div>
				<span>GOAL</span>
				<div></div>
			</div>
			<div className='container-selection'>
				<img className='selection-container__bg' src={bg_1} />
				<h1 className='container-selection__title'></h1>
				<MyButton dara-to="frineds"className="selection-btn" onClick={go}>
					<span>Прогресс друзей</span>
					<PlayIcon
						style={{ transform: "translateY(1px)" }}
						height={20} width={20} fill="white" />
				</MyButton>
			</div>
		</Panel>
	)
};




Selection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Selection;
