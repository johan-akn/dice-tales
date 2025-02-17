import { useState } from 'react';
import './Dice.css'


const initialEmojiList = [
    "👑", "🏰", "🐉", "⚔️", "🛡️", "🧙‍♂️", "🧝‍♀️", "🧟‍♂️", "🧛‍♂️", "🧚‍♀️",
    "🦄", "🐺", "🦅", "🦉", "🦇", "🐍", "🐢", "🐲", "🌟", "🔥", "💧", "🌪️",
    "🌈", "🌙", "☀️", "🌍", "🌌", "🌠", "⚡", "💀", "👻", "🎃", "🕸️", "🕷️",
    "🦠", "🧬", "🧪", "🧫", "🧲", "⚙️", "🔮", "📜", "📖", "🗡️", "🏹", "🪓",
    "🔨", "🛠️", "⛏️", "🪚", "🗿", "🏺", "🧵", "🧶", "🪡", "🪢", "🧩", "🎲",
    "🃏", "🎴", "🎭", "🎨", "🎤", "🎧", "🎼", "🎹", "🎷", "🎺", "🎸", "🎻",
    "🥁", "📯", "🎬", "🎥", "📽️", "📺", "📻", "📡", "📞", "☎️", "📟", "📠",
    "📱", "💻", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽", "💾", "💿", "📀",
    "🧮", "📷", "📸", "📹", "📼", "🔍", "🔎", "🔬", "🔭", "🚀", "🛸", "🛰️",
    "🌕", "🪐", "☄️", "🎇", "🎆", "🏕️", "⛺", "🏜️", "🏝️", "🏞️", "🌋", "⛰️",
    "🏔️", "🗻", "🏗️", "🏛️", "🏟️", "🏯", "🕌", "🛕", "⛪", "🕍", "🕋", "⛩️",
    "🛤️", "🚂", "🚆", "🚇", "🚊", "🚉", "🛥️", "🚢", "⚓", "🪙", "💰", "💎",
    "🪄", "🩸", "⚗️", "🌡️", "🔑", "🗝️", "🚪", "🛏️", "🪑", "🛋️", "🖼️", "🪞",
    "🛎️", "🕰️", "🔦", "🏮", "🕯️", "🧯", "🔗", "⛓️", "🪤", "🧰", "🪜", "⚖️",
    "🏹", "🪃", "🔔", "🪕", "🥁", "🎺", "🎼", "🎻", "🛡️", "🗡️", "📜", "🔮",
    "🩻", "📡", "🎖️", "🔱", "🕳️", "⚔️", "🕵️", "🛠️", "🏹", "🔮", "📜", "🦄",
    "🐉", "🦅", "🐺", "🐍", "🦇", "💀", "🧛", "🧙", "🧞", "🧜", "🧚", "🦾",
    "📕", "📘", "📙", "📚", "🛎️", "🎩", "🕶️", "🗿", "🔦", "🕰️", "🏺", "💎",
    "🧛‍♀️", "🧛‍♂️", "🧝‍♂️", "🧝‍♀️", "🧙‍♂️", "🧙‍♀️", "🧞‍♂️", "🧞‍♀️", "🧜‍♂️", "🧜‍♀️",
    "🐲", "🐉", "🦄", "🦅", "🦉", "🦇", "🐍", "🐺", "🦾", "🧌", "🦑", "👹",
    "👺", "🏰", "🏯", "🕌", "🕍", "🏛️", "⛩️", "🗼", "🗿", "🏗️", "🏟️", "🏕️",
    "🏚️", "🌋", "🏜️", "🏝️", "⛰️", "🌄", "🌌", "🌠", "🌟", "☄️", "🪐", "🌕",
    "🚀", "🏹", "🔮", "🔔", "👻", "🎃", "🦇", "💀", "🕸️", "🕷️", "🦠", "🧬",
    "🦑", "🐍", "⚡", "🔥", "🌫️", "🩸", "🩻", "📡", "🕳️", "🎭", "📜", "📖",
    "🛡️", "🗡️", "🎲", "🔔", "🦜", "🦩", "🐉", "🪄", "🏆", "🏴‍☠️", "💣", "🔫",
    "🛡", "🦠", "🧙‍♂️", "⚗️", "📖", "🎩", "🪄", "🔮", "🕰", "🧪", "💎", "📜",
    "🔑", "🦉", "🎖", "🏺", "🏹", "🦷", "🗝", "🕵️‍♂️", "🎭", "🎲", "🎵", "📯",
    "🪆", "⚖", "🏆", "🏴‍☠️", "🦜", "🐚", "🪙", "🦠", "🦅", "🦇", "⚔", "🎭"
];


function Dice() {
        const [emojiList, setEmojiList] = useState([...initialEmojiList])
        const [selectedEmoji, setSelectedEmoji] = useState('')
        const [history, setHistory] = useState([])

        function RollDice() {
            const randomIndex = Math.floor(Math.random() * emojiList.length)
            const chosenEmoji = emojiList[randomIndex];

            setTimeout( () => {
                setSelectedEmoji(chosenEmoji)
                    setHistory([...history, chosenEmoji].slice(-10));
                    emojiList.splice(randomIndex, 1)
        }, 50)}


        function ResetAll() {
            setEmojiList([...initialEmojiList])
            setSelectedEmoji('')
            setHistory([])
        }
        function ShuffleButton() {

            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const newHistory = [...history]
                    const newEmojiList = [...emojiList]
                    const selectedEmojis = []

                    for (let i = 0; i < 10; i++) {
                        const randomIndex = Math.floor(Math.random() * newEmojiList.length)
                        const chosenEmoji = newEmojiList.splice(randomIndex, 1)[0]
                        selectedEmojis.push(chosenEmoji)
                    }
                    setSelectedEmoji('')
                    setHistory([...newHistory, ...selectedEmojis].slice(-10))
                    setEmojiList(newEmojiList)
                }, i * 200); 
            }
        }
        

 return (
   
    
    <div>
        <div className="dice-container">
                <h1>Dice Tales</h1>

                    <p onClick={RollDice} className='rollButton'>
                        {selectedEmoji || '🎲'}
                    </p>

                    <div className='extra-buttons'>
                        <p onClick={ResetAll} className='extraButton'>
                            🔄
                        </p>

                        <p onClick={ShuffleButton} className='extraButton'>
                            🔀
                        </p>
                    </div>
                
                    <h2 className='history-title'>History:</h2>
                    <div className='diceHistory'>
                        {history.join('')}
                        
                    </div>
        </div>
    </div>
  )
}


export default Dice
