
import { createContext, useEffect, useState } from 'react';
import useTabActive from './use-tab-active';

export const STORAGE_USER_ITEM_KEY = "authenticated";

//create a context, with createContext api
export const userDetailsContext = createContext();

const isAuthenticatedStorageItemSet = () => {
    let val = localStorage.getItem(STORAGE_USER_ITEM_KEY);
    if (val === null) {
        return false;
    }
    return val === 'true';
}

const UserDetailsProvider = (props) => {
    // this state will be shared with all components 
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedStorageItemSet());
    const isTabActive = useTabActive();
    let logoutTimer;

    useEffect(() => {
        if (isAuthenticatedStorageItemSet()) {
            setIsAuthenticated(true);
            if (!isTabActive) {
                logoutTimer = setTimeout(() => {
                    localStorage.removeItem(STORAGE_USER_ITEM_KEY);
                    setIsAuthenticated(false);
                    clearTimeout(logoutTimer);
                }, 1000 * 20);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [isTabActive]);

    return (
        // this is the provider providing state
        <userDetailsContext.Provider value={{ auth: [isAuthenticated, setIsAuthenticated] }}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;