const QUOTES = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.'
];

let currQuote = [];
let ind = 0;
let startTime = Date.now;

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click',()=>{
    const quoteIndex = Math.floor(Math.random() * QUOTES.length);
    const quote = QUOTES[quoteIndex];
    const temp = quote
    words = temp.split(' ');
    ind = 0;

    typedValueElement.className='';
    const spanWords = words.map(function(word){return `<span>${word}</span>`});
    quoteElement.innerHTML = spanWords.join(' ');
    quoteElement.childNodes[0].className ='highlight';
    messageElement.innerText = '';

    typedValueElement.value ='';
    typedValueElement.focus();

    startTime = Date.now();
})

typedValueElement.addEventListener('input', () =>{
    const currWord = words[ind];

    const typedValue = typedValueElement.value;

    if(typedValue === currWord && ind === words.length-1){
        const elapsedTime = Date.now() - startTime;
        const msg = `Congrats! you finisehd ${elapsedTime/1000} seconds!\n
                    Your words per minute(WPM) is ${(ind+1)/(elapsedTime/1000)}!`;
        typedValue.className='hidden';
        quoteElement.innerHTML='';
        typedValueElement.value = '';
        messageElement.innerHTML = msg;
    }
    else if(typedValue.trim() === currWord){
        typedValueElement.value = '';
        ind++;
        for(const wordElement of quoteElement.childNodes){
            wordElement.className = '';
        }
        quoteElement.childNodes[ind].className = 'highlight';
    }

    if(currWord.startsWith(typedValue)){
        typedValueElement.className = '';
    }
    else{
        typedValueElement.className = 'error';
    }
})