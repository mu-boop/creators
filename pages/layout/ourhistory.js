import background from '../images/historybg.jpg'
function History(){
    // observer = new IntersectionObserver((entries)=>{
    //     entries.forEach(entry => {
    //         if(entry.intersectionRatio > 0){
    //             entry.target.style.animation = 'history 1s ease-out' 
    //         }else{
    //             entry.target.style.animation = 'none'
    //         }
    //     })
    // })

    // images.forEach(image => {
    //     observer.observe(image)
    // })
    return(
        <div className='w-100 d-flex history'>
            <div className='col-md-6 mt-4'>
                <h1 className='history-head text-light text-center'>We Started from Adobe</h1>
                <p className='text-light mt-2 p-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <button className='btn history-btn text-light w-25 rounded-pill shadow border p-2 ml-4'>JOIN US</button>
            </div>
            <div className='col-md-6 '>
            <img className='h-100 w-100 historyimg' src='https://images.pexels.com/photos/6953872/pexels-photo-6953872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
        </div>
    )
}

export default History;