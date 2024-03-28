


class Messages{
    constructor(name, email, message) {
        this.name=name
        this.email=email
        this.message=message
    }
}

function listMessage(){
    let messageDiv = document.getElementById('message-list');
    let messageList=localStorage.getItem('messages')
    if(messageList===""|| messageList===null)
        messageDiv.innerHTML="<p>Sem mensagens no momento</p>"
    else{
        messageDiv.innerHTML=""
        for (let i in messageList){
            console.log(i)
            messageDiv.innerHTML+= "<h3>${i.name}</h3>"
        }
    }

}

function getMessage(name, email,message){
    console.log(localStorage.getItem('messages'))
    let messageList=localStorage.getItem('messages')===""|| localStorage.getItem('messages')===null? new Array(): JSON.parse( localStorage.getItem('messages'))
    let form = new Messages(name.value,email.value,message.value)
    messageList.push(form)
    localStorage.setItem("messages",JSON.stringify(messageList))
    console.log(localStorage)
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("message").value=""
    listMessage()

}
function clearForm(){
    localStorage.setItem("messages","")
    console.log(localStorage)

}
