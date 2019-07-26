var socket=io("http://localhost:3000");
const message=document.getElementById("message-box")
document.getElementById("chat").addEventListener("submit",(e)=>{
    e.preventDefault();
    socket.emit("chat",{name:name,message:message.value})
    document.getElementById("message-box").value=""
})
socket.on("welcome-chat",(data)=>{
   var p= document.createElement("div")
   p.innerText=data;
   p.classList.add("welcome-join")
    document.getElementById("chatbox").append(p);
})
socket.on("send-chat",(data)=>{
      appendMessage(data.name+": "+data.message)
})
function appendMessage(message){
    var ele=document.createElement("div")
    ele.innerText=message;
    ele.classList.add("message")
    var elem=document.createElement("div")
    elem.classList.add("parent-message")
    document.getElementById("chatbox").append(ele)
    // document.getElementsByClassName("parent-message")[0].append(ele)
}
var name=prompt("enter your name?")
socket.emit("join",name)
socket.on("person-joined",(name)=>{
    var p= document.createElement("div")
    p.innerText=name +" joined chat";
    
   p.classList.add("welcome-join")
 
     document.getElementById("chatbox").append(p);
})
socket.on("your-chat",(data)=>{
    
    var ele=document.createElement("div")
    ele.innerText=data.message;
    ele.classList.add("user-message")
    var elem=document.createElement("div")
    elem.classList.add("parent-umessage")
    document.getElementById("chatbox").append(ele)
    // document.getElementsByClassName("parent-umessage")[0].appendChild(ele)
    
    
})

