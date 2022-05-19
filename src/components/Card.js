import {useContext, useEffect} from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router'

function Card({User}) {
    const navigate = useNavigate()
    const {user,setUser} = useContext(UserContext);

    useEffect(() => {
      return () => {
          
      }
    }, [])

    function edit (user) {
      setUser(user)
       navigate('/edit')
    }
    

  return (
    <div>
        <h1>{User.name}</h1>
        <h2>{User.email}</h2>
        <button onClick={() => console.log(user)}>Print</button>
        <button onClick={() =>edit(User)}>Edit</button>
    </div>
  )
}

export default Card