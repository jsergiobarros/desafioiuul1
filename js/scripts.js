


class Messages{
    constructor(name, email, message) {
        this.name=name
        this.email=email
        this.message=message
    }

}
function enableButton(){
    if( document.getElementById("name").value!=="" &&
        document.getElementById("email").value!=="" &&
        document.getElementById("message").value!=="")
        document.getElementById('sendMessage').disabled=false;
    else
        document.getElementById('sendMessage').disabled=true;
}

function listMessage(){
    let messageDiv = document.getElementById('message-list');
    let messageList= localStorage.getItem('messages')
    console.log(messageList)
    if(messageList===""|| messageList===null)
        messageDiv.innerHTML="<p>Sem mensagens no momento</p>"
    else{
        messageDiv.innerHTML=""
        JSON.parse(messageList).map((i) => {
            messageDiv.innerHTML+= '<h3 >'+i.name+'</h3>'+'<h4>'+i.email+'</h4>'+'<h5>'+i.message+'</h5>'

        })
    }

}

function setMessage(){

    let messageList=localStorage.getItem('messages')===""|| localStorage.getItem('messages')===null? new Array(): JSON.parse( localStorage.getItem('messages'))
    let form = new Messages(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("message").value)

    messageList.push(form)
    localStorage.setItem("messages",JSON.stringify(messageList))

    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("message").value=""
    enableButton()

}
function clearForm(){
    localStorage.setItem("messages","")


}
