import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

import { ReactComponent as PlayIcon } from './play.svg';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import bg_url from './bg.png'

const Home = ({ id, go, fetchedUser }) => {
	return (
	<Panel id={id} >
		<div className='header1'>
			<div> </div>
			<span>GOAL</span>
			<div></div>
		</div>
		<div className='main-container'>
			<img className='main-container__bg' src={bg_url} />
			<h1 className='main-container__title'>Самое приятное - достичь своих целей</h1>
			<span data-to="map" onClick={go}>
				<div  className="cum-btn">
					<span>Поставить цель</span>
					<PlayIcon
						style={{ transform: "translateY(1px)" }}
						height={20} width={20} fill="white" />
				</div>
			</span>
		</div>
	</Panel>
	)
	};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Home;
