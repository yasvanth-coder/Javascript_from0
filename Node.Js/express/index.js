const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.get('/', (req, res) => {
    const siteName = "Yash's Website";
    const searchText = 'search box';
    res.render('index', { siteName, searchText });
});

app.get('/blog/:slug', (req, res) => {
    const blogTitle = `Yash's Blog: ${req.params.slug}`;
    const blogContent = 'This is my first blog';
    res.render('blog', { blogTitle, blogContent });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
