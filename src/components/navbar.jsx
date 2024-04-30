import  { useEffect, useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";
import examData from "../../public/data.json"; // Adjust path as needed
import categoryData from "../../public/categories.json";
import logo from "../../public/images/site-logo.png"
import { navigate } from 'astro/virtual-modules/transitions-router.js';
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {

    const [drop,setDrop] = useState(false);
    const toggleDrop = ()=> {
      console.log(drop);
      setDrop(!drop)
    }

    
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Read initial dark mode state from local storage (if available)
      const storedDarkMode = localStorage.getItem('isDarkMode');
      setIsDarkMode(storedDarkMode === 'true');
    
      // Apply the stored dark mode preference immediately
      if (storedDarkMode === 'true') {
        document.documentElement.classList.add('dark');
      }
    }, []);
    
    const toggleDarkMode = () => {
      const storedDarkMode = localStorage.getItem('isDarkMode');
      if (storedDarkMode === 'false') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
      // Update local storage with the new state
      localStorage.setItem('isDarkMode', isDarkMode.toString());
    };




const catState = categoryData.examCategories;
const examState = examData.exams;

  const [category, setCategory] = useState("All");
  const handleCategory = (id,)=>{
      setCategory(id);
  }
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = ()=>{
      setCollapse(!collapse)
  }

 const handleClick = (id,slug)=>{
    // setExamId(id);
    navigate(`${slug}`)
    // window.location.reload()
 }



    const items = [
        
        // {key:"/exam",name:"Test Series"},
        // {key:"/quiz",name:"Quiz"},
        {key:"/About",name:"About"},
        {key:"/Contact",name:"Contact Us"},
        // {key:"/prev",name:"Prev Papers"},
    ]

   
    // const [loggedIn, setLoggedIn] = useState(false);
    //     const logoutUser=(()=>{
    //         if(user){
    //             localStorage.removeItem('token');
    //             localStorage.removeItem('user');
    //             setLoggedIn(false);
    //             window.location.reload()
    //         }
    //     })

    // useEffect(()=>{
    //     if(user){
    //         setLoggedIn(true)
    //     }else{
    //         setLoggedIn(false)
    //     }
    // },[user,loggedIn])

  return (
    

    <nav className="sticky top-0 z-10 w-full border dark:border-gray-700 bg-white border-gray-200 dark:bg-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/site-logo.png" className="h-14 w-14" alt=" Logo" />
            <span className="self-center text-2xl flex-wrap font-semibold whitespace-nowrap dark:text-white">Sarkari Paper</span>
        </a>
        <button onClick={toggleCollapse} data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full" className={`${collapse ? "hidden": "block"} items-center justify-between font-medium w-full gap-3 md:flex md:w-auto md:order-1`}>
            
            
            <ul className="flex flex-col p-4 md:p-0 mt-4 border text-black border-gray-100 rounded-lg bg-gray-50 dark:bg-black dark:text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                
            
                
                <li>
                    <button onMouseOver={toggleDrop}  id="mega-menu-full-dropdown-button" 
                    data-collapse-toggle="mega-menu-full-dropdown" 
                    className="flex items-center justify-between lg:text-lg w-full py-2 px-3 text-gray-900 dark:text-white rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 ">Exams 
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                </li>

               
                

                        
                
                {items.map((item,i)=>{
                    return (
                        <li key={i}>
                            <a  href={item.key} onClick={toggleDrop} className="block py-2 px-3 lg:text-lg text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{item.name ? item.name : item.icon}</a>
                        </li>
                    )
                })}

                
                
            </ul>


            
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full mx-12 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    {isDarkMode ? <MdSunny className="h-6 w-6 text-white" /> : <IoMdMoon className="h-6 w-6 text-gray-800" />}
                    </button>
                
            

                {/* <div className='flex lg:mt-0 mt-4 justify-between'>
                    <div className='px-5 flex gap-2 items-center'>  
                        <div className='border-black border h-8 flex'>
                            <input className='outline-none px-1' type="text" id='search' placeholder='Enter the Search' />
                            <button className='mx-2'><CiSearch className='text-lg' /></button>
                        </div>
                    </div>

                    
                    <a to={'/login'} className='bg-yellow-400 py-2 text-black  flex items-center px-5 rounded-lg'>Register</a>
                
                        
                        
                </div> */}
            
        </div>
    </div>
    {drop && (
        <div onMouseLeave={toggleDrop} id="mega-menu-full-dropdown"  className="mt-1  border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white lg:grid-cols-7 md:grid-cols-5 grid-cols-3 md:px-6">

        <div className="flex flex-col gap-4 col-span-1 lg:px-3 md:px-2 border-gray-200 rounded items-start justify-start py-2 md:py-4">
            {catState?.map((item, i) => {
                    
                    return  <div key={i} className='text-gray-600 hover:bg-gray-300 rounded w-full bg-white dark:bg-black text-base transform transition-transform duration-300 hover:scale-105 font-medium py-0.5 px-1 text-center  dark:border-blue-500 dark:text-gray-200 dark:hover:text-white dark:hover:bg-blue-500  dark:focus:ring-blue-800'>
                        <button
                        type="button"
                        className="p-1 text-sm lg:text-md lg:p-2"
                        onClick={()=>{handleCategory(item?._id)}}
                        >
                        {item?.name}
                    </button>
                </div>
                
            })}
        </div>


        <div style={{scrollbarWidth:"none"}} className=" grid px-4 lg:col-span-6 md:col-span-4  col-span-2 lg:grid-cols-7 grid-cols-1 max-h-96 overflow-scroll hide-scrollbar py-2 md:grid-cols-5 gap-4">
        {examState?.filter((exam) => exam?.category?._id === category || category === "All")
              .map((exam) => {
                    return (
                        <button onClick={()=>{handleClick(exam?._id,exam?.metadata?.slug);toggleDrop()}}  key={exam?._id} style={{height:"fit-content", scrollbarWidth:0}} className='border exam-card  lg:px-2 px-4 py-1 lg:py-4 bg-white dark:bg-black rounded flex flex-col gap-5 items-center justify-center  border-gray-300'>
                       {<div className='exam-logo'>
                        <img src={exam?.logo ? exam?.logo : "https://res.cloudinary.com/dxbqahnbr/image/upload/v1711026595/hvou8ohraxg1oa1nlyjz.png"} className='w-12 h-12' alt="" />
                      </div>}
                      <div className='exam-name flex items-center justify-center'>
                        <h5>{exam?.metadata?.shortForm}</h5>
                      </div>
                    </button>
                   );
              })}
        </div>
        </div>
    </div>
    )}
</nav>

  )
}

export default Navbar
