import { PostContext } from "@/app/contexts/PostContext";
import { useContext, useState } from "react"

export const Header = () => {

    const postCtx = useContext(PostContext)

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const HandlePublishButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.dispatch({
                type: 'add',
                payload: {title: titleInput, body: bodyInput}
            })
            setTitleInput('')
            setBodyInput('')
        }
    }

    return (
        <header>
            <h1 className="text-5xl font-bold text-center my-3 text-blue-500">Fatter</h1>
            <div className="flex flex-col border border-dotted border-gray-400 p-3 m-4 gap-3 max-w-2xl mx-auto">
                <input 
                    type="text"
                    placeholder="Digite um título"
                    className="border border-gray-300 p-2 text-black bg-white outline-none text-xl"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <textarea
                    placeholder="No que está pensando"
                    className="h-24 border border-gray-300 p-2 text-black outline-none bg-white"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)}
                ></textarea>
                <button onClick={HandlePublishButton} className="bg-blue-500 p-3 rounded-md">Publicar</button>
            </div>
        </header>
    )
}