


class Messages{
    constructor(name, email, message) {
        this.name=name
        this.email=email
        this.message=message
    }
}

function getMessage(name, email,message){
    let messageList=localStorage.getItem('messages')===""? new Array(): JSON.parse( localStorage.getItem('messages'))
    let form = new Messages(name.value,email.value,message.value)
    messageList.push(form)
    localStorage.setItem("messages",JSON.stringify(messageList))
    console.log(localStorage)
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("message").value=""

}
function clearForm(){
    localStorage.setItem("messages","")
    console.log(localStorage)

}
