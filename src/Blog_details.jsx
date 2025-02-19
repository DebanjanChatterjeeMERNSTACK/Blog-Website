
import Mail from "./mail/Mail";
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Blog_hero from "./blog_hero/Blog_hero";
import Blog_contant from "./blog_contant/Blog_contant";
const Blog_details = () => {
  return (
    <>
    <Header />
     <Blog_hero/>
     <Blog_contant/>
      <Mail />
      <Footer/>
    </>
  );
};
export default Blog_details;
