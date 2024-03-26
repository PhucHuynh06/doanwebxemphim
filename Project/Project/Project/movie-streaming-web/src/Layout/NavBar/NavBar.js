import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBookmark, FaSearch } from 'react-icons/fa';
import { CgUser } from 'react-icons/cg'; 
import { useDispatch, useSelector } from "react-redux";
import { HiMoon, HiSun } from "react-icons/hi";
import { setDarkMode, setLanguage } from "../../themeActions";
import en from "./en.js"
import vn from "./vn.js"
import { BiSearchAlt } from 'react-icons/bi';

function NavBar() {
//     const dispatch = useDispatch();
//     const [search, setSearch ] = useState("");
//     const  navigate = useNavigate()
//     const { darkMode, language } = useSelector((state) => state.theme);
//     const [currentLanguage, setCurrentLanguage] = useState(language);
//     const handleDarkModeToggle = () => {
//         dispatch(setDarkMode(!darkMode));
//     };
//     const handleLanguageChange = (newLanguage) => {
//         dispatch(setLanguage(newLanguage));
//         setCurrentLanguage(newLanguage);
//     };
    
//     useEffect(() => {
//       if (darkMode) {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     }, [darkMode]);
//     const translations = currentLanguage === "english" ? en : vn;
//     const { userInfo } = useSelector((state) => state.userLogin);
//     const {likedMovies} = useSelector((state) => state.userGetFavoriteMovies);
//     const hover = 'hover:text-subMain transitions text-white';
//     const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (search.trim()) {
//             navigate(`/movies/${search}`);
//             setSearch(search);
//         } else {
//             navigate(`movies`);
//         }
//     };

//   return (
//     <>
//         <div className='bg-main shadow-md sticky top-0 z-20'>
//             <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
//                 {/* Logo */}
//                 <div className='col-span-1 lg:block hidden'>
//                     <Link to='/'>
//                         <img
//                             src='/logo.png'
//                             alt='logo'
//                             className='w-full h-12 object-contain'/>
//                     </Link>
//                 </div>
//                 {/* Search form */}
//                 <div className='col-span-3'>
//                     <form onSubmit={handleSearch} className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
//                         <button
//                             type='submit'
//                             className='bg-subMain w-12 flex-colo h-12 rounded text-white'>
//                             <FaSearch/>
//                         </button>
//                         <input
//                             type='search'
//                             value={search}
//                             onChange={(e)=> setSearch(e.target.value)}
//                             placeholder='Search'
//                             className='font-medium placeholder:text-border text-xs w-11/12 h-12 bg-transparent border-none px-2 text-black placeholder:small'
//                         />                        
//                     </form>
//                 </div>
//                 {/* Menus */}   
//                 <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
//                     <NavLink to='/movies' className={hover}>
//                         {translations.movies}
//                     </NavLink>
//                     <NavLink to='/About' className={hover}>
//                         {translations.about}
//                     </NavLink>
//                     <NavLink to='/contact' className={hover}>
//                         {translations.contact}
//                     </NavLink>
//                     <NavLink to={ userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"} className={hover}>
//                         {
//                             userInfo ? (
//                                 <img src={userInfo?.image ? userInfo?.image : "/images/user.png"} alt={userInfo?.fullName}className="w-8 h-8 rounded-full border object-cover border-subMain" />
//                             )
//                             :
//                             <CgUser className='w-8 h-8'/>
//                         }                        
//                     </NavLink>
//                     <NavLink to='/favoritemovies' className={`${Hover} relative`}>
//                         <FaBookmark className='w-6 h-6'></FaBookmark>
//                         <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1'>
//                             {likedMovies?.length || 0}
//                         </div>
//                     </NavLink>
//                     <button onClick={handleDarkModeToggle} className="ml-4 text-3xl">
//                         {darkMode ? <HiMoon /> : <HiSun />}
//                     </button>
//                     <div className="flex items-center ml-4">
//                         <button
//                             onClick={() => handleLanguageChange("english")}
//                             className={`mr-2 text-xs ${
//                             currentLanguage === "english" ? "font-bold" : ""
//                             }`}
//                         >
//                             {translations.english}
//                         </button>
//                         <button
//                             onClick={() => handleLanguageChange("vietnamese")}
//                             className={`text-xs ${
//                             currentLanguage === "vietnamese" ? "font-bold" : ""
//                             }`}
//                         >
//                             {translations.vietnamese}
//                         </button>
//                     </div>
//                 </div>      
//             </div>
//         </div>
//     </>
//   )
const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { darkMode, language } = useSelector((state) => state.theme);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleDarkModeToggle = () => {
    dispatch(setDarkMode(!darkMode));
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const hover = "hover:text-white transitions text-black";
  const hover1 = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  const translations = currentLanguage === "english" ? en : vn;

  return (
    <>
      <div className={`bg-main shadow-md sticky top-0 z-20 ${darkMode ? "dark" : ""}`}>
        <div className="container mx-auto py-6 px-4 lg:grid gap-10 grid-cols-7 justify-between">
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <input
                type="text"
                placeholder={translations.searchPlaceholder}
                className="font-bold placeholder:text-border text-sm w-11/12 h-14 bg-transparent border-none px-4 text-black"
              />
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-14 rounded text-white"
              >
                <BiSearchAlt />
              </button>
            </form>
          </div>
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="/logo.png"
                alt="logo"
                className="w-full h-14 object-contain"
              />
            </Link>
          </div>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink
              to={
                userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"
              }
              className={`${hover1} text-subMain`}
            >
              {userInfo ? (
                <img
                  src={userInfo?.image ? userInfo?.image : "/images/user.jpg"}
                  alt={userInfo?.fullName}
                  className="w-8 h-8 rounded-full border object-cover border-subMain"
                />
              ) : (
                <CgUser className="w-8 h-8" />
              )}
            </NavLink>
            <NavLink to="/favoritemovies" className={`${Hover} relative`}>
              <FaBookmark className="w-6 h-6"></FaBookmark>
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                0
              </div>
            </NavLink>
            <button onClick={handleDarkModeToggle} className="ml-4 text-3xl">
              {darkMode ? <HiMoon /> : <HiSun />}
            </button>
            <div className="flex items-center ml-4">
              <button
                onClick={() => handleLanguageChange("english")}
                className={`mr-2 text-xs ${
                  currentLanguage === "english" ? "font-bold" : ""
                }`}
              >
                {translations.english}
              </button>
              <button
                onClick={() => handleLanguageChange("vietnamese")}
                className={`text-xs ${
                  currentLanguage === "vietnamese" ? "font-bold" : ""
                }`}
              >
                {translations.vietnamese}
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 flex font-bold text-sm xl:gap-14 2xl:gap-20 justify-left lg:flex xl:justify-left bg-subMain h-9 items-center">
          <NavLink to="/movies" className={hover}>
            {translations.movies}
          </NavLink>
          <NavLink to="/About" className={hover}>
            {translations.about}
          </NavLink>
          <NavLink to="/contact" className={hover}>
            {translations.contact}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar