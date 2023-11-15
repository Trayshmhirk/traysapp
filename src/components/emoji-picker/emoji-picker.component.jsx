import './emoji-picker.style.scss'

import EmojiPicker from 'emoji-picker-react'
import { SkinTones } from 'emoji-picker-react'
import { EmojiStyle } from 'emoji-picker-react'

// import { useState } from 'react'


const EmojiPickerReact = () => {

   // const [message, setMessage] = useState(false);

   // const onEmojiClick = (event, emojiObject) => {
   //    // setMessage(message + emojiObject.emoji)
   // }

   return(
      <EmojiPicker 
         id
         // onEmojiClick={onEmojiClick}
         theme='dark'
         defaultSkinTone={SkinTones}
         width='100%'
         height='300px'
         previewConfig={{showPreview: false}}
         emojiStyle={EmojiStyle.APPLE}
         suggestedEmojisMode='recent'
      />
   )
   
}



export default EmojiPickerReact;

