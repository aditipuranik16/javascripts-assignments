let superheroes = [
    {
        name:"thor",
        age:1500,
        planet:"asgard",
        weapons:["stormbreaker","mjolnir"]
    },
    {
        name:"ironman",
        age:47,
        planet:"earth",
        weapons:["armor","jarvis","friday"]
    },
    {
        name:"Superman",
        age:"34",
        planet:"krypton",
        weapons:[]
    }
];

function display(){

    let rows = "";

    for(let i=0;i<superheroes.length;i++){

        let superhero = superheroes[i];


        rows += `
        <tr>
        <td>${superhero.name}</td>                      
        <td>${superhero.age}</td>
        <td>${superhero.planet}</td>
        <td>${superhero.weapons.join(" , ")}</td>
        <td>
            <button onclick="deleteSuperhero(${i})">delete</button>
        </td>
        </tr>
        `
    }

    // console.log(rows);
    document.getElementById('data').innerHTML = rows; 
}

display();


function deleteSuperhero(index){

    superheroes.splice(index,1);
    
    display();

}

function addSuperhero(){

    let superhero = {};

    superhero.name = document.getElementById("name").value;
    superhero.age =  Number(document.getElementById("age").value);
    superhero.planet = document.getElementById("planet").value;
    let weaponsList = document.getElementById("weapons").value;
    superhero.weapons = weaponsList.split(" , ");

    superheroes.push(superhero);

    display();

    // console.log(superhero);
    // console.log(weapons);
    // console.log(weapons.split(" , "));

}


// rows += 
        //     "<tr><td>"+
        //     superhero.name+
        //     "</td><td>"+
        //     superhero.age+                  //old method
        //     "</td><td>"+
        //     superhero.planet+
        //     "</td><td>"+
        //     superhero.weapons[0]+
        //     "</td></tr>";