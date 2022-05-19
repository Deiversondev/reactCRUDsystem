import {useFormik} from 'formik'
import styles from './create.module.css'
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
        <div className={styles.form_container}>
           <form onSubmit={formik.handleSubmit}>
               <div className={styles.input_container}>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' onChange={formik.handleChange} value={formik.values.name} />
               </div>

               <div className={styles.input_container}>
                <label htmlFor="birthday">Data de Nascimento</label>
                <input type="text" id='birthday' onChange={formik.handleChange} value={formik.values.birthday}/>
               </div>

               <div className={styles.input_container}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={formik.handleChange} value={formik.values.email}/>
               </div>

               <div className={styles.input_container}>
                <label htmlFor="phoneNumber">Telefone</label>
                <input type="text" id='phoneNumber' onChange={formik.handleChange} value={formik.values.phoneNumber} />
               </div>

               <div className={styles.input_container}>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id='cpf' onChange={formik.handleChange} value={formik.values.cpf} />
               </div>


               <button type='submit'>Submit</button>
           </form>
        </div> 
    )
}

export default Create;