import express from "express";

const app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
   res.render('index.ejs');
})

const port= 3000;
app.listen(port,() => console.log(`${port}`));
