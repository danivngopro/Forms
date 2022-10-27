
import { useState, useEffect } from 'react';
import { Cards } from './cards';

export const SearchNav = (props: { searchField: String, addCards: any }): JSX.Element => {

    console.log("hhh")

    const [filterCards, setFilterCards] = useState<{ title: String }[]>([])
    
    useEffect(() => {
         props.addCards.filter((card: { title: String }) => {
            if (card.title === props.searchField) {
                setFilterCards([...filterCards, card])
            }
            return filterCards;
        });
    },[]);

    return (
        <div>
            <Cards addCards={filterCards} />
        </div>
    );
}