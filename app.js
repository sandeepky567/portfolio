const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from public and assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  // Simulate handling the contact form. In production wire an email or DB.
  const { name, email, message } = req.body || {};
  console.log('Contact form submitted:', { name, email, message });
  // Redirect back to contact with a success query flag
  res.redirect('/contact?success=1');
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
