import { useState } from "react";
import BlogList5 from "./BlogList5";

const Home5 = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "lorem ipsum...",
            author: "mario",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "lorem ipsum...",
            author: "yoshi",
            id: 2,
        },
        {
            title: "Web dev top tips",
            body: "lorem ipsum...",
            author: "mario",
            id: 3,
        },
    ]);

    return (
        <div className="home">
            <BlogList5 blogs={blogs} mainTitle="All Blogs" />
        </div>
    );
};

export default Home5;
