import {useFormik} from 'formik'
import { useState,useEffect } from 'react';
import { db } from '../firebase.config';
import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';


function Create(){

const userCollectionRef = collection(db,'users')
const createUser = async (values) =>{
    await addDoc(userCollectionRef,values)
}

    const formik = useFormik({
        initialValues:{
            name:'',
            birthday:'',
            email:'',
            phoneNumber:'',
            cpf:''
        }, onSubmit:async  values => {
            await createUser(values)
            console.log(values)
        }
    })
    return(
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
        </div> 
    )
}

export default Create;