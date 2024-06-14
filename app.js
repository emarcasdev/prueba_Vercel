$(document).ready(function() {
    let repos = [
        {
            titulo: "TO-DO",
            descripcion: "Es una lista de tareas donde marcaremos como completada o eliminar tareas",
            link: "https://github.com/emarcasdev/lista-de-tareas"
        },
        {
            titulo: "Juego de 3 en raya",
            descripcion: "El juego clasico del 3 en raya hecho con JQuery, HTML y CSS",
            link: "https://github.com/emarcasdev/juego-tres-en-raya"
        },
        {
            titulo: "Filtrado Web",
            descripcion: "Un filtrador para buscar cartas de usuarios",
            link: "https://github.com/emarcasdev/filtradoWeb"
        },
        {
            titulo: "Filtrado Web 2",
            descripcion: "Lo mismo que en el Filtrado Web pero eliminando y creando cartas",
            link: "https://github.com/emarcasdev/filtradoWeb2"
        },
        {
            titulo: "Programa del taller",
            descripcion: "Este programa esta hecho en Java y utiliza polimorfismo y herencia",
            link: "https://github.com/emarcasdev/Taller---Eder"
        },
        {
            titulo: "Programa de la agenda",
            descripcion: "Este programa esta realizado en JS con Luxon",
            link: "https://github.com/emarcasdev/proyecto-agenda"
        },
        {
            titulo: "Agenda empresarial",
            descripcion: "Este programa esta realizado en JS con MYSQL creando y utilizando BD.",
            link: "https://github.com/emarcasdev/agendaEmpresarial"
        },

    ];

    function cargarRepos(){
        $('.contenido-grid').empty();
        for (const repo of repos) {
            let carta = 
            `<div class="grid">
                <div class="repositorio">
                    <div class="datos">
                    <div class="info">
                    <h2>${repo.titulo}</h2>
                    <h4>${repo.descripcion}</h3>
                    </div>
                    <div class = "link">
                    <a href="${repo.link}">ÉCHALE UN OJO</a>
                    </div>
                    </div>
                </div>
            </div>`

            $('.contenido-grid').append(carta);
        }
    }

    cargarRepos();

});