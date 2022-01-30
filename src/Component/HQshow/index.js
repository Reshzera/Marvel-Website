import React from 'react';

import { HQcontainer, HQlist, ComicLable, LinkComic } from './styles';
import {useDispatch, useSelector} from 'react-redux'
import {changeProduct} from '../../Store/Action'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function HQshow(props) {
    const dispacth = useDispatch();
    return (
        <HQcontainer>
            <HQlist>
                {props.list.map((comic, index) =>
                    <li key={index}>
                        {comic.raro ? <ComicLable raro={comic.raro}>Raro</ComicLable> : <ComicLable raro={comic.raro}>Comum</ComicLable>}
                        <LinkComic to='/compra' raro={comic.raro} onClick={() => {dispacth(changeProduct(comic))}}> 
                            <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt=''></img>
                            <span>{comic.title}</span>
                        </LinkComic>
                    </li>
                )}
            </HQlist>
        </HQcontainer>
    );
}

export default HQshow;