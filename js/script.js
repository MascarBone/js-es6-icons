const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

/**
 * Funzione per scrivere in HTML il contenuto
 */

printOnScreen(icons);

let newTag = document.createElement("div");



function printOnScreen (array){
    // Mi salvo il riferimento al codice HTML
    const content = document.querySelector('#my_content');

    // innerHTML = "" in modo che ogni volta che chiamo la funzione resetta la pagina per non creare più volte lo stesso codice HTML
    content.innerHTML = "";
    
    // Ciclo For Each che stampa nel codice per ogni indice dell'array
    array.forEach(element => {
        // Destrutturazione per estrapolare i valori di ogni elemento che cicla
        const {family,prefix,name,type} = element;
        // console.log(content);

        // Aggiunta della riga di codice per creare l'html

        // ########## Per usare append() ##########
        // let tag = document.createElement("i");
        // tag.classList.add(`${family}`);
        // tag.classList.add(`${prefix}${name}`);
        // console.log(tag);
        // content.append(tag);
        
        content.innerHTML += `
        <div class="col">
            <i class="${family} ${prefix}${name}"></i>
            <h4 class="text-uppercase">${name}</h4>
        </div>
        `
    });
}

/**
 * 
 */