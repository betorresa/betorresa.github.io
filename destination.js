$(document).ready(function(){
    console.log("El DOM está listo.")
})

$("#paisesD");

// const listaPaises = document.getElementById('listaPaises');
// const selectCountry = document.getElementById('paisesD');

$("#paisesD").ready(function()
{
    console.log($("#paisesD").val())
    mostrarPaises(paises)

}
)
mostrarPaises(paises)

// selectCountry.addEventListener('click', ()=>{
//     console.log(selectCountry.value)
//     mostrarPaises(paises)
// })



function mostrarPaises(array){
    $("#paisesD").html( "<option selected disabled> País </option>")
    array.forEach(country =>{

        $("#paisesD").append(`<option>${country.pais}</option>`)
        
    })
}


function mostrarCiudades(array,array2){
    console.log(array)
    $("#paisesD").change(function(){
        let paisSelect = $("#paisesD option:selected").text()
        console.log("hola1")
        array.forEach(country =>{
            if (country.pais == paisSelect){
                $("#ciudadesD").html( "<option selected disabled> Ciudad </option>")
                country.ciudades.forEach(city =>{
                    $("#ciudadesD").append(`<option>${city}</option>`)
                })
                console.log("hola")
                
                array2.forEach(activity=>{
                    if (paisSelect == activity.pais){
                        $("#tarjetas").append(`
                        <div class="card unique-card" id="${activity.id}">
                            <img class="card-img-top" src="images/${activity.imagen}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${activity.nombre}</h5>
                                <p class="card-text">${activity.descripcion}</p>
                                <hr/>
                                <p class="card-text">Precio:$${activity.precio}</p>
                                <div class="input-group">
                                    <label for="adultos" >Adultos:</label>
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus button--lessmore"  onclick="addOne(${activity.id})" data-type="minus" data-field="">
                                          -
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="10">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus button--lessmore " data-type="plus" data-field="">
                                            +
                                        </button>
                                    </span>
                                    <button class="button--unique btnComprar" > Agregar al carro </button>
                                </div>
                            </div>
                        </div>
                        `)
                    }
                })
        }
        })
    console.log("termino")
    })
}


function addOne(target){
    console.log(target)
    $(target).find('.quantity-right-plus').click(function(e){
        
        e.preventDefault()
        var cantidad = parseInt($('#quantity').val())
            
                
        $('#quantity').val(cantidad + 1)
    
                
                // Increment
            
    })
    

}

$('.quantity-left-minus').click(function(e){
    e.preventDefault()

    var cantidad = parseInt($('#quantity').val())
        
    if(cantidad>0){
        $('#quantity').val(cantidad - 1)
    }
})

$(".btnComprar").click(function (e) { 
    
    let hijos = $(e.target).parent().children();
    //Primer input, valor de ID oculto
    console.log(hijos[0].value);
    //Animaciòn de respuesta de compra
    $(e.target).parent().slideUp("slow");
})


mostrarCiudades(paises, atracciones)



