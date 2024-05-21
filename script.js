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

    const accordion = document.querySelector('.accordion')
    let accordionHTML=''
    let numbers = ["One", "Two", "Three", "Four"]
    userList.map((user,i)=>{
        accordionHTML+=`<div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${numbers[i]}" aria-expanded="false" aria-controls="collapse${numbers[i]}">
                                        Accordion Item #3
                                    </button>
                                    </h2>
                                    <div id="collapse${numbers[i]}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                            </div>`
    })
    accordion.innerHTML = accordionHTML
    console.log(accordionHTML)

}