import Category from "./category/Category"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Mail from "./mail/Mail"
import Recently from "./recently/Recently"
import Slider from "./slider/Slider"
import Suggested from "./suggested/Suggested"


const Home =()=>{
    return(
        <>
        <Header/>
        <Slider/>
        <Category/>
        <Suggested/>
        <Recently/>
        <Mail/>
        <Footer/>
        </>
    )
}
export default Home