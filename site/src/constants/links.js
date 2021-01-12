// import React from "react"
// import { Link } from "gatsby"
// // import navStyles from "../components/Navbar/_navbar.scss"

// // Array of the nav links
// const data = [
//    {
//       id: 1,
//       text: "about",
//       url: "/about/",
//    },
//    {
//       id: 2,
//       text: "services",
//       url: "/services/",
//    },
//    {
//       id: 3,
//       text: "projects",
//       url: "/projects/",
//    },
//    {
//       id: 4,
//       text: "blog",
//       url: "/blog/",
//    },
//    {
//       id: 5,
//       text: "contact",
//       url: "/contact/",
//    },
// ]

// // iterate over the list and spits out the nav links into seperate arrays
// const tempLinks = data.map(link => {
//    return (
//       <li key={link.id}>
//          <Link to={link.url}>{link.text}</Link>
//       </li>
//    )
// })
// // I KNOW WE CAN COMBINE IT !!!!!

// export default ({ menu }) => {
//    return (
//       // pgae-links is the generic styles for the links
//       <ul className={menu ? "menu active" : menu}>{tempLinks}</ul>
//    )
// }
