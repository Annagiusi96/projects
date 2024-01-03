const input = document.querySelector('input');
const send = document.querySelector('.invia');
const buttonAudio = document.querySelector('.audio')
const phonetic = document.querySelector('.phonetic')
const wordValue = document.querySelector('h3')
const list = document.querySelector('.list-definitions')

function error() {
    wordValue.style.color = 'red';
    wordValue.textContent = "Insert a correct word"
    phonetic.textContent = '';
    buttonAudio.classList.add('display-none');
    list.textContent = ''
}

async function fetchData() {
    try {
        if (input.value == '') {
            error()
        } else {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
            const data = await response.json();
            
            return data
        }
    } catch (e) {
        error()
    }
}



send.addEventListener('click', ()=>{
    fetchData()
    .then(data => {
        //word
        wordValue.style.color = 'black'
        wordValue.textContent = data[0].word.toUpperCase()
        //icon
        buttonAudio.classList.remove('display-none')
        //phonetic
        const phonetica = data[0].phonetics
        const phoneticaText = phonetica.find(e => e.text != undefined)
        phonetic.textContent = phoneticaText.text;
        //definitions
        list.textContent = ''
        const definitions = data[0].meanings
        definitions.filter(e => {
            const ulTitle = document.createElement('ul');
            ulTitle.textContent = e.partOfSpeech
            list.append(ulTitle)
            const listLi = document.createElement('li');
            listLi.textContent = e.definitions[0].definition;
            list.append(listLi)
        })

    })
    .catch(e => error())
})

buttonAudio.addEventListener('click', () => {
    fetchData()
        .then(data => {
            const phonetica = data[0].phonetics
            const phoneticaAudio = phonetica.find(e => e.audio != '')
            const music = new Audio(phoneticaAudio.audio)
            music.play()
        })
        .catch(e => error())
})