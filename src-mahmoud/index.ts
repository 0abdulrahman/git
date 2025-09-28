// async function getFetchUsers() {
//        return await fetch("./json-placeholders.json")
//        data = await 
//        .then(res => res.json())
//        .then(data => data)
//        .catch(err => console.log(err))
// }

async function getUsers(){
  const reponse = await fetch("./json-placeholders.json");
       const payload = await reponse.json();
       
       //logging users names and ids 
       payload.forEach(user => {console.log(`id:${user.id} , name:${user.name}`)});

   return payload;
}
