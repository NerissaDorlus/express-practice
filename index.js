import express, { response } from 'express';
const app = express();
app.use(express.json());

//list requests that we want express 
app.get('/hello', (request, response) => {
    //do something ...
    console.log('xxxHello World 🌍! xx')
    response.send('Hello World 🌍!');
});

const students = [
    { firstName: 'Neri',lastname:'Dor'},
    { firstName: 'Car', lastname:'Dup'},
    { firstName: 'Ano', lastname:'Dor'},
    { firstName: 'Rie', lastname:'Dor'},
    { firstName: 'Dar', lastname:'Dor'}
];
app.get('/students', (request, response) => {
    response.send(students)
});

app.get('/students/:firstname', (request, response) => {
    //this will return only the student whose name you are looking for
    const student = students.find(stud.firstName === request.params.fname)
    if(!student){
        response.status(404).send({message:'student not found', sucess: false})
        return
    }

    response.send(student)
});


//start listening to port 3000
const PORT = 3001
app.listen(3001, () =>{
    console.log(`listen on http://localhost:${PORT}...`)
})
