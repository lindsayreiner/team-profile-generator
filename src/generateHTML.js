function managerCard(manager) {


}

function engineerCard(engineer) {

}

function internCard(intern) {

}

function generateTeam(team) {
    var teamMembers = [];
    teamMembers.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)));
    teamMembers.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)));
    teamMembers.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)));

}


// Create function to generateHTML
function generateHTML(team) {
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
    ${generateTeam(team)}
    </div>
  </body>
</html>`
}

module.exports = generateHTML;