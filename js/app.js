// console.log('ciao mamma')


/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome,cognome, 
ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM semplicemente come stringhe
*/

//creo l' array con le informazioni fornite
const workers = [
    {
        //Membro 1
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        //Membro 2
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'  
    },
    {
        //Membro 3
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'   
    },
    {
        //Membro 4
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'  
    },
    {
        //Membro 5
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        //Membro 6
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        foto: ' barbara-ramos-graphic-designer.jpg'
    }
];

// console.log(workers);

const viewserEl = document.querySelector('.workers');
// const elementDomNome = document.querySelector('.nome');
// const elementDomCogn = document.querySelector('.cognome');
// const elementDomRuolo = document.querySelector('.ruolo');
// const elementDomPhoto = document.querySelector('.photo');



//stampare in console i singoli elementi 
for(let i = 0; i < workers.length; i++){

    const workersArray = workers[i];

    //stampo in console le singole proprietà dell array
    console.log(workersArray.nome, workersArray.cognome, workersArray.ruolo, workersArray.foto);


    //stampo i valori nell index ma in modo "grezzo"
    //viewserEl.append('worker-name: ' +workersArray.nome, ' worker-surname: ' +workersArray.cognome, ' worker-role: '+workersArray.ruolo, ' worker-photo: ' +workersArray.foto)
    
    //creo un slingolo elemento oggetto <div class="col-4"></div>
    const flexElement = document.querySelector('.workers_container');
    const divElementWorker = document.createElement('div');
    // divElementWorker.className = 'col-4' 
    flexElement.append(divElementWorker);
    divElementWorker.innerHTML = `${workersArray.nome}, ${workersArray.cognome}, ${workersArray.ruolo}, ${workersArray.foto}` 
}

// for(let key in workers){
//     console.log(workers[key])
// }


// console.log(viewserEl);