# Frontend Exercise Backend

## Preparations

1. Make sure you have Node.JS installed: https://nodejs.org/en/download/
1. Clone the git repository
1. Run `npm install` inside the repo directory
1. Run `npm start` to run the server

You should see the following message in the console:

`Comments server listening on port 3000!`

To see that it's working, open the browser in `http://localhost:3000/comments`

## Exercise Instructions

1. Create a web page in either __AngularJS (1.x or 2.x) or React__ that contains a comments feed with the ability to edit and delete existing comments.
There is no need to implement the backend API, we've already done that for you (see details below).

1. Use the [designs](./designs) as a guideline for your web page. The designs include:
    * Basic mockup for the comments list (feel free to go crazy with your own design)
    * A complete design for the popups

1. Each comment element in the feed should contain:
    * Comment
    * Two buttons - delete and edit, each opens the matching popup per the designs

1. An understandable README.md is required, with running instructions.

1. Extra bonus for writing reusable components and blazing design!

## Consuming the Backend API:

### Getting all the comments:

GET request to `http://localhost:3000/comments`. Returns a JSON array of the following objects:
```json
{ "comment": "bla bla bla", "id": "1a8ec1c0-a5f6-11e6-9212-e3b737d6fe15", "updatedAt": 1478638710748, "email": "me@acme.com" }
```

### Updating a comment:

PUT request to `http://localhost:3000/comments/:id`, where `:id` is the id of the comment.
Expects a JSON with the following structure:
```
{ "comment": "new content for comment" }
```

### Deleting a comment:

DELETE request to `http://localhost:3000/comments/:id`, where `:id` is the id of the comment.

## Final Notes

A working solution isn't the only requirement. The code should be simple (to read and understand), robust and testable (you don't have to write the actual tests though..).

Create a repository in Github and send us the link when you're ready.
