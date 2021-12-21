# Applicant registration

Angular project connected to a Json-Server Rest API.

This project was developed in order to create a login page with OAuth2 security and a ng-bootstrap table with all applicants registered and a modal form to register new ones.

## Technologies used in the project

- [Angular 7](https://angular.io/) - Framework
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - UI component framework
- [ng-bootstrap 4](https://ng-bootstrap.github.io/#/home) - UI component framework
- [Json-server](https://www.npmjs.com/package/json-server) - Fake REST API used for mocking.

## How to install

### Prerequisites

- npm
  ```
  npm install npm@latest -g
  ```
- angular/cli
  ```
  npm install -g @angular/cli@7.0.5
  ```
- bootstrap 4
  ```
  npm install bootstrap@4.2.1
  ```
- ng-bootstrap 4
  ```
  ng add @ng-bootstrap/ng-bootstrap
  ```
  
### Installation
  
1. Create a new folder and navigate to this location    
    ```
    C:\Users\'username'>cd C:\Users\'yourusername'\ (...)
    ```
2. Clone the repo in your new created folder
    ```
    git clone https://github.com/brunowvisk/cadastroDemandante
    ```
3. Start the Fake Rest API in order to get all data stored in the db.json file:
    ```
    json-server db.json
    ```
4. Open another terminal and use Angular/CLI command to start the application on your browser:
    ```
    ng serve
    ```
5. Type the following URL in your browser: http://localhost:4200/

6. Now, you can you use the application.

## Version control
  [github](https://github.com/)
  
## Contact

- Bruno Rocha - https://www.linkedin.com/in/bruno-f-rocha-6770a31a2/
- Project link - https://github.com/brunowvisk/cadastroDemandante

## App Description (portuguese)

Firstly, we have a login page where we use OAuth2 to get a valid token to access the next page. This token is stored in a local storage and used durgin the navigation in the next pages:

![telaLogin](https://user-images.githubusercontent.com/66183994/146867768-64fdd65d-4461-408f-8655-bf57ae487f4d.jpg)

Secondly, we have the main content with a navbar and a table with all registered applicants.

![tabelaCadastro](https://user-images.githubusercontent.com/66183994/146868811-78ab9992-c3b8-42c4-86c4-455500418d45.jpg)

Lastly, we have the registration modal form used to add new applicants to the data table as we have already seen in the last picture:

![modalCadastro](https://user-images.githubusercontent.com/66183994/146869062-7dcd813c-b2f0-46dc-8fef-75afc4db8927.jpg)

## Acknowledgments

- The project was developed according to a paper instruction.