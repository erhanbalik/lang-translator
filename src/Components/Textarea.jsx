import React from 'react'
import TranslateBtn from './TranslateBtn'

const Textarea = () => {
  return (
    <div>
        <div>
            <textarea className="textarea resize-none" placeholder="Type here..."></textarea>
            <textarea className="textarea resize-none" placeholder="Translate" readOnly disabled></textarea>
        </div>

        <TranslateBtn/>
    </div>
  )
}

export default Textarea