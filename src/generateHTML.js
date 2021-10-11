const fs = require('fs');
const js = require('../index')


const managerCard = manager => {
    console.log(manager);
    return ` <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${managerQuestions.managerName} </h5>
                <p class="card-text">
                  ☕Manager
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${managerQuestions.managerID}</li>
                <li class="list-group-item">Email:${managerQuestions.managerEmail}</li>
                <li class="list-group-item">Office Number:${managerQuestions.managerPhone}</li>
              </ul>
            </div>`

}

const engineerCard = engineer => {
    console.log(engineer);
    return ` <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${engineerName}</h5>
                <p class="card-text">
                 👓Engineer
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${engineerID}</li>
                <li class="list-group-item">Email:${engineerEmail}</li>
                <li class="list-group-item">GitHub:${engineerGithub}</li>
              </ul>
            </div>`
}

const internCard = intern => {
    console.log(intern)
    return ` <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${internName}</h5>
                <p class="card-text">
                  🎓Intern
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${internID}</li>
                <li class="list-group-item">Email: ${internEmail}</li>
                <li class="list-group-item">School:${internSchool}</li>
              </ul>
            </div>`
}

const generateTeam = team => {
    var teamMembers = [];
    teamMembers.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)));
    teamMembers.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)));
    teamMembers.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)));

    managerCard();
    engineerCard();
    internCard();
    generateHTML();

}


// Create function to generateHTML
const generateHTML = team => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Document</title>
  </head>
  <body>
    <header>My Team</header>
    <div class="card-container">
    <div class="container">
      <div class="row">
        <div class="d-flex col-12 justify-content-center">
          <div class="card-container">
           
    ${generateTeam(team)}
     </div>
        </div>
      </div>
    </div>
    </div>
  </body>
</html>`
}

module.exports = generateHTML;