# Purge-Game-Site

After forking and downloading, `cd` to directory and `npm install` to get all the Node packages installed locally.

If you're going to edit the CSS, run this command in the base directory first:<br>
`npx tailwindcss -i ./src/input.css -o ./css/output.css --watch`<br>
This will rebuild `output.css` on the fly, which is the file the live site uses for CSS.

When you're done editing, upload the new `index.html` and `css/output.css` to the server.

https://tailwindcss.com/docs/utility-first
