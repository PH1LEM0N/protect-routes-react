
import { createContext, useState } from 'react';

export const STORAGE_USER_ITEM_KEY = "authenticated";

//create a context, with createContext api
export const userDetailsContext = createContext();

const UserDetailsProvider = (props) => {
    // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState(localStorage.getItem(STORAGE_USER_ITEM_KEY) || false);

    return (
        // this is the provider providing state
        <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;