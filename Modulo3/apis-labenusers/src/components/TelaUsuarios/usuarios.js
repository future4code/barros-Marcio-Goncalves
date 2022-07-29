import React from "react";
import {CampoInputs, UsuariosContainer } from "../../style";
import axios from "axios";
import { useEffect, useState } from "react";

function Usuarios (props){

    useEffect(()=>{
        getAllUsers();
      },[])
    
      const [InputName, SetInputName]=useState("")
      const [InputEmail, SetInputEmail]=useState("")
    //   const [Mostrar, SetMostrar]=useState([])

    const MyHeaders = {
        headers:{
          Authorization: "marcio-goncalves-barros"
        }
      }
      const body = {
        name:InputName,
        email:InputEmail
      }
    
      const getAllUsers = ()=>{
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",MyHeaders)
        .then((response)=>{
          props.SetMostrar(response.data)
        })
        .catch((er)=>{
          console.log(er.response.data.message);
        })
      }
      const createUser = ()=>{
        axios
          .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, MyHeaders)
          .then((response)=>{
            getAllUsers()
          })
          .catch((er)=>{
            alert(er.response.data.message)
          })
          SetInputEmail("")
          SetInputName("")
        }
    
        const deleteUser = (id)=>{
          axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, MyHeaders)
            .then((response)=>{
              props.SetMostrar(props.Mostrar.filter(nome => nome.id !== id))
            })
            .catch((er)=>{
              console.log(er.response);
            })
        }

        function MostrarUsuarios(){
            props.SetLogado(true)
        }

    return(
        <CampoInputs>
      <input
        placeholder="Nome"
        type="text"
        value={InputName}
        onChange={(ev)=>{SetInputName(ev.target.value)}}
      />
      <input
        placeholder="Email"
        type="text"
        value={InputEmail}
        onChange={(ev)=>{SetInputEmail(ev.target.value)}}
      />
      <button onClick={()=>{createUser()}}>Cadastrar Usuario</button>
      <button onClick={MostrarUsuarios}>Mostrar Usuarios</button>
    </CampoInputs>
    )
}

export default Usuarios
