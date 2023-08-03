import { PostContext } from "@/app/contexts/PostContext"
import { useContext } from "react"
import { BsTrash3Fill, BsPencilSquare } from 'react-icons/bs';


export const PostList = () => {

    const postCtx = useContext(PostContext)

    const HandleEditButton = (id: number) => {
        const item = postCtx?.posts.find(it => it.id === id);
        if (!item) return false;

        const newTitle = window.prompt('Editar título', item.title);
        const newBody = window.prompt('Editar texto', item.body);
        if (!newTitle || newTitle.trim() === '') return false;
        if (!newBody || newBody.trim() === '') return false;

        postCtx?.dispatch ({
            type: 'edit',
            payload: { id, newTitle, newBody }
        })
    }

    const HandleDeleteButton = (id:number) => {
        postCtx?.dispatch ({
            type: 'delete',
            payload: {id}
        })
    }

    return (
        <div>
            {postCtx?.posts.map(item => (
                <div
                    key={item.id}
                    className="flex gap-5 items-center p-3 border-b border-gray-500 mx-10">
                    <div className="flex-1">
                        <div className="text-2xl font-bold mb-2">{item.title}</div>
                        <div className="text-sm break-all">{item.body}</div>
                    </div>
                    <div>
                        <button onClick={() => HandleEditButton(item.id)}
                        className="bg-blue-900 p-3 rounded-md flex items-center gap-2" 
                        >Editar <BsPencilSquare className="bg-transparent"/>
                        </button>
                    </div>
                    <div>
                        <button 
                            onClick={() => HandleDeleteButton(item.id)}
                            className="bg-red-900 p-3 rounded-md flex items-center gap-2"    
                            >Deletar <BsTrash3Fill className="bg-transparent"/>
                        </button>
                    </div>
                </div>
                
            ))}
        </div>
    )
}