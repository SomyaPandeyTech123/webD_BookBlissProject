// //  import React from 'react';
// //  import "./Sidebar.css"

// // import { Link } from 'react-router-dom';


// //  const Sidebar = () => {
// //      return (
// //          <div  className='open'>
// //        <button id="author"className='designs'>Serach by author</button>
// //        <button id="id"className='designs'><Link to="/Displaybooks">Serach by book_id</Link></button>
// //        <button id="title" className='designs'><Link to="/Deletebooks">Serach by title</Link></button>
// //      </div> 
// //      );
// //  };

// // export default Sidebar;
// import React, { useState } from 'react';
// import './Slidebar.css';
// // import  MenuIcon from '@mui/icons-material/Menu';
// import  CategoryOutlined from '@mui/icons-material';
// // import  CloseOutlinedIcon from '@mui/icons-material/Menu';
// import  LoginIcon from '@mui/icons-material';
// import  AssignmentIndIcon from '@mui/icons-material';
// import  LogoutIcon from '@mui/icons-material';
// import  MailOutlined from '@mui/icons-material';
// import { MenuIcon, CloseOutlinedIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const Slidebar = ({ open, handleToggleSlidebar }) => {
//   const [slidebarOpen, setSlidebarOpen] = useState(open);

//   const handleCloseSlidebar = () => {
//     setSlidebarOpen(false);
//     handleToggleSlidebar();
//   };

//   return (
//     <div className={`sidebar ${slidebarOpen ? 'open' : ''}`}>
//       <div className="side-menu-header">
//         <div className="side-menu-header-icon">
//           {slidebarOpen ? (
//             <CloseOutlinedIcon fontSize="large" onClick={handleCloseSlidebar} />
//           ) : (
//             <MenuIcon fontSize="large" onClick={handleCloseSlidebar} />
//           )}
//         </div>
//       </div>
//       <div className="side-menu-items">
//         <div className="side-menu-item">
//           {/* <MenuIcon /> */}
//           Hot Offers
//         </div>
//         <div className="side-menu-item">
//           <CategoryOutlined />
//           Products
//         </div>
//         <div className="side-menu-item">
//           <MailOutlined />
//           Contact
//         </div>
//         <div className="side-menu-item">
//           <LoginIcon />
//           <p>Login</p>
//         </div>
//         <div className="side-menu-item">
//           <AssignmentIndIcon />
//           <p>Sign Up</p>
//         </div>
//         <div className="side-menu-item">
//           <LogoutIcon />
//           <p>Logout</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slidebar;