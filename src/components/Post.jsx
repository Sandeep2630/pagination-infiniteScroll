
export default function Post({post}) {
  return (
    <div className="bg-slate-500 mb-3">
    <h1>{post.title}</h1>
    <h2>{post.id}</h2>
    <h3>{post.userId}</h3>
    </div>

  )
}
