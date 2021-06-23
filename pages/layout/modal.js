function QuoteForm(){
  function showForm(){
    let a = document.querySelector('.quote-form');
    if(a.classList.contains('show-quote')){
        a.classList.remove('show-quote')
        a.classList.add('hid')
    }else{
     a.classList.add('show-quote')
     a.classList.remove('hid')
    }
}
    return(
        <div className='hid quote-form rounded shadow'>
          <div className='col-md-5 bg-dark'>
          </div>
          <div className='col-md-7'>
            <div className='w-100 p-2 border mt-4 rounded bg-light'>Select Service</div>
            <input type='text' className='w-100 p-2 mt-4 rounded border' placeholder='Enter name' />
            <input type='text' className='w-100 p-2 mt-4 rounded border' placeholder='Enter email' />
            <input type='text' className='w-100 p-2 mt-4 rounded border' placeholder='Enter Contact Information' />
            <textarea rows='4' className='mt-4 w-100'>Enter Your message</textarea>
         <div className='d-flex'>
         <div className='col-lg-6'><button onClick={()=>showForm()} className='btn btn-success w-100 my-4 p-2'>Send Message</button></div>
          <div className='col-lg-6'><button onClick={()=>showForm()} className='btn btn-danger w-100 my-4 p-2'>Close</button></div>
         </div>
          </div>
        </div>
    )

}

export default QuoteForm;