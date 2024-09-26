import React from 'react';
import "../CSS/time.css";
import { useState, useEffect } from 'react';

export default function Time_Styler() {
  const [data, setData] = useState([
    {"id": 1, 
    "img": "https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/345203964_750310450136735_4632332013703780935_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=V59gu_DAcKkAX9iRMkd&_nc_ht=scontent.fccu19-1.fna&oh=00_AfAKCmFaLFUYNkUleIK2GKOPZdOxDTqVebsz9Hbv3badSQ&oe=645963E2",
    "name": "John Abraham"}, 
    {"id": 2, 
    "img": "https://images.unsplash.com/photo-1523278669709-c05da80b6a65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", 
    "name": "Bruce Willis"},
    {"id": 3, 
    "img": "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": "Henry Cavill"}, 
    {"id": 4, 
    "img": "https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/345191823_1379021516213118_2354869853384058280_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=kvU2v5kB8DgAX-DxJbi&_nc_ht=scontent.fccu19-1.fna&oh=00_AfA2ZSA_2GD_qZjbKEEfAzbF98xUKyOBcntdRYb4BjuPkw&oe=645984CC", 
    "name": "Adhuna Bhabani"},
    {"id": 5, 
    "img": "https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/344766997_939717803666469_1739620335183770516_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=kuzHv3mXFewAX-UCJNv&_nc_ht=scontent.fccu19-1.fna&oh=00_AfBpvsAyfKPreImTKfJdh4sbncZ88KwGzA2zOQp9pSodeg&oe=64591AD6",
    "name": "Dilshad Pastakia"}, 
    {"id": 6, 
    "img": "https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/345285987_257325720019922_6655493173682729698_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=t_T6hgkw_5MAX80ZUZ6&_nc_oc=AQlykBSrKVAzPwIO-223m0cvXaTzCTguKWjUv230crKWZFDGgDrfygzpPNWPnqpgWBg&_nc_ht=scontent.fccu19-1.fna&oh=00_AfCYXpeTxqwY73pba4uevsMOVa5ZjssUn_YZOhbHY7tIfg&oe=6457E25E", 
    "name": "Jawed Habib"},
    {"id": 7, 
    "img": "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": "abc"}, 
    {"id": 8, 
    "img": "https://images.unsplash.com/photo-1523278669709-c05da80b6a65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", 
    "name": "EFG"}
  ])
  const [barberName, setBarberName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  // useEffect(() => {
  //   fetch(``)
  //   .then((res)=> res.json())
  //   .then((dataF)=> {
  //     setData(dataF)
  //   })
  // }, [data])
  
  document.title = 'Time_Styler'
  return (
    <div className='Time_Style_main'>
    <div className='time_1st'>
      <video class="standard" autoplay="true" muted loop src="https://www.zoylee.com/assets/video/home-video/banner-video.mp4" type="video/mp4"></video>
    </div>
    <div className='Time_Style_page'>
      
      <div className='wid90'>
        
        <div className='white'>
          <div>
            <input type="text" id='Barber' placeholder='Barber Name' defaultValue={barberName} />
            <input type="date" id='date' onChange={(e)=> {
              setDate(e.target.value)
            }}/>
            <select name="" id="time" onChange={(e)=>{
              setTime(e.target.value)
              console.log(time)
            }}>
              <option value="*" id='dull'>Select Your Time Slot</option>
              <option value="a">10:00 AM &nbsp;{`- Not Available`}</option>
              <option value="b">10:30 AM &nbsp;{'- Available'}</option>
              <option value="c">11:00 AM &nbsp;{'- Available'}</option>
              <option value="d">11:30 AM &nbsp;{'- Available'}</option>
              <option value="">12:00 PM &nbsp;{'- Available'}</option>
              <option value="">12:30 PM &nbsp;{'- Not Available'}</option>
              <option value="">13:00 PM &nbsp;{'- Not Available'}</option>
              <option value="">13:30 PM &nbsp;{'- Not Available'}</option>
              <option value="">14:00 PM &nbsp;{'- Not Available'}</option>
              <option value="">14:30 PM &nbsp;{'- Available'}</option>
              <option value="">15:00 PM &nbsp;{'- Available'}</option>
              <option value="">15:30 PM &nbsp;{'- Available'}</option>
              <option value="">16:00 PM &nbsp;{'- Available'}</option>
              <option value="">16:30 PM &nbsp;{'- Available'}</option>
              <option value="">17:00 PM &nbsp;{'- Available'}</option>
              <option value="">17:30 PM &nbsp;{'- Available'}</option>
            </select>
          </div>
          <button onClick={()=>{
            // && 
            if(time=='' && barberName=='') {
              alert('Please select your Date, Time & your Barber')
              return;console.log(time) ;
            }
            else if(barberName=='') {
              alert('Please select Barber')
              return;
            }
            else if (date==''){
              alert('Please select your Date')
            }
            else if (time=='') {
              alert('Please select your Time')
            }
            else {
              
              console.log(barberName, time, date)
            }
          }}>Book Appointment</button>
        </div>
        <div className='inside_wid90'>
          {
            data.map((ele)=>{
              return (
                <div key={ele.id} className='barber_card'>
                  <div className='barber_img_div'>
                    <img src={ele.img} alt="" />
                  </div>
                  <p>{ele.name}</p>
                  <button onClick={(e)=>{
                    setBarberName(ele.name)
                  }}>SELECT</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </div>
  )
}
