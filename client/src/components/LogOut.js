function LogOut() {
    //const userId = localStorage.getItem('user_id');
  
    // function handleLogOut() {
    //   fetch(`/logout`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     }
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       localStorage.removeItem('token');
    //       //localStorage.removeItem('user_id');
    //       //window.location.href = '/login';
    //     } else {
    //       throw new Error('Logout failed.');
    //     }
    //   })
    //   .catch(error => {
    //     console.error(error);

    }
    
  
    return (
      <div>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    );
  }
  
  export default LogOut;
  