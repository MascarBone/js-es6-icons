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
	},
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


const types = getArrayOfTypes(icons, 'type');

// La chiamata della funzione imposta l'array -colors- con una lista di colori, in base a quante solo le proprietà univoche all'interno di -icons-
const colors = setRandomColors(types.length);
// console.log (colors);

const coloredIcons = colorIcons(icons, colors, types, 'type');

// Appena carica la pagina, stampa sullo schermo le icone
printOnScreen(coloredIcons);

printSelection(types);

// EVENTO onChange sul Select
const selezione = document.querySelector('#my_type-select')
selezione.addEventListener('change', ()=> {
    // console.log (selezione.value);
    if(selezione.value == 'all')
    {
        printOnScreen(coloredIcons);
    }else
    {
        const listaSelected = filteredArray(coloredIcons, selezione.value);
        printOnScreen(listaSelected);
    }
});


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
        <div class="col mb-5">
            <div class="box-icon">
                <i class="${family} ${prefix}${name} fa-3x" style="color:${color}"></i>
                <h4 class="text-uppercase">${name}</h4>
            </div>
        </div>
        `;
    });
}

/**
 * Funzione per scrivere in HTML la lista di opzioni all'interno del select, in base ai tipi di proprietà
 */
function printSelection(arrTypes)
{    
    // <option value="all">all</option>
    const content = document.querySelector('#my_type-select');
    content.innerHTML =`<option value="all">all</option>`;
    for(const types in arrTypes)
    {
        // console.log(types);
        content.innerHTML += `<option value="${arrTypes[types]}">${arrTypes[types]}</option>`;
    }
}

/**Funzione per filtrare un array così che restituisca una lista di valori che corrispondono ad una precisa proprietà */
function filteredArray (array, proprietà)
{
    // console.log(proprietà);
    const newArray = array.filter(element => {
        // console.log(element.type);
        return element.type == proprietà;
    });
    // console.table(newArray);
    return newArray;
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
 * Funzione che restituisce un array con una lista di colori 
 * pari al numero di volte di -times-
 */
function setRandomColors(times)
{
    const newArray = [];
    // Calcola un valore casuale in esadecimale nel range da #000000 a #FFFFFF
    for(let i = 0; i < times; i++)
    {
        newArray.push('#' + Math.floor(Math.random()*16777215).toString(16) );
    } 
    return newArray;
}

/**
 * Funzione per creare un array con una proprietà nuova ad un array di oggetti
 */
function colorIcons (arrayIcons, arrayColors, arrTypes, proprietà )
{
    const newArray = [];

    arrayIcons.forEach(element => {
        const obj = {...element};
        const index = arrTypes.indexOf(element[proprietà]);

        obj.color = arrayColors[index];

        newArray.push(obj);
    });
    
    return newArray;
}