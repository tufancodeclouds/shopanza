import { blogs } from "../../assets/images/data"

const Blog = () => {
  return (
    <div className="max-padd-container py-16">
      <div>
        { blogs.slice(0, 4)}
      </div>
    </div>
  )
}

export default Blog