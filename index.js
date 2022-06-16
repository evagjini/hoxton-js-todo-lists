// @ts-nocheck
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id and then:
// - Display an alert with the username and all the todos titles that belong to that user 



let message = " ";

for ( let user of users){
    message+= 
     `${user.name} with Number.id ${user.id} from ${user.address.city}\n` 
}

alert(message)

let id = Number(prompt("What is your id?"))
console.log(id)

 for( user of users){
    if (id === user.id) 
    console.log("This is:"  + user.username)
 }


for ( todo of todos){
    if( id === todo.userId)
    console.log(todo.title);
}
//  }
// alert(content)
// console.log(todo)

// alert(todo)