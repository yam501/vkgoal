import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, text} from '@vkontakte/vkui';



const Map = (id, go) => {
	const [active, setActive] = useState(0);
	let cardTitle;
	
	const titleCard = () => {
		if(active === 1) {
			cardTitle = 'Программирование';
		} else if (active === 0) {
			cardTitle = 'Творчесвто';
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
					// onMouseOut={() => setActive(0)}
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
					<form className='form'>
						<input type='range' min="1" max='365' className="range" oninput="rangenumber.value=value"/>
  						<input type="number" id="rangenumber" min="1" max="365" step="1" value="45" oninput="range.value=value" />
					</form>
				</div>
			</div>
		</Panel>
	)
}
=======
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
>>>>>>> 06bd95efc9ac4e2f543016c30730b48514b58b16

Map.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Map;
