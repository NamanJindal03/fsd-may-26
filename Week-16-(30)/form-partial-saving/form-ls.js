const form = document.querySelector('#localstorageform')
const formNameField = document.querySelector('#name')
const formAgeField = document.querySelector('#age')
const formAddressField = document.querySelector('#address')

let isLoading = true;
window.onload = () => {
    console.log('getting onload executed')
    let formData = localStorage.getItem('formData');
    formData = JSON.parse(formData)
    formNameField.value = formData.name || ''
    formAgeField.value = formData.age || ''
    formAddressField.value = formData.address || ''
    isLoading = false;
};
form.addEventListener('submit', (e)=>{
    console.log('being called')
    e.preventDefault()
    saveForm(true)
})
function saveForm(isSubmit){
    if(isLoading) return;
    console.log('executed')
    const formData = {};
    if(formNameField.value){
        formData['name'] = formNameField.value
    }
    if(formAgeField.value){
        formData['age'] = formAgeField.value
    }
    if(formAddressField.value){
        formData['address'] = formAddressField.value
    }
    localStorage.setItem('formData', JSON.stringify(formData))
    if(isSubmit){
        //do the api call as well
    }
}
setInterval(()=>{
    saveForm()
}, 4000)