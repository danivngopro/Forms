import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cards } from './cards';

export const SearchNav = () => {

    const [filterCards, setFilterCards] = useState<{ title: String }[]>([])
    const navigate = useNavigate();
    const location =useLocation ();
    let searchField  = location.state.searchField;
    let addCards  = location.state.addCards;

    const navigateApiCards = () => {
        navigate('/cards' , {
          state:{
            filterCard:filterCards,
            addCards:[],
            flag:false
          }
        }
        );
      }

      useEffect(() => {
          addCards.filter((card: { title: String }) => {
              if (card.title === searchField) {
                  setFilterCards([...filterCards, card])
                }
                return filterCards;
            });
        }, []);
        
        navigateApiCards();

    return (
        <div>
            <Cards />
        </div>
    );

}