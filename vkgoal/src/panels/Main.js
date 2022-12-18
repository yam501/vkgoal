import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Main = ({id, go}) => (
    <Panel id={id}>
        <Group header={<Header>VK GOAL</Header>}>
            <Div>
                Самое приятное - достичь своих целей
            </Div>
            <Div>
                <Button stretched size='1' onClick={go} data-to="home">
                    Поставить цель
                </Button>
            </Div>
        </Group>
    </Panel>
);

Main.propTypes = {
    id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Main;