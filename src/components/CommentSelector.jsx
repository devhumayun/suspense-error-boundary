
import { fetchComments } from "../api/fetchComments"

const response = fetchComments(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)


function CommentSelector({ postId }) {


    const comment = response.read()

    return (
        <div>
            <h1 className='text-xl font-semibold'> Comments </h1>
            <ul>
                {
                    comment?.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CommentSelector
