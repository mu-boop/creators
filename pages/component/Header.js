import phone from '../images/phone.png'
import menubg from '../images/menubackground.jpg'
import {useState} from 'react'
function Header(){
        const [count , setCount] =useState(-1)
        let menuItems = ['Home','About','Contact','Portfolio','More']
    function showMenu(){
       let a = document.querySelector('.me-nu');
       if(a.classList.contains('show-items')){
           a.classList.remove('show-items')
           a.classList.add('hid')
       }else{
        a.classList.add('show-items')
        a.classList.remove('hid')
       }
    }

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
        <div className='header' >
            <nav className='navbar-custom d-flex'>
         <div className='col-md-5 text-light'>
          CreatorsForYou
         </div>
        <div className='col-md-7 d-flex'>
        <div className='col-md-3 '>
        <button onClick={()=>showForm()} className='quote btn rounded-pill border-class text-light'>Get Qoute</button>
        </div>
        <div className='col-md-6 '>
        <span className='call'><img src='https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=' width={30} height={30} />
        </span>
        <span className='call text-light ml-2 mt-1 font'>+923211231805</span>
        </div>
        <div className=''>
            <img onClick={()=>showMenu()} src={menubg}/>
        </div>
        </div>
      </nav>
      <div className='hid me-nu' styles={{ backgroundImage:`url(${menubg})` }}>
            <div>
            <ul>
                    <li className='animat1'><a href='#'>Home</a></li>
                    <li className='animat2'><a href='#'>About</a></li>
                    <li className='animat3'><a href='#'>Porfolio</a></li>
                    <li className='animat4'><a href='#'>Contact Us</a></li>
                    <li className='animat5'><a href='#'>More</a></li>
                </ul>
            </div>
            </div>
            <div className='w-100 head'></div>
        </div>
    )
}

export default Header;