exports.isFreeCompleted = function(amountPaid){
    var standardFee = 1000000;
    if(amountPaid == standardFee){
        return true
    }else{
        return false
    }
}
exports.getTotalFee = function(){
    return 1000000;
}