import './chat-messages.style.scss'


const ChatMessages = () => {


   return (
      <div className='chat-messages z-3 '>

         <div className='chat-container pb-2'>

            <div className='incoming my-3'>
               <div className='message-in d-flex justify-content-start w-100'>
                  <div className='text-wrapper'>
                     <span className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam venenatis tortor sit amet mi tincidunt, ut dictum dolor accumsan. 
                        Aliquam scelerisque sagittis molestie. Proin ac diam dignissim, varius enim non, iaculis est. 
                        Etiam nec iaculis eros. Vivamus gravida venenatis sollicitudin. fduybuaf aubduyf afyuyubfttrr
                     </span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>
            </div>

            <div className='outgoing my-2'>
               <div className='message-out d-flex justify-content-end w-100'>
                  <div className='text-wrapper d-flex'>
                     <span className='text'>
                        Heyyy
                     </span>
                     <span className='span'></span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>

               <div className='message-out d-flex justify-content-end w-100'>
                  <div className='text-wrapper d-flex'>
                     <span className='text'>
                        Good morning
                     </span>
                     <span className='span'></span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>

               <div className='message-out d-flex justify-content-end w-100'>
                  <div className='text-wrapper d-flex'>
                     <span className='text'>
                        How are you doing today??
                     </span>
                     <span className='span'></span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>
            </div>

            <div className='incoming my-3'>
               <div className='message-in d-flex justify-content-start w-100'>
                  <div className='text-wrapper'>
                     <span className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin ac diam dignissim, varius enim non, iaculis est. 
                        Etiam nec iaculis eros. Vivamus gravida venenatis sollicitudin.
                     </span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>

               <div className='message-in d-flex justify-content-start w-100'>
                  <div className='text-wrapper'>
                     <span className='text'>
                     Nunc augue purus, rutrum eget nulla ac, interdum tincidunt ex. 
                     Fusce accumsan erat quam.
                     </span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>
            </div>

            <div className='outgoing my-2'>
               <div className='message-out d-flex justify-content-end w-100'>
                  <div className='text-wrapper d-flex'>
                     <span className='text'>
                     Pellentesque euismod lectus quis ipsum eleifend, at mollis magna bibendum. Phasellus id sem quis mauris efficitur mattis. Donec et sollicitudin risus. Praesent imperdiet velit eros, nec convallis lorem commodo id. Pellentesque tellus ante, iaculis vitae iaculis finibus, tincidunt a ex
                     </span>
                     <span className='span'></span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>
               <div className='message-out d-flex justify-content-end w-100'>
                  <div className='text-wrapper d-flex'>
                     <span className='text'>
                        Thats the thing ive been tryna talk to you about, like you getttt??
                     </span>
                     <span className='span'></span>
                     <div className='text-realtime'>11:00 pm</div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default ChatMessages