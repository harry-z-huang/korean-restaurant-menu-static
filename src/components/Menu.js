import React from 'react';
import englishMenu from '../../englishMenu';
import Items from './Items';
//Navbar should appear at bottom, closest to the users thumbs. Should NOT appear at the top.

const Menu = () => {
    const appetizers = englishMenu.listApps(); // an array of objects
    return(
        <div>
            {appetizers.map(item => <Items name={item.name} price={item.price} image={item.image}/>)}
        </div>
    )

};

export default Menu;