function MyFunction(word){
    let param = []
    let number = 1
    for(let i = 0; i < word.length; i++){
        if(word[i] == word[i + 1]){
            number += 1
        }else{
            param.push(word[i], number)
            number = 1
        }
    }
    return param.join("")
}

const f = MyFunction("cattwwwqd")

console.log(f)
