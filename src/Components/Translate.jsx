import {MdVolumeUp, MdFileCopy} from 'react-icons/md'
import {CgArrowsExchange} from "react-icons/cg";

const Translate = ({lang, setLang, setLangCode}) => {

    const changeHandler = () => {
        const toText = document.querySelector('.translated');
        const fromText = document.querySelector('.fromText');
        let tempText = fromText.value;
        fromText.value = toText.value;
        toText.value = tempText;
        // Change language for option
        setLang(lang === 'English' ? 'Turkish' : 'English');
        // Change langcode for speech
        setLangCode(lang === 'English' ? 'tr' : 'en');
    }

    const copyHandler = () => {
        // Copy text from toText to fromText
        navigator.clipboard.writeText(document.querySelector('.fromText').value);
        alert('Copied to clipboard');
    }

    const speechHandler = () => {
        // When click volume button speech will speak the text
        const text = document.querySelector('.fromText');
        const utterance = new SpeechSynthesisUtterance(text.value);
        utterance.lang = 'en-GB';
        speechSynthesis.speak(utterance);
    }
    return (
        <div className='flex flex-col items-center justify-center my-10'>
            <div>
                <textarea className="fromText resize-none my-5 w-[25rem] h-[20rem] rounded-l p-2.5" placeholder="Type here..."></textarea>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='ml-8'>
                    <button><MdVolumeUp className='text-2xl' onClick={speechHandler}/></button>
                    <button><MdFileCopy className='text-2xl mx-4' onClick={copyHandler}/></button>
                </div>
                <div>
                    <select className="selectFrom w-44 h-10 rounded">
                        <option value="en">{lang}</option>
                    </select>
                </div>
                <div onClick={changeHandler} >
                    <button className='bg-green-100 rounded text-3xl' >
                        <CgArrowsExchange />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Translate;