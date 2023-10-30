import{useState}from "react";
function InputUseState(){
const[login, setLogin]=useState();
const[senha, setSenha]=useState();
const[vlogin, setvlogin]=useState();

     function verificaLogin(e){
        e.preventDefault();// impede que a pagina recarregue
        if(login.toLowerCase() === `adriana` && senha === `123`){
            setvlogin(true);


        }else{
              if(login.toLowerCase() !== 'adriana' && senha === '123'){
                setvlogin('Login incorreto');
            }else if(login.toLowerCase() === 'adriana' && senha !== '123'){
                setvlogin('Senha Incorreta'); 
            }else {
                setvlogin('Login e senha Incorretos'); 
            }
        }
     }

    return(
        <form>
            <label> Login:</label>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
            
            <br />
            <label >Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            
            <br />
            <button onClick={verificaLogin}>Logar!</button>
            {
                vlogin === true
                 ? <p>logado com sucesso!</p> 
                 : ''

            }
            {
                vlogin !== false
                ? <p>{vlogin}</p>
                : ''
            }

</form>
    )
        
    
}
export default InputUseState;