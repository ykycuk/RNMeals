import { FlatList  } from 'react-native';

import { CATEGORIES } from '../data/dummy-data' 
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({navigation}) { //navigation provide to components, which I use as screens
    function renderCategoryItem(itemData) {
        function pressHandler() {
           navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id  // know each item in categorygridtitle has it's unique key
           }); 
        }
    
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }


    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;