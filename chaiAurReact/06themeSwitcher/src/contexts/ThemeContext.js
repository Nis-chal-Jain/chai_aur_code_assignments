import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    ThemeMode :'light',
    DarkTheme :()=>{},
    LightTheme: ()=>{},
})

export const ThemeProvider =ThemeContext.Provider;

export default function useTheme (){
    return useContext(ThemeContext)
}