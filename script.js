const apiUrl = 'https://randomuser.me/api?'

let userArgs = []

const fetchUsers = async (params = "results=20") => {
    fetch(apiUrl+params).then((response) => response.json()).then(data => {
        userArgs = data.results

        //displaying the fetched data
        displayUser()

    }).catch(err => console.log(err))
}
const displayUser = (args = userArgs) => {
    console.log(args)

    let str = ""
    args.map((user, i)=>{

        str+=`<div class="col-md-6 col-lg-3">
        <div class="card h-100" >
            <img src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${user.name.title}. ${user.name.first} ${user.name.last}</h5>
            <div class="card-text">
            <ul class="list-group" circle-icon>
                <li class="list-group-item"><i class="fa-solid  fa-mobile-button"></i> ${user.cell} </li>
                <li class="list-group-item"><i class="fa-solid  fa-envelope"></i> ${user.email}</li>
                <li class="list-group-item"><i class="fa-solid  fa-location-pin"></i>${user.location.city}</li>
  
</ul>
            </div>
            </div>
        </div>
    </div>`
        console.log(user,i)

    })


    document.getElementById("user-list").innerHTML= str
    document.getElementById("user-count").innerText= args.length

}

const handleOnChange = (e) =>{
    console.log(e.value)
    const qrtStrings = "results=20&gender=" + e.value
    fetchUsers(qrtStrings)
}


const handleOnSearch = (e) =>{
    
    const str = e.value
    const selectedUsers = userArgs.filter((user)=>{
        const name= user.name.first + " " + user.name.last
        return name.toLowerCase().includes(str.toLowerCase())
        
    })

    displayUser(selectedUsers)

}


fetchUsers()