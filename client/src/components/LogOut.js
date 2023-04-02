// import React, { useEffect, useState } from 'react';

// function LogOut() {
    
//     const [user, setUser] = useState({});
//     const [loggedIn, setLoggedIn] = useState(false);

//     function setCurrentUser(currentUser) {
//         setUser(currentUser);
//         setLoggedIn(true);
//       }
    

//     useEffect(() => {
//         const token = localStorage.token;
//         if (typeof token !== 'undefined' && token.length > 1
//           && token !== 'undefined'
//         ) {
//           fetch('/auto_login', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ token }),
//           })
//             .then((r) => r.json())
//             .then((user) => setCurrentUser(user));
//         } else {
//           console.log('No token found, try logging in!');
//         }
//       }, []);


//     function logOut() {
//     setUser({});
//     setLoggedIn(false);
//     localStorage.token = '';
//   }
    
//     return(
//         <div>

//         </div>
//     )
// } export default LogOut;