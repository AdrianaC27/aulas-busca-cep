import {useState} from "react";

import axios from 'axios';
import './Consumindo.css'

function ConsumindoApi(){
    const[buscaCep, setBuscaCep] = useState();
    const api = `https://viacep.com.br/ws/${buscaCep}/json/`; 
    const[data,setData]= useState([]);

    function buscaApi(e){
        e.preventDefault();

        axios.get(api)
        .then(response =>{
            console.log(response.data);
            setData(response.data);
        }) .catch(error=>{
            console.log(error);
        })
    }

    return(
        <div className="Senha">
       <form >
        <label > Pesquisar usuário</label>
        <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)} />

        <button onClick={buscaApi}> <div className="P">Pesquisar</div></button>
      </form>
      <p>{
      data.length === 0? "Digite um cep para buscar"
      :
      `${data.logradouro}   ${data.bairro} ${data.localidade} ${data.uf} ${data.cep}`}</p>
      </div>
    )
}
export default ConsumindoApi;