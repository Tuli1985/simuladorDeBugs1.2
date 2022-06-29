//----------------------------TARJETAS QUE DEVUELVEN INFORMACION SOBRE DISTINTOS TIPOS DE BUGS--------------------------------

//-----------------------------ARRAY QUE CONTIENE OBJETOS DE TIPOS DE BUGS-----------------------------------------------------
const tipoDeBugs = [
    {
        title: "Heisenbug",
        description: "En jerga de programación, un heisenbug es un tipo de bug que parece desaparecer o comportarse de otro modo al intentar ser observado en detalle.El término es un juego de palabras a partir del nombre de Werner Heisenberg, el físico que dedujo el efecto de observación de la mecánica cuántica, según el cual el mero hecho de observar un sistema de una manera determinada altera el estado de este. ",
    },
    {
        title: "Bohrbug",
        description: "Bohrbug. Estos tipos de bugs, llamados así por el modelo atómico de Bohr, son un tipo de error que se encuentra en las antípodas del heisenbug. Es decir, son las fallas informáticas que mantienen su comportamiento sin importar lo que se haga para eliminarlo."
    },
    {
        title: "Mandelbug",
        description: "Un Mandelbug (del apellido de Benoît Mandelbrot, matemático famoso por su estudio de fractales) es un bug tan complejo que no se puede encontrar una manera de eliminarlo, o cuyo efecto parece caótico y parece no determinista."
    },
    {
        title: "Schroedinbug",
        description: "Schroedinbug es un tipo inusual de error de software que logra pasar los controles de calidad iniciales y solo se encuentra cuando alguien lee manualmente el código del software y se da cuenta de que el programa no debería, y nunca debería haber podido funcionar en primer lugar."
    },
    {
        title: "Fantasma",
        description: "Fantasma es un bug que suele esconderse en esas rutinas o subprogramas que rara vez se ejecutan. Su ubicación los hace muy difíciles de identificar durante las pruebas previas al lanzamiento del programa, y puede hacer que un producto fracase estrepitosamente al ser puesto a la venta."
    }
]

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

tipoDeBugs.forEach(el => {

    $template.querySelector("article").classList.add("card");
    $template.querySelector("h2").textContent = el.title;
    $template.querySelector("p").textContent = el.description;
    $template.querySelector("a").setAttribute("href", "#");
    $template.querySelector("a").textContent = "view more";

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

})


$cards.appendChild($fragment);



