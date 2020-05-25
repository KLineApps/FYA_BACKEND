# FYA - BACKEND :rocket:

### About
Backend of FYA Application!

 ![](/images/header.png)
 
### Installation
Follow the steps to start the application on you environment: 
1. Download and Install Docker at `https://www.docker.com/products/docker-desktop`
2. Run `docker run --name fya -e POSTGRES_PASSWORD=@fya_ -e POSTGRES_USER=fya -p 5432:5432 -d postgres`
3. Download the project `git clone https://github.com/gu1ma/FYA_Backend`
4. Set the environment variables in the file __env_example__ and save as __.env__
5. Run `adonis key:generate` to generate the key for application
6. Install the dependencies `npm install` or `yarn`
7. Run migrations: `adonis migration:run`
8. Start the server :D `adonis serve --dev`
  
### Routes
__User creation__<br>
POST: `BASE_URL/users`<br>
Params: `
  {
    username: $USERNAME,
    password: $PASSWORD,
    email: $EMAIL
  }
`<br><br>
__Authentication__<br>
POST: `BASE_URL/session`<br>
Params: `
  {
    email: $EMAIL,
    password: $PASSWORD
  }
`
<br><br>
__Get sports__<br>
GET: `BASE_URL/sports` <br><br>
   

## Releases

  * 1.0.0
    * User Sign Up.
    * User Sign In implemented with session and logout.
    * Sports Sing Up 
  
## Technologies:
   **NodeJS, Yarn, NPM, Adonis, Docker, POSTGRES**
  

## Branches

![](/images/git.png)

Desenvolvido por KLineApps.

