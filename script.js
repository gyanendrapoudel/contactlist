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
}
fetchUser(apiEP)