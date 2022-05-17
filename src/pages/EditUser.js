import{useContext}from 'react'
import {useFormik} from 'formik'
import { UserContext } from '../context/userContext';

function EditUser() {


  const {user,setUser} = useContext(UserContext);

  const formik = useFormik({
    initialValues:{
        name:user.name,
        birthday:user.birthday,
        email:user.email,
        phoneNumber:user.phoneNumber,
        cpf:user.cpf
    }, onSubmit:async  values => {
        
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
                <input type="text" id='birthday' onChange={formik.handleChange} value={formik.values.birthday}/>
               </div>

               <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={formik.handleChange} value={formik.values.email}/>
               </div>

               <div>
                <label htmlFor="phoneNumber">Telefone</label>
                <input type="text" id='phoneNumber' onChange={formik.handleChange} value={formik.values.phoneNumber} />
               </div>

               <div>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id='cpf' onChange={formik.handleChange} value={formik.values.cpf} />
               </div>


               <button type='submit'>Submit</button>
           </form>
<button onClick={() =>  console.log(user)}>U</button>
    </div>
  )
}

export default EditUser