const express = require('express');
const { logger } = require('./middlewares/loggers');
// const morgan = require('morgan')

const app = express();


app.use(express.json());
// app.use(morgan());

// export let count = 0;

app.use(logger);


const students = [
    { id: 1, name: 'Tom', age: 22, course: 'mern' },
    { id: 2, name: 'John', age: 24, course: 'python'  },
    { id: 3, name: 'Harry', age: 23, course: 'cpp'  },
    { id: 4, name: 'John', age: 26, course: 'java' },
    { id: 5, name: 'Virat', age: 24, course: 'mern' },
]

app.get('/', (req, res) => {
    res.send('Response from server');
});


app.get('/login', (req, res) => {
    // res.status(201);
    res.send('Response from Login route')
})

app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    // console.log('Id is: ',typeof(id));
    const student = students.find(s => s.id === id);
    if (student) {
        res.json({
            success: true,
            data: student
        })
        return;
    }
    res.json({
        success: false,
        message: 'Data does not exist'
    });
    return;
})

app.get('/students/:name/course/:course', (req, res) => {
    const name = req.params.name;
    const course = req.params.course;

    const student = students.find(s => s.name === name && s.course === course);
    if (student) {
        res.json({
            success: true,
            data: student
        })
        return;
    }
    res.json({
        success: false,
        message: 'Data does not exist'
    });
    return;
})

app.get('/search', (req, res) => {
    const course = req.query.course;
    const studentsData = students.filter(s => s.course === course);
    if (studentsData) {
        res.json(studentsData);
        return;
    }
    res.json({message: 'Data not found'});
    return;
})


app.post('/students', (req, res) => {
    const data = req.body;
    const newStudent = { id: students.length + 1, ...data };
    students.push(newStudent);
    res.json({ message: "New user added", NewUser: newStudent });
})

// app.put('/students/:id');

// app.patch('/students/:id');

// app.delete('/students/id');

// app.post('/login', (req, res) => {
//     res.status(202);
//     res.send({ success: true, message: 'Logged in'});
// })

// app.get('')

app.post('/student', (req, res) => {
    res.status(201).json({ success: true, message: 'Logged in'});
    
})

app.listen(3000);