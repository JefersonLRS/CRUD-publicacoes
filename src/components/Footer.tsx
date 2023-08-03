import { PostContext } from "@/app/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {
    
    const PostCtx = useContext(PostContext);

    return (
        <footer className="text-center my-3">
            Total de publicações: {PostCtx?.posts.length}
        </footer>
    )
}