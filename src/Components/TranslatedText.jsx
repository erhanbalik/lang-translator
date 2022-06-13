import {MdFileCopy, MdVolumeUp} from "react-icons/md";

const TranslatedText = ({lang}) => {

    const copyHandler = () => {
        navigator.clipboard.writeText(document.querySelector('.translated').value);
        alert('Copied to clipboard');
    }
    const speechHandler = () => {
        const text = document.querySelector('.translated');
        const utterance = new SpeechSynthesisUtterance(text.value);
        utterance.lang = 'tr-TR';
        speechSynthesis.speak(utterance);
    }
    return (
        <div className='flex flex-col items-center justify-center my-10'>
            <div>
                <textarea className="translated resize-none my-5 w-[25rem] h-[20rem] rounded-r p-2.5" disabled readOnly placeholder="Translate"></textarea>
            </div>
            <div className='w-full flex items-center justify-evenly'>
                <div>
                    <select className="selectTo w-44 h-10 rounded">
                        <option value="tr">{lang === 'English' ? 'Turkce' : 'English'}</option>
                    </select>
                </div>
                <div>
                    <button><MdVolumeUp className='text-2xl' onClick={speechHandler}/></button>
                    <button><MdFileCopy className='text-2xl mx-4' onClick={copyHandler} /></button>
                </div>
            </div>
        </div>
    )
}

export default TranslatedText;