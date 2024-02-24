import { Suspense, useState } from "react";
import CommentSelector from "./components/CommentSelector";
import PostSelector from "./components/PostSelector";

export default function App() {
  const [selectedPostId, setSelectedPost] = useState(null)

  const handleSelectedPost = (e) => {
    setSelectedPost(e.target.value)
  }
  console.log(selectedPostId);
  return (
    <>
      <div className="p-[100px]">
        <h2 className="text-2xl font-bold mb-4">Select Posts</h2>
        <Suspense fallback={<h1> Loading... </h1>}>
          <PostSelector onSelectedPost={handleSelectedPost} />
        </Suspense>
        {selectedPostId && <Suspense fallback={<h1> Loading comments... </h1>}> <CommentSelector postId={selectedPostId} /> </Suspense>}
      </div>
    </>
  )
}