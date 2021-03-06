import { useState,useEffect, useContext } from 'react';
import { db } from '../firebase.config';
import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
import { UserContext } from '../context/userContext';
import EditUser from './EditUser';
import Card from '../components/Card';

function Users(){

    const {user,setUser} = useContext(UserContext);

    const userCollectionRef = collection(db,'users')
    const [users,setUsers] = useState([])
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef)
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
       }
   
   

    useEffect(() => {
      getUsers()
    }, [])
    
    return(
        <div>
            { users && users.map(user => (
                <Card getUsers={getUsers} User={user}/>
            )) }
        </div>
    )
}

export default Users;