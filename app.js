let btn_contacto=document.getElementById("btn_contacto")
let formulario=document.getElementById("formulario")

const form=()=>{
    formulario.innerHTML=`
                        <div class="form_primera_parte">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" required id="nombre">
                        </div>
                        <div class="form_primera_parte">
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" required id="apellido">
                        </div>
                        <div class="form_primera_parte">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" required id="email">
                        </div>
                        <div class="form_primera_parte">
                            <label for="asunto">Asunto</label>
                            <input type="text" name="asunto" required id="asunto">
                        </div>
                        

                        <div class='txt_area'>
                            <label>Ingrese su mensaje (máximo 200 caracteres)</label>
                            <textarea maxLength={200} placeholder='Ingrese su mensaje aquí' name="mensaje" id="msj"></textarea>
                            
                        </div>

                        <div class="contenedor_btn_form">
                        <button type="submit" class="btn_form">Enviar</button>
                        <div/>`
}

btn_contacto.addEventListener('click',form)