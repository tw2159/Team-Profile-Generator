module.exports = team => {
  const createTeam = team => {
    // Create manager profile HTML markup
    createManager = manager => {
      return `
        <li class="team-member">
          <div class="card">
            <div class="card-header">
              <h2>${manager.getName()}</h2>
              <h3>
                <i class="fas fa-user-tie"></i>
                ${manager.getRole()}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
              </ul>
            </div>
          </div>
        </li>
      `;
    };

    // Create engineer profile HTML markup
    createEngineer = engineer => {
      return `
        <li class="team-member">
          <div class="card">
            <div class="card-header">
              <h2>${engineer.getName()}</h2>
              <h3>
                <i class="fas fa-user"></i>
                ${engineer.getRole()}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
              </ul>
            </div>
          </div>
        </li>
      `;
    };

    // Create intern profile HTML markup
    createIntern = intern => {
      return `
        <li class="team-member">
          <div class="card">
            <div class="card-header">
              <h2>${intern.getName()}</h2>
              <h3>
                <i class="fas fa-user-graduate"></i>
                ${intern.getRole()}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
            </div>
          </div>
        </li>
      `;
    };
    
    const profiles  = [];

    // Generate the card for manager
    profiles.push(
      team.filter(employee => employee.getRole() === "Manager")
          .map(manager => createManager(manager))
    );
    
    // Generate the card for emgineer
    profiles.push(
      team.filter(employee => employee.getRole() === "Engineer")
          .map(engineer => createEngineer(engineer))
    );

    // Generate the card for intern
    profiles.push(
      team.filter(employee => employee.getRole() === "Intern")
          .map(intern => createIntern(intern))
    );

    return profiles.join("");
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
      </head>
    
      <body>
        <header>
          <h1>My Team</h1>
        </header>
    
        <div class="container-fluid">
          <div class="row">
            <!-- Column 1: Team Members -->
            <div class="col-sm-12">
              <ul class="team">
              ${createTeam(team)}
              </ul>
            </div>
            <!-- End of Column 1: Team Members -->
          </div>
        </div>
    
      </body>
    </html>
  `;
};
