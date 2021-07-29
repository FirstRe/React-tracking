// var N = 1 ;
// var K = 2 ;
// var arrN =[];
// var check = 0;
// var sum = 0;
//   for(let i = 1; i <= N; i++)
//   {
//       arrN.push(i);
//   }
  
//   arrN = arrN.reverse();
//   for(let h =0;h<arrN.length;h++){
//         check += arrN[h];
//   }
//   for(let j = 0; j < N; j++){

//     if(K>check){
//         sum = -1;
//     }else{
//         if(K == arrN[j]){
//             K = K - arrN[j]
//             sum +=1;
            
//         }
//         if(K > arrN[j]){
//             K = K - arrN[j]
//             sum +=1;
            
//         }   
        
//     }

  
//   }
//   console.log(check);
//   console.log(sum);
 

//input string

let NO_OF_CHARS = 256;
 
// Find maximum distinct characters
// in any string
function max_distinct_char(str, n)
{
     
    // Initialize all character's
    // count with 0
    let count = new Array(NO_OF_CHARS);
    for(let i = 0; i < count.length; i++)
    {
        count[i] = 0;
    }
 
    // Increase the count in array if a
    // character is found
    for(let i = 0; i < n; i++)
    {
        count[str[i].charCodeAt(0)]++;
    }
 
    let max_distinct = 0;
    for(let i = 0; i < NO_OF_CHARS; i++)
    {
        if (count[i] != 0)
        {
            max_distinct++;
        }
    }
    return max_distinct;
}
 
function smallesteSubstr_maxDistictChar(str)
{
     
    // Size of given string
    let n = str.length;   
 
    // Find maximum distinct characters
    // in any string
    let max_distinct = max_distinct_char(str, n);
     
    // Result
    let minl = n;  
 
    // Brute force approach to find all
    // substrings
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            let subs = null;
             
            if (i < j)
                subs = str.substring(i, j);
            else
                subs = str.substring(j, i);
                 
            let subs_lenght = subs.length;
            let sub_distinct_char = max_distinct_char(
                subs, subs_lenght);
 
            // We have to check here both conditions together
            // 1. substring's distinct characters is equal
            //    to maximum distinct characters
            // 2. substing's length should be minimum
            if (subs_lenght < minl &&
                max_distinct == sub_distinct_char)
            {
                minl = subs_lenght;
            }
        }
    }
    return max_distinct;
}


// Driver Code
let str = "zyzyzyzer";
let len = smallesteSubstr_maxDistictChar(str);
 
console.log("The length of the smallest substring" +
               " consisting of maximum distinct " +
               "characters : " + len);



