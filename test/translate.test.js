//At least one test checking for lower case conversion
//Convert each word to lowercase before translating 
describe("translate", function() {
    it("Should convert each word to lowercase", function() {    
        expect(translate('APPLE')).toEqual('appleway'); //result expecting was wrong 
    });
//Multiple tests for words starting with different vowels 
//If the word starts with letter 'A' 
    it("Should add way to end", function() {
        expect(translate('apple')).toEqual('appleway');
    }); 
//If the word starts with letter 'E' 
    it("Should add way to the end", function(){
        expect(translate('elephant')).toEqual('elephantway'); 
    });
//If the word starts with letter 'I' 
    it("Should add way to the end", function() {
        expect(translate('ice')).toEqual('iceway'); 
    }); 
//If the word starts with letter 'O'
    it("Should add way to the end", function(){
        expect(translate('owl')).toEqual('owlway'); 
    }); 
//If the word starts with letter 'U' 
    it("Should add way to the end", function(){
        expect(translate('under')).toEqual('underway'); 
    });
//At least one test for words starting with one consonant
//Write tests for the second letter being several different vowels
//If the word starts with one consonant- Second letter is 'A'  
    it("Should move first consonant to back and add ay", function(){
        expect(translate('cat')).toEqual('atcay'); 
    });
//If the word starts with one consonant- Second letter is 'E' 
    it("Should move first consonant to back and add ay", function(){ 
        expect(translate('pet')).toEqual('etpay'); 
    });
//If the word starts with one consonant- Second letter is 'I'
    it("Should move first consonant to back and add ay", function(){
        expect(translate('sit')).toEqual('itsay'); 
    }); 
//At least one test for words starting with two consonants
//If the word starts with two consonants 
    it("Should move both consonants to end and add ay", function(){
        expect(translate('broom')).toEqual('oombray'); 
     }); 
//At least one test for words starting with three consonants
//If the word starts with three consonants 
     it("Should move all three consonants to end and add ay", function(){
         expect(translate('scrap')).toEqual('apscray'); 
     });  
});

//If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay” to the end of the word