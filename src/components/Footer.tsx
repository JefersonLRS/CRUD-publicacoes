import { PostContext } from "@/app/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {
    
    const PostCtx = useContext(PostContext);

    return (
        <footer className="text-center my-3 text-gray-600">
            Total de publicações: {PostCtx?.posts.length}
            <p className="text-gray-600">Desenvolvido por 
            <a 
                href="https://github.com/JefersonLRS"
                target="_blank"
                className="ml-3 text-white hover:text-gray-600 underline"
            >
                Jeferson Luís
            </a></p>
        </footer>
    )
}