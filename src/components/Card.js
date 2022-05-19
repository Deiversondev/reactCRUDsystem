import {useContext, useEffect} from 'react'
import styles from './card.module.css'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router'
import { db } from '../firebase.config';
import {deleteDoc,doc} from 'firebase/firestore'

function Card({User,getUsers}) {
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

    async function deleteUser (id){
      const UserDoc = doc(db,'users',id)
      await deleteDoc(UserDoc)
      getUsers()
    }

    

  return (
    
      <div className={styles.main}>
        <h1>{User.name}</h1>
        <h2>{User.email}</h2>
        <button onClick={() =>edit(User)}>Edit</button>
        <button onClick={() => deleteUser(User.id)}>Delete</button>
   
    </div>
  )
}

export default Card;