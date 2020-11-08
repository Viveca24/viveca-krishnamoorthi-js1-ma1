// QUESTION 1: 

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();
// "Meoew!""

// QUESTION 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// QUESTION 3:

heading.style.fontSize = "2em";


// QUESTION 4:

heading.classList.add("subheading");


// QUESTION 5: 

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red"; 
}


// QUESTION 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";  


// QUESTION 7:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catsList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catsList(cats);
 

// QUESTION 8:

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {
        
        let catAge = "Age Unknown";

        if(cats[i].age) {
            catAge = cats[i].age;
        }

        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${catAge}</p>
                </div>`;
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = newHTML;

