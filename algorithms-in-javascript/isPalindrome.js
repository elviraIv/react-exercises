function isPalindrome(string) {

    const charactersArray = string.toLowerCase().split('');
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const validStringArray=[];

    charactersArray.forEach(x=>{
        if(alphabetArray.indexOf(x) > 0){
            validStringArray.push(x)
        }
    })

    return(validStringArray.join('') === validStringArray.reverse().join(''))



}

isPalindrome("Madam, I'm Adam");
