import {createContext, useContext, useState} from 'react'

 const SessionDataContext = createContext();

 export const useSessionDataContext = ()=> useContext(SessionDataContext)

 export default function SessionDataProvider({children}){
    const [currentItem, setCurrentItem] = useState({});
    
     return (
        <SessionDataContext.Provider value={{currentItem, setCurrentItem}}>
            {children}
        </SessionDataContext.Provider>
     );
 };