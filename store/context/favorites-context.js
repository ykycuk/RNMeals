import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],  //default values for createContext but can work without it
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => 
            currentFavIds.filter(mealId => mealId !== id)
        )
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return (
        <FavoritesContext.Provider 
            value={value}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;