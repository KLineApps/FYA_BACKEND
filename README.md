# FYA - BACKEND :rocket:

### About
Backend of FYA Application!

 ![](/images/header.png)
 
### Installation
Follow the steps to start the application on you environment: 
1. Download and Install Docker at `https://www.docker.com/products/docker-desktop`
2. Run `docker run --name fya -e POSTGRES_PASSWORD={YOUR_PASSWORD} -e POSTGRES_USER={YOUR_USER} -p 5432:5432 -d postgres`
3. Run `npm i -g @adonisjs/cli` for install __AdonisJs__
4. Download the project `git clone https://github.com/KLineApps/FYA_Backend`
5. Set the environment variables in the file __env_example__ and save as __.env__
6. Run `adonis key:generate` to generate the key for application
7. Install the dependencies `npm install` or `yarn`
8. Run migrations: `adonis migration:run`
9. Start the server :D `adonis serve --dev`
<br><br>

## Releases

  * 1.0.0
    * User Sign Up.
    * Tacher Sign Up.
    * User Sign In implemented with session and logout.
    * Sports Sing Up 
    * Create Event 
    * Subscribe on event
  
## Technologies:
   **NodeJS, Yarn, NPM, Adonis, Docker, POSTGRES**
  

## Branches

![](/images/git.png)

Developed by KLineApps.

