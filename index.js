const express=require("express")

const app=express()

app.use(express.static("public"))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
const server=app.listen(3000,function(){
    
    console.log("server running ")
})
const io=require("socket.io")(server)
io.on("connection",function(socket){
    console.log("clients connected")
    //  socket.on("chat",function(data){
    //      socket.broadcast.emit("chat",data)
    //  })
   
    socket.emit("welcome-chat","Hello,welcome to chat")
     socket.on("chat",(data)=>{
         socket.emit("your-chat",data)
        socket.broadcast.emit("send-chat",data)
    })
    socket.on("join",(name)=>{
        socket.broadcast.emit("person-joined",name)
    })
    
})