import React from "react";
import Logo from "../../assets/food/logo-2.png";
import { FaRegUserCircle } from "react-icons/fa";
import { animate, motion, transform } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";


const navMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact US",
    path: "/contact",
    delay: 0.5,
  },
];

const slideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <nav >
      <div className="container flex justify-between items-center font-league">
        {/* logo section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt=""
          className="w-28 mt-2"
        />

        {/* menu section */}

        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navMenu.map((menu) => {
              return (
                <motion.li
                  variants={slideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                  data-delay={menu.delay}
                >
                  <a
                    href={menu.path}
                    className="inline-block px-2 py-2 text-2xl"
                  >
                    {menu.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* button section */}
        <div className=" flex justify-end gap-10 mt-2">
        {isAuthenticated && (
          <motion.div
            variants={slideDown(0.1)}
            initial="initial"
            animate="animate"
            className=""
          >
            <FaRegUserCircle className="h-[30px] w-[30px] rounded-full text-white bg-dark"/>
            <p>{user.name}</p>
          </motion.div>
        )}
        <motion.div variants={slideDown(1)} initial="initial" animate="animate">
          {isAuthenticated ? (
            <motion.button
              variants={slideDown(0.5)}
              initial="initial"
              animate="animate"
              className="  bg-darkGreen text-white hover:scale-110 font-normal text-1xl py-2 px-4 rounded-full duration-200 mt-1"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log Out
            </motion.button>
          ) : (
            <motion.button
              variants={slideDown(0.5)}
              initial="initial"
              animate="animate"
              className=" bg-darkGreen text-white hover:scale-110 font-normal text-1xl py-2 px-4 rounded-full duration-200 mt-1"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </motion.button>
          )}
        </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
