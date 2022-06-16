// @ts-nocheck
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id and then:
// - Display an alert with the username and all the todos titles that belong to that user 



let message = " Hello:"

for ( let user of users){
    message+= 
     `${user.name} with Number.id ${user.id} from ${user.address.city}\n` 
}

alert(message)

let userId = Number(prompt("What is your id?"))
 
let content = ""
 for (let user of todos){
 content+=
 `${users.username} with ${todos.title}`

 }
alert(content)
// console.log(todo)

// alert(todo)