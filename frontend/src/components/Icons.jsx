import whatsapp from '../assets/whatsapp.png'
import call from '../assets/call.png'
import chatbot from '../assets/chatbot.png'
const Icons = () => {
  return (
    <div className="me-lg-3">
            <div className="position-fixed z-3 bottom-0 end-0 icon-container">
       <div className="d-lg-flex gap-lg-2 justify-content-center">
        <div className="align-items-center justify-content-center p-2 rounded-pill d-flex bg-light mt-2 mt-lg-0">
        <img src={whatsapp} alt="" />
        </div>
        
        <img id='call' className='mt-2 mt-lg-0' src={call} alt="" />
    
        <div id='chatbot' className="align-itemscenter justify-content-center p-2 rounded-pill d-flex bg-light mt-2 mt-lg-0">
        <img src={chatbot} alt="" />
        </div>
       </div>
    </div>
    </div>
  )
}

export default Icons