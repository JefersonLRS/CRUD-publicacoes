import { Post } from "@/types/Post";

type AddAction = {
    type: 'add';
    payload: {
        title: string,
        body: string
    }
}
type DeleteAction = {
    type: 'delete';
    payload: {id: number}
}
type EditAction = {
    type: 'edit';
    payload: {
        newTitle: string,
        newBody: string,
        id: number
    }
}


export type PostActions = AddAction | DeleteAction | EditAction;

export const postReducer = (posts: Post[], action: PostActions): Post[] => {

    switch (action.type) {

        case 'add':
            return [...posts, {
                id: posts.length,
                title: action.payload.title,
                body: action.payload.body
            }]
        case 'delete':
            return posts.filter(item => item.id !== action.payload.id)
        case 'edit':
            return posts.map(t => {
                if(t.id == action.payload.id){
                    t.title = action.payload.newTitle
                    t.body = action.payload.newBody
                }
                return t;
            })
        default:
            return posts;
    }
}