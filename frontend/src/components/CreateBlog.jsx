import { useState } from "react";

export default function BlogPostCreator() {
  const [blog, setBlog] = useState({
    image: "",
    title: "",
    description: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog({ ...blog, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", blog);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">Create a Blog Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              {blog.image && (
                <div className="text-center mb-3">
                  <img
                    src={blog.image}
                    alt="Uploaded"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Blog Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={blog.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Blog Content</label>
                <textarea
                  className="form-control"
                  name="content"
                  rows="5"
                  value={blog.content}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit Blog</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
