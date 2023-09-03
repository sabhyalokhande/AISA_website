function getBotResponse(input){
    if (input=="hello"){
        return"Hello there!";
    }
    else if (input == "goodbye"){
        return "Talk to you later!";
    } 
    else if (input == "tell me about the club"){
        return "visit about us section";
    }
    else{
        return"Try asking something else!";
    }
}