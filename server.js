const express = require('express');
const app = express();
const PORT = 80;

app.use(express.urlencoded({ extended: true }));

let notes = ["Welcome to your AWS EC2 Notes App!"];

app.get('/', (req, res) => {
  let listItems = notes.map(n => `<li>${n}</li>`).join('');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Cloud Notes App</title></head>
    <body style="font-family: Arial; padding: 40px; max-width: 500px; margin: auto;">
      <h2>☁️ AWS EC2 Simple Notes App</h2>
      <form action="/add" method="POST">
        <input type="text" name="note" placeholder="Write a note..." required style="padding: 8px; width: 70%;">
        <button type="submit" style="padding: 8px 12px;">Add Note</button>
      </form>
      <ul>${listItems}</ul>
    </body>
    </html>
  `);
});

app.post('/add', (req, res) => {
  if (req.body.note) notes.push(req.body.note);
  res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
