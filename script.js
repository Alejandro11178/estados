const cartas = {
    carta1: {
        texto: "Dueña de mi corazóoooon, por lo que sea que estés feliz, yo me alegraré el tripleeee, eres maravillosa y te mereces todo lo lindo!",
        imagen: "imagenes/feliz.jpg",
    },
    carta2: {
        texto: "Si necesitas ánimo, recuerda que eres increíble y capaz de superar cualquier cosita mi matroncitaa, te amooo!<3 💪",
        imagen: "imagenes/animo.jpg",
    },
    carta3: {
        texto: "Mi pequitas, eres capaz de todo lo que te propongas (lo demuestras siempre logrando todo lo que te propones), sigue así! que lo estás haciendo excelente mi vida ❤️",
        imagen: "imagenes/nostalgica.jpg",
    },
    carta4: {
        texto: "Mi niña hermosa, eres muy fuerte y saldrás de ésta y muchas más, que sepas que siempre estaré aquí para ti <3 te mando un abracito enorme! y si me necesita usted solo comuníquese con el +56984172012 para recibir una visita necesaria con abracitos incluidos o para una llamada simplemente <3",
        imagen: "imagenes/triste.jpg",
    },
    carta5: {
        texto: "A veces los nervios son buenos para darnos cuenta de que si nos importa el proceso en el que estamos, así que tranquila mi arli, todo saldrá bien! tú puedes con todo!!! 💖 (fotito de la rubí y yo pa q te acuerdes de nosotros y te calmes un pokitin)",
        imagen: "imagenes/nerviosa.jpg",
    },
    carta6: {
        texto: "No sé como aguantas un desangramiento mensuaaaaal, pero lleva toallitas x si acaso porfis y un corcho SKAFKAS te quiero mucho mi ovulona (sé que la ovulación es en el día 14 del ciclo)🤓",
        imagen: "imagenes/sangre.jpg",
    },
    carta7: {
        texto: "Querida arli, es normal tener cambios de humor repentinos en algunos días y cada una de tus emociones me enamoran, pero es importante comunicar el porqué pueden ser, te adoro a montones muak muak 😘",
        imagen: "imagenes/cambios.jpg",
    },
    carta8: {
        texto: "Aquí solo te diré que me comuniques este hecho y así poder vernos pa quitarnos las ganas en lo oscurito 👀",
        imagen: "imagenes/hot.jpg",
    },
};

function openCard(id) {
    const modal = document.getElementById("modal");
    const texto = document.getElementById("carta-texto");
    const imagen = document.getElementById("carta-imagen"); // Cambiado: apuntamos a la etiqueta <img>

    texto.innerText = cartas[id].texto;
    imagen.src = cartas[id].imagen; // Cambiado: actualizamos el atributo src de la etiqueta <img>
    modal.classList.remove("hidden");
}

function closeCard() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden"); // Oculta el modal añadiendo la clase "hidden"
}

