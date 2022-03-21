const express = require('express');
const compression = require('compression');
const connectDB = require('./db/db');
const path = require('path');
const cors = require('cors');
const enforce = require('express-sslify');

const adminsRouter = require('./routes/api/admins');
const expsRouter = require('./routes/api/experiences');
const codesRouter = require('./routes/api/codes');
const blogRouter = require('./routes/api/blogs');
const contactRouter = require('./routes/api/contact');

const app = express();
app.use(compression({ 
    level: 9
}));

const PORT = process.env.PORT || 5000;

connectDB()

app.disable('x-powered-by');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use(adminsRouter);
app.use(expsRouter);
app.use(codesRouter);
app.use(blogRouter);
app.use(contactRouter);
app.get('/api/work', (req, res) => {
    res.status(200).json({
        'workAt' : process.env.WORKAT,
        'workLink': process.env.WORKLINK
    })
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.get('/*', (req, res) => {
        res.send(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
    app.get('/service-worker.js', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'service-worker.js'));
    });
}

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})