import { Dispatch, ReactNode, createContext, useReducer, useEffect } from "react";
import { Post } from "@/types/Post"
import { postReducer, PostActions } from "@/reducers/postReducer";

const STORAGE_KEY = 'postContextContent'

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<PostContextType | null>(null)


export const PostProvider = ({children}: {children: ReactNode}) => {
    
    const [posts, dispatch] = useReducer(
        postReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);


    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}