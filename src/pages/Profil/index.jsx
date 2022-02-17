
import React,{ useState, useEffect} from 'react'
import Cookies from 'js-cookie';


const Profile = () => {
  const [currentUser, setCurrentUser] = useState('');

  const myProfileDisplay = () => {
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((jwt) => {
        console.log(jwt);
        setCurrentUser(jwt);
      });
  };

  useEffect(() => {
    myProfileDisplay();
  }, []);
  console.log(currentUser.id) 
  return (
    <div>
      {' '}
      {!currentUser && 'vous $etes pas enregistrer'}
      {' '}
      {"le nom user est "+currentUser.username+" " ||'test'}
      {"sont email est  "+currentUser.email ||'test'}
      {' '}
    </div>
  );
};

export default Profile;