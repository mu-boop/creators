import Header from "../component/Header"
function Contact(){
    return(
        <div>
            <Header />
            <div className='w-100'>
                <div className='col-md-7 contact-head'>
                <h1 className='text-light'>Let's Work <span className='font-bold'>Together Like a Team</span></h1>
            </div>
            
            </div>
            <div className='d-flex'>
            <div className='col-md-6 border-right-color'>
            <h1 className='text-center my-3'>Contact Us</h1>
            <input className='p-2 w-100 rounded mt-3 border' placeholder='Enter your Name' />
            <input className='p-2 w-100 rounded mt-3 border' placeholder='Enter your Email' />
            <input className='p-2 w-100 rounded mt-3 border' placeholder='Enter your Phone Number' />
            <textarea className='p-2 w-100 rounded mt-3 border' rows='5'>Enter You Message</textarea>
            <button className='btn p-2 border rounded-pill w-25 mt-3 ml-3'>Submit</button>
            </div>
            <div className='col-md-6'>
                <h1 className='text-center my-3'>Find Us</h1>
            </div>
            </div>
            <div className='w-100 border-top mt-5 quate-area d-flex align-items-center justify-content-center'>
                <div><h1 className=' mt-4 text-light'>FEEL FREE TO GET QUATATIONS</h1>
                <button className='btn border ml-2 rounded-pill text-light my-3 '>Get Quatations</button></div>
            </div>
        </div>
    )
}

export default Contact;