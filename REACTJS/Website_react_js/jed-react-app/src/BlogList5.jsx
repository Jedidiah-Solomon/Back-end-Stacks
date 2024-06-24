const BlogList5 = ({ blogs, mainTitle }) => {
    // const blogs = props.blogs;
    // const mainTitle = props.mainTitle;
    // console.log(blogs, mainTitle);

    return (
        <div className="blog-list">
            <h2>{mainTitle}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList5;
