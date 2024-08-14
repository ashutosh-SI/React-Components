import { createContext } from "react";
export const ColorContext = createContext('violet');
export const NameContext = createContext();
export const BooksContext = createContext([null,()=>{}])

