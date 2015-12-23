# Real-Time Chat with the CEAN Stack and Socket.io

This is an application that makes use of Couchbase, Express Framework, Angular 2 with TypeScript, and Node.js (CEAN) for real-time chat with the assistance of Socket.io.

Messages are sent to and from the Node.js server to the client.  Messages are stored in Couchbase to be accessed during the next session.

## Prerequisites

There are not many prerequisites required to build and run this project, but you'll need the following:

* Node.js
* Node Package Manager
* Couchbase Server 4+

## Installation & Configuration

Certain configuration in both the application and the database must be done before this project is usable.

### Application

Checkout the latest master branch from GitHub and navigate into it using your Terminal (Mac & Linux) or Command Prompt (Windows).  Assuming you already have Node.js installed, run the following:

```
npm install
```

This will install all dependencies as defined in the **package.json** file.

### Database

This project requires Couchbase 4.0 or higher in order to function because it makes use of the N1QL query language.  With Couchbase Server installed, create a new bucket called **web-chat** or whatever you've named it in your **config.json** file.

We're not done yet.  In order to use N1QL queries in your application you must create a primary index on your bucket.  This can be done by using the Couchbase Query Client (CBQ).

On Mac, run the following to launch CBQ:

```
./Applications/Couchbase Server.app/Contents/Resources/couchbase-core/bin/cbq
```

On Windows, run the following to launch CBQ:

```
C:/Program Files/Couchbase/Server/bin/cbq.exe
```

With CBQ running, create an index like so:

```
CREATE PRIMARY INDEX ON `web-chat` USING GSI;
```

Your database is now ready for use.

## Testing

With all dependencies installed and Couchbase Server configured, run the following from your Command Prompt or Terminal:

```
node app.js
```

Now when you visit **http://localhost:3000** from your web browser you will be able to use the application.

## Resources

Couchbase - [http://www.couchbase.com](http://www.couchbase.com)

ExpressJS - [http://www.expressjs.com](http://www.expressjs.com)

Angular 2 - [https://angular.io](https://angular.io)

Node.js - [http://www.nodejs.org](http://www.nodejs.org)

Socket.io - [http://socket.io](http://socket.io)
