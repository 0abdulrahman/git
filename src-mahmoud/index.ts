async function getFetchUsers() {
       return await fetch("./json-placeholders.json")
       .then(res => res.json())
       .then(data => data)
       .catch(err => console.log(err))
}