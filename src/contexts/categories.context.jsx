import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    }, []);
    // used this just as a one off to get data in firedb 
    //useEffect(() => {
    //    addCollectionAndDocuments('categories', SHOP_DATA)
    //}, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}   