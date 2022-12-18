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
			<Button stretched size="1" onClick={go} data-to="selection">
				Поставить цель
			</Button>
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
