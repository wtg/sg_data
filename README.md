# SG_Data

Stores past data from RPI's Student Government using [JavaScript](https://www.javascript.com/), [Node.js](https://nodejs.org/en/), and [PostgreSql](https://www.postgresql.org).

## Installation (WSL)

1. Clone the repository and make note of the repo's location.
2. If it is not installed already, install [Node.js](https://nodejs.org/en/) onto your machine.
    - This can be accomplished by running `sudo apt-get install nodejs`
    - Ensure the installation was successful by checking the version by running `node -v` or `node -version`.
3. If it is not installed already, continue by installing [npm](https://www.npmjs.com/) onto your machine as well
    - This can be done by running `sudo apt-get install npm`
    - Check that [npm](https://nodejs.org/en/) is installed by checking the version using `npm -v` or `npm -version`.
4. Run `npm install` to install all the necessary modules for sg_data to properly run.
5. Continue by installing Postgres(https://www.postgresql.org) onto your system.
    - Install by running `sudo apt-get install postgresql`
    - Set the password for default user `postgres` by running `sudo passwd postgres`.
        - This will prompt you to enter a new password for user `postgres` (note that the password will not be shown when typing)
    - Close and reopen the terminal and the password should now be set.
6. Create the sg_data database by running `createdb sg_data`
    - Check that the sg_data database is running `psql sg_data` (exit from psql with `\q`)
7. Run `node seed.js` to fill out the sg_data database with dummy data contained in seed.js
8. Run `npm start` to start the application. Check on [localhost:3000](https://localhost:3000) to ensure that the app is running correctly.
9. If you have not already installed [sg_admin](https://github.com/justetz/sg_admin) and [sg_public](https://github.com/justetz/sg_public), make sure to get those set up as well.

The app should look like this:

![sg_data](https://user-images.githubusercontent.com/43757314/90216070-8fddd180-ddcb-11ea-961d-a23a9f3a9dc3.PNG)


## Installation (Mac)