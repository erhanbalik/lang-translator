

const TranslateBtn = ({langCode}) => {

    const getText = () => {
        // When click translate button get api and translate text
        const text = document.querySelector('textarea').value;
        const translated = document.querySelector('.translated');
        let urlApi = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${langCode === 'en' ? 'en' : 'tr'}|${langCode === 'en' ? 'tr' : 'en'}`;
        fetch(urlApi).then(res => res.json()).then(data => {
            const resultText = data.responseData.translatedText;
            translated.value = resultText;
        })
    }
  return (
    <div className='w-96'>
        <button className="w-full h-10 rounded bg-sky-500 text-lg" onClick={getText}>Translate</button>
    </div>
  )
}

export default TranslateBtn