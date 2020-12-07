
//Translation must all be done in a translate function that takes a 
//string parameter and returns the translated Pig Latin string

    function translate(word){
        word = word.toLowerCase(); 

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(word[0])){ //includes looks at all elements in the array rather than indexOf 
        let newWord = word + "way"; 
        return newWord; 
    }else{ 
        const wordArray = word.split(''); //declare the array and split it up 
        
        while(!vowels.includes(wordArray[0])){
        const firstLetter = wordArray.shift(); //take the first letter and remove it from the array and return that element  
        wordArray.push(firstLetter); // adding first letter to end of word array and then convert back to string 
        }
        word = wordArray.join(''); // now the string is joined back together so we can just call word again at this point 
        word = word + "ay";  
        //return word;   
    } 
        return word; 
 }
 
