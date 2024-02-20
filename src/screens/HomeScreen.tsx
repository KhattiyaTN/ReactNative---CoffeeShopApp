import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useStore } from '../store/store';

const HomeScreen = () => {
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
    const [categories, setCategories] = useState([undefined]);
    const [searchText, setSearchText] = useState(undefined);
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0]
    });
    const [sortedCaffee, setSortedCaffee] = useState(undefined)

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen