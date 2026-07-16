const express = require('express');

const app = express();

app.use(express.json());

const students = [
    { id: 1, name: 'Tom', age: 22, course: 'mern' },
    { id: 2, name: 'John', age: 24, course: 'python'  },
    { id: 3, name: 'Harry', age: 23, course: 'cpp'  },
    { id: 4, name: 'John', age: 26, course: 'java' }
]

app.get('/', (req, res) => {
    res.send('Response from server');
});

app.get('/login', (req, res) => {
    
    res.send('Response from Login route')
})

app.get('/student/:id', (req, res) => {
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

app.get('/student/:name/course/:course', (req, res) => {
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



app.post('/login', (req, res) => {
    res.status(201).json({ success: true, message: 'Logged in'});
})

app.post('/students' , (req,res)=> {
    const newstudent = req.body ; 
    students.push(newstudent);
    
    res.status(201).json({
        success: true,
        message: "New Student Added"
    });

})


app.listen(3000);