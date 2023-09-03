function firstBotMessage(){
    let firstMessage ="How can I help you ?"
    document.getElementById("botstarterMessage").innerHTML='<p class="botText"><span>'+firstMessage+'</span></p>';
}
firstBotMessage();

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>'+botResponse+'</span></p>';
    $('#chatbox').append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function getResponse(){
    let userText =$("#textInput").val();

    if (userText==""){
        userText = "I am a coder!";
    }
    let userHtml = '<p class="userText"><span>'+userText+'</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(()=>{
        getHardResponse(userText);
    },1000)
}
function buttonSendText(sampleText){
    let userHtml = '<p class="userText"><span>'+sampleText+'</span></p>';
    $("textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function sendButton(){
    getResponse();
}
$("#textInput").keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
})