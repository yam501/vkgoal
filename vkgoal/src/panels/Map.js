import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, text} from '@vkontakte/vkui';
import { ReactComponent as DisplayIcon } from '../img/display.svg';
import { ReactComponent as BrushIcon } from '../img/brush.svg';
import { ReactComponent as BicycleIcon } from '../img/bicycle.svg';

import './Map.css';

const Map = (id, go) => {
	const [active, setActive] = useState(0);
	const [currentRange, setCurrentRange] = useState(100);
	const [currentHourRange, setCurrentHourRange] = useState(24);
	const [currentMinuteRange, setCurrentMinuteRange] = useState(60);
	let cardTitle;
	
	const titleCard = () => {
		if(active === 1) {
			cardTitle = 'Программирование';
		} else if (active === 0) {
			cardTitle = 'Творчество';
		} else {
			cardTitle = 'Спорт';
		}
	}

	titleCard();

	return (
		<Panel className='select__page' id={id}>
			<div className='header'>
			    <div> </div>
			    <span>vk goal</span>
			    <div></div>
		    </div>

			<div className='select__page__content'>
				<div className='title_box'>
					<h1 className='card_title'>{cardTitle}</h1>
				</div>
				<div className='slider'>
					<div  
					onMouseEnter={() => setActive(1)}
					className= {`select_card ${active === 1 ? 'active' : ''}`}>
						<DisplayIcon className="card__icon" height={40} width={40} fill="#000" />
					</div>
					<div 
						onMouseEnter={() => setActive(0)}
						// onMouseOut={() => setActive(3)}
						className= {`select_card ${active === 0 ? 'active' : ''}`}>
						<BrushIcon className="card__icon" height={40} width={40} fill="#000" />
					</div>
					<div 
						onMouseEnter={() => setActive(2)}
						// onMouseOut={() => setActive(5)}
						className= {`select_card ${active === 2 ? 'active' : ''}`}>
						<BicycleIcon className="card__icon" height={40} width={40} fill="#000" />
					</div>	
					
				</div>
				<div className='select_form'>
					<form className="nomer_scrollbar">
						<label for='day'>Количество дней</label>
						<input
						value={currentRange}
						onChange={e => setCurrentRange(e.target.value)} 
						type='range' 
						max='365' 
						min='1' />
						<span>{currentRange}</span>
					</form>

					<form className="nomer_scrollbar">
						<label for='hour'>Количество часов</label>
						<input
						value={currentHourRange}
						onChange={e => setCurrentHourRange(e.target.value)} 
						type='range' 
						max='24' 
						min='1' />
						<span>{currentHourRange}</span>
					</form>

					<form className="nomer_scrollbar">
						<label for='minute'>Количество минут</label>
						<input
						value={currentMinuteRange}
						onChange={e => setCurrentMinuteRange(e.target.value)} 
						type='range' 
						max='60' 
						min='1' />
						<span>{currentMinuteRange}</span>
					</form>
					<Button type='submit' className='btn_form'>Подтвердить</Button>
				</div>
			</div>
		</Panel>
	)
}

Map.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Map;
