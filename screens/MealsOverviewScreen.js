import { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) { // each stack has route prop or i can use hook useRoute inside component instead of route
    const catId = route.params.categoryId //extract id which I passed in CategoriesScreen throw navigation line 10

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0; 
    });

    useLayoutEffect(() => {    // second approch to show title useLayoutEffect here use to display smooth transition on title when I click on item
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    return <MealsList items={displayedMeals}/>
};

export default MealsOverviewScreen;

