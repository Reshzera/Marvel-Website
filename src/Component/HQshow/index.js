import React from 'react';

import { HQcontainer, HQlist, ComicLable, LinkComic } from './styles';



function HQshow(props) {
    return (
        <HQcontainer>
            <HQlist>
                {props.list.map((comic, index) =>
                    <li key={index}>
                        {comic.raro ? <ComicLable raro={comic.raro}>Raro</ComicLable> : <ComicLable raro={comic.raro}>Comum</ComicLable>}
                        <LinkComic href={`/compra/${comic.id}`} raro={comic.raro} alt='a'>
                            <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} alt=''></img>
                            <span>{comic.title}</span>
                        </LinkComic>
                    </li>
                )}
            </HQlist>
        </HQcontainer>
    );
}

export default HQshow;