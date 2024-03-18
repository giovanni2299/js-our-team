console.log('ciao mamma')


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

//stampare in console i singoli elementi 
for(let i = 0; i < workers.length; i++){
    const workersArray = workers[i];
    console.log(workersArray);
}


const viewserEl = document.querySelector('.workers');
// console.log(viewserEl);