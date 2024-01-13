const express = require('express');
const handlebars = require('express-handlebars');
const {port} = require('.(configs/server.config')

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', process.cwd() + '/src/views')

app.get('/users', (req,res) => {
    const users = {
        name: 'Mate',
    }
    res.render('users.handlebars', users)
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}}`);
})

comoSeLlamen.handlebars