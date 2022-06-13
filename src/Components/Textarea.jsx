
import TranslateBtn from './TranslateBtn'
import Translate from './Translate';
import TranslatedText from "./TranslatedText";
import {useState} from 'react';

const Textarea = () => {

    const [lang, setLang] = useState('English');
    const [langCode, setLangCode] = useState('en');

  return (
    <div className='flex h-full flex-col items-center justify-center'>
        <h1 className='text-3xl uppercase text-white' >Translate</h1>
        <div className='flex flex-row items-center justify-center'>
            <Translate lang={lang} setLang={setLang} setLangCode={setLangCode} />
            <TranslatedText lang={lang} setLang={setLang} />
        </div>
        <TranslateBtn langCode={langCode}/>
    </div>
  )
}

export default Textarea