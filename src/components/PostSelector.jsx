import { fetchPosts } from "../api/fetchPosts";

const response = fetchPosts("https://jsonplaceholder.typicode.com/posts?_limit=5")

// eslint-disable-next-line react/prop-types
function PostSelector({ onSelectedPost }) {
    const posts = response.read()
    return (
        <div>
            <select onChange={onSelectedPost} className="border-indigo-300 border p-2 rounded-md" name="" id="">
                <option value="">Select Post</option>
                {
                    posts ? posts.map((item) => (
                        <option key={item.id} value={item.id}>{item.title}</option>
                    )) : "No Posts "
                }
            </select>
        </div>
    )
}

export default PostSelector
