module.exports = function toReadable (number) {
    if (number == 0){
        return "zero";
    }
    let numbers = {
        1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
        10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
        20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
      }
    let ntos = number.toString();
    let result;
    if(ntos.length == 1){
        result = numbers[ntos[0]];
    }
    if(ntos.length == 2){
        if(ntos[1] == 0){
            result = numbers[ntos[0]*10];
        }
        else if(number < 20){
           result =  numbers[ntos[0] + ntos[1]];
        }
        else{
            result = numbers[ntos[0]*10] + " " + numbers[ntos[1]];
        }
    }
    if(ntos.length == 3){
        if (ntos[1] == 0 && ntos[2] == 0){
            result = numbers[ntos[0]] + " hundred";
        }
        else if(ntos[1] == 0){
            result = numbers[ntos[0]] + " hundred " + numbers[ntos[2]];
        }
        else  if(ntos[2] == 0){
            result = numbers[ntos[0]] + " hundred " + numbers[ntos[1]*10];    
        }
        else if(ntos[1] + ntos[2] < 20){
            result = numbers[ntos[0]] + " hundred " + numbers[ntos[1] + ntos[2]];
        }
        else{
            result = numbers[ntos[0]] + " hundred " + numbers[ntos[1]*10] + " " + numbers[ntos[2]];
        }
        
    }
    return result;
}
