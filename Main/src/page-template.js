// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
       <div> "Manger Name: "${manager.getName()}
         "Role: " ${manager.getRole()}
        
         "ID: " ${manager.getId()}
        "Email: " ${manager.getEmail()}
         Office number: ${manager.getOfficeNumber()}
            
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div>
        "Engineer Name: " ${engineer.getName()}
        "Engineer Role: " ${engineer.getRole()}
        "Engineer ID: " ${engineer.getId()}
         "Engineer Email: "${engineer.getEmail()}
        "Engineer GitHub: "${engineer.getGithub()}
    
        
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div>
        "Intern Name: " ${intern.getName()}
        "Intern Role: "${intern.getRole()}
        "Intern ID: " ${intern.getId()}
        "Intern Email: " ${intern.getEmail()}
        "Intern School: "${intern.getSchool()}
    
    
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<body>
    <div>
                ${generateTeam(team)}
            </div>
        
</body>
</html>
    `;
};