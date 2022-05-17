import {useContext, useEffect} from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router'

function Card({User}) {
    const navigate = useNavigate()
    const {user,setUser} = useContext(UserContext);

    useEffect(() => {
      return () => {
          setUser(User)
      }
    }, [])

    function edit () {
       navigate('/edit')
    }
    

  return (
    <div>
        <h1>{User.name}</h1>
        <button onClick={() => console.log(user)}>Print</button>
        <button onClick={edit}>Edit</button>
    </div>
  )
}

export default Card