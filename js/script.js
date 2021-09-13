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


const colors = [];

const types = getArrayOfTypes(icons, 'type');

// La chiamata della funzione imposta l'array -colors- con una lista di colori, in base a quante solo le proprietà univoche all'interno di -icons-
setRandomColors(colors, types.length);
// console.log (colors);

// Appena carica la pagina, stampa sullo schermo le icone
printOnScreen(icons);


colorIcons(icons, colors, types, 'type');

console.table(icons);
printOnScreen(icons);

/**
 * Funzione per scrivere in HTML il contenuto
 */
function printOnScreen (array){
    // Mi salvo il riferimento al codice HTML
    const content = document.querySelector('#my_content');

    // innerHTML = "" in modo che ogni volta che chiamo la funzione resetta la pagina per non creare più volte lo stesso codice HTML
    content.innerHTML = "";

    // Ciclo For Each che stampa nel codice per ogni indice dell'array
    array.forEach(element => {
        // Destrutturazione per estrapolare i valori di ogni elemento che cicla
        const {family,prefix,name,type,color} = element;
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
            <i class="${family} ${prefix}${name}" style="color:${color}"></i>
            <h4 class="text-uppercase">${name}</h4>
        </div>
        `
    });
}

/**
 * Funzione che dato una lista di oggetti, restituisce un array contenente la lista univoca di una delle proprietà
 */
function getArrayOfTypes(array, proprietà)
{
    
    const newArray = [];
    // Ciclo per aggiungere una nuova proprietà all'array se non è presente
    array.forEach((element) => {
        if( !newArray.includes(element[proprietà]))
        {
            newArray.push(element[proprietà]);
        }
    });

    return newArray;
}

/**
 * Funzione per impostare una serie di colori come valori di un array
 * Un numero di volte pari a -times-
 */
function setRandomColors(array, times)
{
    // Calcola un valore casuale in esadecimale nel range da #000000 a #FFFFFF
    for(let i = 0; i < times; i++)
    {
        array.push('#' + Math.floor(Math.random()*16777215).toString(16) );
    } 
}

/**
 * Funzione per aggiungere una proprietà ad un array di oggetti
 */
function colorIcons (arrayIcons, arrayColors, arrTypes, proprietà )
{
    arrayIcons.forEach(element => {
        
        const index = arrTypes.indexOf(element[proprietà]);

        element.color = arrayColors[index];
    });
}