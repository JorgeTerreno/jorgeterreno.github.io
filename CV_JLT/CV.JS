let tema = 'dark';

function changeTema (){
    if (tema =='dark'){
        document.body.style.backgroundColor = 'black';
        //document.getElementsByTagName("h1")[0].style.color ='red';


        Edit_Etiqueta("h1", "red", "transparent")
        Edit_Etiqueta("h2", "red", "white")
        Edit_Etiqueta("ul", "yellow", "transparent")
        Edit_Etiqueta("p", "aqua", "transparent")
        Edit_Etiqueta("b", "aqua", "transparent")
        Edit_Etiqueta("strong", "aqua","transparent")
        Edit_Etiqueta("L_Contacto", "aqua","transparent")
        
        document.getElementById("Btn_Tema").textContent="Tema Claro..."

        tema = 'white';

    }
    else {
        location.reload()
        tema='dark';
    }
}

function Edit_Etiqueta(v_tagName, v_color, v_bgColor){

    let arr = []; // Arreglo que almacena las etiquetas a editar el color 

        arr = document.getElementsByTagName(v_tagName);

        for ( u of arr){
            u.style.color = v_color;
            u.style.backgroundColor = v_bgColor;
        }

}
function openFormContacto() {
    let arr= [];
    arr = document.getElementsByClassName("F_Contacto");

    for ( u of arr){
        u.style.display="block";
    }
}

function validaContacto(){
    v1 = (document.getElementById("F_Nombre").value == "")
    v2 = (document.getElementById("F_Email").value == "")

if ( v1 || v2){
        alert("Todos los campos deben ser completados!");
        return false;
}
    return true;
}