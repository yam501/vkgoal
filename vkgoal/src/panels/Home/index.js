import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<div className='header'>
			<div> </div>
			<span>vk goal</span>
			<div></div>
		</div>
		{fetchedUser &&
			<Group header={<Header></Header>}>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}
		<div className='header_text'>Самое приятное - достичь своих</div>
		<div>
			<a class="arrow-3" href="#link">Поставить цель |
				<svg class="arrow-3-icon" xmlns="http://www.w3.org/2000/
				svg" width="32" height="32" viewBox="0 0 32 32">
					<g fill="none" stroke="#337AB7" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
						<circle class="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
						<path class="arrow-3-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
					</g>
				</svg>
			</a>
		</div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
