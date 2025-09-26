import '../CSS/blog.css';
import blog_img from '../assets/plane_blog.jpeg'
// import BlogPostCreator from './CreateBlog';
const Blog = () => {
  return (
    <>
    <section id="blog" className="mt-2 mt-lg-5">
      <div className="container">
        <h2 className="fw-bold">LATEST BLOGS</h2>
        <h1 className=" text-center">INSIDE THE NEWS</h1>
        <p className="text-center text-danger fs-5 mb-5">Explore The Latest Blogs</p>
      </div>
        <div className="blog_hero">
            <div className="container">
           
             
                <div className="blog_template_container container">
                  <img src={blog_img} className='d-none d-lg-block' alt="" />
                  <img src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="mob_blog_image img-fluid" />
                </div>
                 {/* CREATE BLOG */}
                {/* <div className="row row-cols-1">
                <BlogPostCreator/>
                </div> */}
                <div className="row row-cols-1 row-cols-lg-2 mb-5" >
                {/* BLOGS WILL BE POSTED BY ADMIN */}
                <div className="col mt-5">
                  <p>February 28, Year 2025, By ADMIN</p>
                  <h4>Blog Description : </h4>
                </div>
                <div className="col mt-5">
                <p>February 28, Year 2025, By ADMIN</p>
                <h4>Blog Description : </h4>
                </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog