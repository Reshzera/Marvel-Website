import React from 'react';

import { HQcontainer, HQlist, ComicLable, LinkComic, Animatedli } from './styles';
import {useDispatch} from 'react-redux'
import {changeProduct} from '../../Store/Action'

function HQshow(props) {
    const dispacth = useDispatch();
    return (
        <HQcontainer>
            <HQlist>
                {props.list.map((comic, index) =>
                    <Animatedli key={index} raro={comic.raro}>
                        {comic.raro ? <ComicLable raro={comic.raro}>Raro</ComicLable> : <ComicLable raro={comic.raro}>Comum</ComicLable>}
                        <LinkComic to='/compra' raro={comic.raro} onClick={() => {dispacth(changeProduct(comic))}}> 
                            <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt=''></img>
                            <span>{comic.title}</span>
                        </LinkComic>
                    </Animatedli>
                )}
            </HQlist>
        </HQcontainer>
    );
}

export default HQshow;