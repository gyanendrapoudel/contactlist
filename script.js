const apiEP = "https://randomuser.me/api?results=2"
let userList =[]
// slide to go to app screen
const slide = document.querySelector('.slider')

slide.addEventListener('change',(e)=>{
    // destructuring to get value from slider
    const {value} = e.target
    const label = document.getElementById('label')
    if(value>70){
            label.textContent=''
            displayAppScreen()
    }else{
            label.textContent="Slide to Unlock"
    }

})

const displayAppScreen=()=>{
   const homeScreen = document.querySelector('.homeScreen')
    const appScreen = document.querySelector('.appScreen')
        homeScreen.remove()
        appScreen.style.display = 'block'
}

const fetchUser = async (url)=>{
   const response =  await fetch(url)
   const result = await response.json()
   userList=result.results
   console.log(userList)

//  hide spinner
    const spin = document.querySelector('.showSpinner')
    spin.remove()


    // show contact user
    displayContactList(userList)


}
fetchUser(apiEP)

// display user list function
const displayContactList = (userList)=>{
    
    document.querySelector('#list').style.display="block"
    // contact number
    document.querySelector('#userCount').textContent=userList.length
   
    //accordion html 
    const accordion = document.querySelector('.accordion')
    let accordionHTML=''
    userList.map((user,i)=>{
        accordionHTML += `<div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                                        <img src="${user.picture.thumbnail}" alt="profile pic" class="rounded-circle">
                                        <div class="ms-2">
                                         <div class="fw-bolder">
                                         ${user.name.title}
                                         ${user.name.first}${user.name.last}
                                         </div>
                                          <div> ${user.location.street.number}
                                          ${user.location.street.name}
                                          </div>
                                          
                                        </div>
                                        
                                    </button>
                                    </h2>
                                    <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       <img src="${user.picture.large}" class="rounded-circle"></img>
                                       <div>
                                       <div class="fw-bolder ">
                                         ${user.name.title}
                                         ${user.name.first}${user.name.last}
                                         </div>
                                         <div>
                                          <a href="tel:${user.cell}">
                                          <i class="bi bi-phone-fill"></i>
                                          ${user.cell}
                                          </a>
                                          </div>
                                          <div>
                                          <a href="mailto:${user.email}">
                                          <i class="bi bi-envelope-fill"></i>
                                          ${user.email}
                                          </a>
                                          </div>
                                          <div> 
                                          ${user.location.street.number}
                                          ${user.location.street.name}
                                          ${user.location.city}

                                          </div>
                                       </div>
                                    </div>
                                    </div>
                            </div>`
    })
    accordion.innerHTML = accordionHTML
    console.log(accordionHTML)

}