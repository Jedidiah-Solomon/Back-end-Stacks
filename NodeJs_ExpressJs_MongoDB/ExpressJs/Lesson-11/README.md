# Embedded JavaScript templating | EJS

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

#### Use plain JavaScript, Fast development, time Simple syntax, Speedy execution, Easy debugging, Active development

EJS has a large community of active users, and the library is under active development. We're happy to answer your questions or give you help.

When quickly creating Node applications, a fast way to template your application is sometimes necessary.

`Jade` comes as the default template engine for Express but Jade syntax can be overly complex for many use cases.

`Embedded JavaScript templates (EJS)` can be used as an alternative template engine.

### Steps

1. `$ npm i express@latest ejs@latest`
2. Create Folder structure files - `mkdir -p public/css public/js` `touch public/css/styles.css public/js/scripts.js`

```
- project-root/
  - views/
    - index.ejs
    - about.ejs
    - partials/
      - header.ejs
      - footer.ejs
  - public/
    - css/
      - styles.css
    - js/
      - scripts.js
  - routes/
    - pages.js
    - posts.js
  - middleware/
    - logger.js
    - error.js
  - server.js
  - .env
  - package.json


```

3.  Configure Express to Use EJS - server.js
4.  Create EJS Templates - E.g views/index.ejs and views/about.ejs
5.  Create Static Files (Optional) - public/css/styles.css, public/js/scripts.js
6.  Start the Server - npm start
7.  Visit http://localhost:3000 to see the home page and http://localhost:3000/about to see the about page.

##### Explanation

###### Setting the View Engine: app.set("view engine", "ejs") tells Express to use EJS as the templating engine.

###### Rendering EJS Templates: In the route handlers, res.render("template", data) renders the specified template with the provided data.

###### Static Files: app.use`(express.static(path.join(__dirname, "public")))` serves static files like CSS and JavaScript from the public directory.

This setup demonstrates the basics of using EJS with Express. You can extend it by adding more routes, partial templates, and dynamic data.

---

EJS (Embedded JavaScript Templating) allows you to create HTML templates that can include dynamic data. Here's a quick overview of how EJS works and its key features:

### Key Concepts of EJS

Embedding JavaScript: You can embed JavaScript code within your HTML templates using <% %> tags.

Dynamic Data Rendering: Pass dynamic data to your templates and use it within the HTML.

Reusable Templates: Create reusable components and partials to keep your code DRY (Don't Repeat Yourself).

### EJS Syntax Overview

1. Embedding JavaScript
   Use `<% %>` to execute JavaScript code.

```
<% if (user) { %>
  <h1>Hello, <%= user.name %>!</h1>
<% } else { %>
  <h1>Hello, Guest!</h1>
<% } %>
```

2. Outputting Data
   Use `<%= %>` to output data to the template.

```
<h1>Welcome, <%= user.name %>!</h1>
```

3. Including Partials
   Use `<%- include('path/to/partial') %>` to include other EJS templates (partials).

```
<%- include('header') %>
<h1>Content here...</h1>
<%- include('footer') %>
```
