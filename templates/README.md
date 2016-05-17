# <%= appNameSlug %>

<%= appDescription %>

## Some notes about scripts

The package.json file comes with several prebuilt scripts to allow for easy running of the app.

### In development

You should start with running the `start` script:

```bash
$ npm run start
```

This sets up the api server on port 3000.

Next run in a new tab:

```bash
$ npm run dev
```

This sets up the dev server on port 8080. Open your browser to `localhost:8080` to enjoy automatic bundling and hot browser reloads while you develop. Note this only applies to your front-end assets (those in the `src` folder). Any edits to files outside of the `src` folder will require you to restart the api server by running the `start` script again, before those changes will be able to be seen.

An alternative development mode is to run the `start` script followed by:

```bash
$ npm run watch
```

This allows you to develop on `localhost:3000` with automatic bundling but you will have to manually refresh the browser. **It is preferrable to ignore this command and develop using the webpack dev server on port 8080 by running the 'dev' script instead.**

### In production

Before running the `start` script, you will have to build the bundle file. Do this by running:

```bash
$ npm run build
```

Then run:

```bash
$ npm run start
```

### Building the database

Once you have created your migration and seed files, you will need to migrate your tables and seed the database. You can do this by running:

```bash
$ npm run database
```

This command starts by rolling back previous migrations, so you can use this command to reset your database back to its initial seed condition or to add changes to your database. You should do this both in development and production before starting your servers.

## Some notes about the architecture

The `slush-wrekr` generator scaffolds the architecture for a one-page app. It assumes you will serve one static page, `index.html`, and that you will not be using server-side routing to redirect to other pages. All routing and view-rendering is done on the client-side with react. These files are stored in the `src` folder which is where all your front-end assets should go.

Client-side persistence is achieved through redux. Server-side persistence is achieved through a SQLite database in development and a PostgreSQL database in production. You should use the `index.js` file in the `api/` folder for your json api routes that communicate with the database. In the `api/utils/` folder is a `connection.js` file that requires in knex for connection with the database. This should be required into any files that want to access the database.

The `api/utils/` folder is to provide storage for your back-end modules. Front-end modules should go in the `src/utils/` folder.

Note, there are two webpack configurations; one for development, and one for production.

The server is set up to use express sessions. Note, the default express sessions memory store is not suitable for production as it leaks memory (see the docs on the [express-session npm module](https://www.npmjs.com/package/express-session#sessionoptions).) You will have to require in an alternative memory store (see the [express-session docs](https://www.npmjs.com/package/express-session#compatible-session-stores) for suggestions).