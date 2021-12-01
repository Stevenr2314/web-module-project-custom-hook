import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(key, initialValue)
    return [isDarkMode, setIsDarkMode];
};