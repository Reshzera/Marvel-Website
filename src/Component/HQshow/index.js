import React from 'react';

import { HQcontainer, HQlist } from './styles';

const ListComponent = (props) => (
    <li key={props.index}>
        <a href={`/compra?id=${props.comic.id}`}>
            <img src={`${props.comic.thumbnail.path}/portrait_incredible.${props.comic.thumbnail.extension}`}></img>
            <span>{props.comic.title}</span>
        </a>
    </li>
)

function HQshow(props) {
    return (
        <HQcontainer>
            <HQlist id='grid'>
                {props.list.map((comic, index) => <ListComponent comic={comic} index={index}/>)}
            </HQlist>
        </HQcontainer>
    );
}

export default HQshow;