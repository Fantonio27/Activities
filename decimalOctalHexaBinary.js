const decimal = 255

let results = {
    octal: 8,
    hexa: 16,
    binary: 2
}

// function decimalToOctal(decimal){
//     let quotient = decimal;
//     let remainder = [quotient % 8];

//     while(quotient > 8){
//         quotient = Math.floor(quotient/8);

//         remainder.push(quotient % 8)

//     }
    
//     return Number(remainder.reverse().join(""))
// }

// function decimalToHexa(decimal){
//     let quotient = decimal;
//     let remainder = [(quotient % 16).toString(16)];

//     while(quotient > 16){
//         quotient = Math.floor(quotient/16);
//         remainder.push((quotient % 16).toString(16))
//     }
    
//     return remainder.reverse().join("")
// }

// function decimalToBinary(decimal){
//     let quotient = decimal;
//     let remainder = [quotient % 2];

//     while(quotient > 2){
//         quotient = Math.floor(quotient/2);

//         remainder.push(quotient % 2)
//     }
    
//     return Number(remainder.reverse().join(""))
// }

function Converter(decimal){
    console.log("Decimal:", decimal)
    console.log("Results:")

    const mod = (q, r, h) => {return h? (q % r).toString(16) : q % r} 
    
    for(let r of Object.keys(results)){
        let hexaMode = r == "hexa";

        let quotient = decimal;
        let remainderArray = [mod(quotient, results[r], hexaMode)];

        while(quotient > results[r]){
            quotient = Math.floor(quotient/results[r]);
            remainderArray.push(mod(quotient, results[r], hexaMode))
        }
        
        results[r] = remainderArray.reverse().join("")
        console.log(`${r}: `, results[r]);
    }
}

Converter(255)