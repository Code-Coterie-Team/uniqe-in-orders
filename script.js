var uniqueInOrder=function(iterable){
    if (typeof(iterable) == 'string'){
        iterable = iterable.split('');
    } 
    let ans = []
    if (iterable.length != 0){
        ans = [iterable[0]];
        for(let i = 1; i < iterable.length; i++){
            if (iterable[i] != iterable[i-1]){
                ans.push(iterable[i]);
            }
        }
    }
    return ans;
}
