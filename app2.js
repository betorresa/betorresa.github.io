let personas=[]
nodeList = HTMLFormElement.elements

class Persona{
    constructor(nombre, apellido, edad, email, institucion, contrasena) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad   = edad
        this.email = email
        this.institucion=institucion
        this.contrasena=contrasena
    }
    act_contra (nueva_contra){
        this.contrasena = nueva_contra
        alert("La nueva contraseña es: " + this.contrasena )
        console.log("La nueva contraseña es: " + this.contrasena)

    }
    mostrar_datos(){
        console.log("El nombre es: " + this.nombre + " " + this.apellido )
        alert("El nombre es: " + this.nombre + " " + this.apellido )
        console.log("El email es: " + this.email )
        alert("El email es: " + this.email)
        console.log("La edad es: " + this.edad)
        alert("La edad es: " + this.edad)

    }
}

//console.log(x)

/*let name1 = prompt ("Ingrese su nombre")
let surname = prompt ("Ingrese su apellido")
let age = prompt ("Ingrese su edad")

let compania = prompt ("Ingrese la compañia para la que trabaja")

let correo = name1+"."+surname+"@"+compania+".cl"

alert("Bienvenid@, tu correo institucional será: " + name1+"."+surname+"@"+compania+".cl")
let contra1
let contra2

let validado = false
while(validado==false){
    contra1 = prompt ("Ingrese su contraseña")
    contra2 = prompt ("Repita la contraseña")
    if ( contra1!="" && contra2!=""){
        if (contra1==contra2){
            alert("Ingreso correcto. Contraseña establecida.")
            validado = true;
        }
        else{
            alert("Ingreso equivocado, las contraseñas no coinciden")
        }

    }
    else{
        alert("Ingreso equivocado, intente nuevamente.")
    }
}
*/
//const persona1 = new Persona(name1, surname, age, correo, compania, contra1)


//let contenedor = document.createElement("div");
/*contenedor.innerHTML = `<h3> Nombre: ${persona1.nombre} ${persona1.apellido}</h3>
                        <p>  Email: ${persona1.email}</p>
                        <b>  Bienvenido, ya tienes tu cuenta ${persona1.institucion} establecida </b>`;
document.body.appendChild(contenedor);

function mostrarUsuario()
 persona1.act_contra("pass123")

persona1.mostrar_datos()*/




function getData(){
    console.log("entro")
    let inputs = document.getElementById("myForm").elements
    console.log(inputs)
    let name1 = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let password1 = document.getElementById("pass1").value
    let compania = document.getElementById("insti").value
    let correo = name1+"."+surname+"@"+compania+".cl"
    let contenedor = document.createElement("div")
    let documento= document.getElementById('user-inputs')
    documento.classList.add = (" animate__animated animate__fadeOutDown ")
    documento.innerHTML=``
    contenedor.innerHTML = `<h3> Nombre: ${name1} ${surname}</h3>
                        <p>  Email: ${correo}</p>
                        <b>  Bienvenido, ya tienes tu cuenta ${compania} establecida </b>`
    documento.className = " animate__fadeInUp"
    documento.appendChild(contenedor)
    console.log("salio")
}


var el = document.getElementById("formInput")
if(el){
    el.addEventListener('click', getData)
}






// document.getElementById("myForm").addEventListener('keypress', function(e){ (getData())});

/*contenedor.innerHTML = `<h3> Nombre: ${persona1.nombre} ${persona1.apellido}</h3>
                        <p>  Email: ${persona1.email}</p>
                        <b>  Bienvenido, ya tienes tu cuenta ${persona1.institucion} establecida </b>`;
document.body.appendChild(contenedor);*/