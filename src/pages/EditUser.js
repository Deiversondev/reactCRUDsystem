import{useContext}from 'react'
import {useFormik} from 'formik'
import { UserContext } from '../context/userContext';
import { db } from '../firebase.config';
import {updateDoc,doc} from 'firebase/firestore'
import InputMask from 'react-input-mask'

function EditUser() {
  // const userCollectionRef = collection(db,'users')
  const updateUser = async (id,values) =>{
    const userDoc = doc(db,'users',id)
    await updateDoc(userDoc,values)
  }


  const {user,setUser} = useContext(UserContext);

  const formik = useFormik({
    initialValues:{
        name:user.name,
        birthday:user.birthday,
        email:user.email,
        phoneNumber:user.phoneNumber,
        cpf:user.cpf
    }, onSubmit:async  values => {
        updateUser(user.id,values)
        console.log(values)
    }
})
  return (
    <div>
        
    
           <form onSubmit={formik.handleSubmit}>
               <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' onChange={formik.handleChange} value={formik.values.name} />
               </div>

               <div>
                <label htmlFor="birthday">Data de Nascimento</label>
                
               <InputMask mask='**/**/****' type="text" id='birthday' onChange={formik.handleChange} value={formik.values.birthday}/>
               </div>

               <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={formik.handleChange} value={formik.values.email}/>
               </div>

               <div>
                <label htmlFor="phoneNumber">Telefone</label>
               
                <InputMask mask='(**) *****-****' type="text" id='phoneNumber' onChange={formik.handleChange} value={formik.values.phoneNumber}/>
               </div>

               <div>
                <label htmlFor="cpf">CPF</label>
                
                <InputMask mask='***.***.***-**' type="text" id='cpf' onChange={formik.handleChange} value={formik.values.cpf}/>
               </div>


               <button type='submit'>Submit</button>
           </form>
{/* <button onClick={() =>  console.log(user)}>U</button> */}
    </div>
  )
}

export default EditUser