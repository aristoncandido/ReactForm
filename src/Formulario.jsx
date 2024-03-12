

import './formulario.css';


function Formulario(){

return(

    <div className="form">
    <form action="">

        <div className='icone-avatar'>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0" fill="#2e3436"></path> </g></svg>
        </div>
       <label htmlFor="name">Nome</label>
        <input type="text"  name="nome"/>
        <label htmlFor="senha"  className='mt-3'>Senha</label>
        <input type="password"   name="password"/>
        <button type="submit"  className='mt-3'>Login</button>



    </form>

</div>


)

    

}



export default Formulario;