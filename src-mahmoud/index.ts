function getFetchUsers(){
       return fetch("./json-placeholders.json")
       .then(res => res.json())
       .then(data => data)
       .catch(err => console.log(err))
}