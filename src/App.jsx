import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [user, setUser] = useState({
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smitham",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    username: "atuny0",
    password: "9uQFF1Lh",
    birthDate: "2000-12-25",
    image: "https://robohash.org/Terry.png?set=set4",
    bloodGroup: "A-",
    height: 189,
    weight: 75.4,
    eyeColor: "Green",
    hair: {
    color: "Black",
    type: "Strands"
    },
    domain: "slashdot.org",
    ip: "117.29.86.254",
    address: {
    address: "1745 T Street Southeast",
    city: "Washington",
    coordinates: {
    lat: 38.867033,
    lng: -76.979235
    },
    postalCode: "20020",
    state: "DC"
    },
    macAddress: "13:69:BA:56:A3:74",
    university: "Capitol University",
    bank: {
    cardExpire: "06/22",
    cardNumber: "50380955204220685",
    cardType: "maestro",
    currency: "Peso",
    iban: "NO17 0695 2754 967"
    },
    company: {
    address: {
    address: "629 Debbie Drive",
    city: "Nashville",
    coordinates: {
    lat: 36.208114,
    lng: -86.58621199999999
    },
    postalCode: "37076",
    state: "TN"
    },
    department: "Marketing",
    name: "Blanda-O'Keefe",
    title: "Help Desk Operator"
    },
    ein: "20-9487066",
    ssn: "661-64-2976",
    userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
    crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)"
    }
    })


  const getUser = () => {
    getData()
    console.log(user);
  }
  const getData = async () => {
    await axios.get('https://dummyjson.com/users').then(response => {
      setUser(response.data.users[Math.floor(Math.random() * 30)])
    })
  }
  // useEffect(() => {
  //   getUser()
  // }, [])



  return (
    <>




      <div style={{ height: '100vh', width: '100%' }} className="container d-flex align-items-center justify-content-center">


        <div className="border shadow d-flex align-items-center justify-content-center p-1" style={{ height: '600px', width: '400px' }}>

          <div style={{ height: '90%', width: '90%' }} className="border border-warning">

            <img src={user?.image} className='m-4' style={{ height: '120px', width: '120px', backgroundColor: 'pink', borderRadius: '50%', top: '50%' }} />



            <button onClick={getUser} className="btn btn-warning ms-5 text-light fw-bolder">GET NEXT</button>

            <br />
            <b className='text-dark ms-3'>{user?.firstName} {user?.lastName}<br /></b>
            <div className="row p-3">
              <div className="col-4"><b className='text-secondary'>Address :<br /></b>{user?.address.address}</div>
              <div className="col-4"><b className='text-secondary'>City :<br /></b>{user?.address.city}</div>
              <div className="col-4"><b className='text-secondary'>Postal Code:<br /></b>{user?.address.postalCode}</div>
            </div>

            <br />
            <p className='text-secondary ps-5'><i class="fa-solid fa-envelope"></i> : <b>{user?.email}</b></p>

            <div className="row p-3">
              <div className="col-7"><i class="fa-solid fa-phone"></i> {user?.phone}</div>
              <div className="col-5"><i class="fa-solid fa-cake-candles"></i> {user?.birthDate}</div>
            </div>

            <div className="row ">
              <div className="col-12 ps-5 ms-5">
              <i class="fa-solid fa-building"></i> :{user?.company.address.address}
              </div>
            </div>



          </div></div>



      </div>
      {/* // <button onClick={getUser}></button> */}
      {/* <div className="container d-flex align-item-center ">
        <div className="row direction-col " style={{ backgroundColor: 'red', width: '500px', height: '500px' }}>
          <div className="col-lg-6 border">
            awd
          </div>
          <div className="col-lg-6 border">
            awdawd
            <button onClick={getUser} className="btn btn-info">GET USER</button>
          </div>
          
        </div>

      </div> */}


    </>
  )
}

export default App
