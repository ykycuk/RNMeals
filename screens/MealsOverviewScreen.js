import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';
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

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };
        return (
            <MealItem {...mealItemProps}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem}
            />
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})