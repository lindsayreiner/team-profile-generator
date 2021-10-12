const fs = require('fs');


const managerCard = manager => {
    return ` <div class="card col shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
              <div class="manager-body card-body">
                <h5 class="card-title">${manager.name} </h5>
                <p class="card-text">
                  ☕  Manager
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID: </strong>${manager.id}</li>
                <li class="list-group-item"><strong>Email: </strong>${manager.email}</li>
                <li class="list-group-item"><strong>Office Number: </strong>${manager.officeNumber}</li>
              </ul>
            </div>`

}

const engineerCard = engineer => {
    console.log(engineer);
    return ` <div class="card col shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
              <div class="engineer-body card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">
                 👓  Engineer
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID: </strong>${engineer.id}</li>
                <li class="list-group-item"><strong>Email: </strong>${engineer.email}</li>
                <li class="list-group-item"><strong>GitHub: </strong>${engineer.github}</li>
              </ul>
            </div>`
}

const internCard = intern => {
    return ` <div class="card col shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
              <div class="intern-body card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">
                  🎓  Intern
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID: </strong>${intern.id}</li>
                <li class="list-group-item"><strong>Email: </strong>${intern.email}</li>
                <li class="list-group-item"><strong>School: </strong>${intern.school}</li>
              </ul>
            </div>`
}

const generateTeam = team => {
    var teamMembers = [];
    teamMembers.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)));
    teamMembers.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)));
    teamMembers.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)));

    return teamMembers.join('')


}


// Create function to generateHTML
const generateHTML = teamMembers => {
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
  </head>
  <body>
    <header>My Team</header>
    <div class="card-container">
    <div class="container d-flex justify-content-center">
      <div class="row">
        
    ${generateTeam(teamMembers)}
     
      </div>
    </div>
    </div>
  </body>
</html>`
}

module.exports = generateHTML;