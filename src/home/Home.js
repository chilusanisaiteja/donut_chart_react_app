import './Home.css';
import React,{useState} from 'react';
import DonutChart from 'react-donut-chart';


const Home = () => {

  const [grossearnings,setgrossearnings] = useState(1000);
  const [dalalearnings,setdalalearnings] = useState(300);
  const [traderearnings,settraderearnings] = useState(300);
  const [miscfees,setmiscfees] = useState(300);
  const [referralearnings,setreferralearnings] = useState(100);
  const [slider1,setslider1]=useState(0);
  const [slider2, setslider2]=useState(0);



  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    setreferralearnings(grossearnings/10);
    setdalalearnings((0.3*(grossearnings))-slider1);
    settraderearnings((0.3*(grossearnings))-(-slider1)-(-slider2));
    setmiscfees((0.3*(grossearnings))-slider2);
  }


  return (
    <div className="home">
       <div className="leftelement">
        <form onClick={handlesubmit}>
        <div className="gross">
        <label>Gross Earnings: </label>
        <input type="number" value={grossearnings} onChange={(e)=>setgrossearnings(e.target.value)} placeholder='Enter Number'/>
        </div>
        <div className="referral">
            <label>Slider1 %: </label>
            <input type="number" value={slider1} onChange={(e)=>setslider1(e.target.value)} placeholder='Enter Number' />
        </div>
        <div className="referral">
            <label>Slider2 %: </label>
            <input type="number" value={slider2} onChange={(e)=>setslider2(e.target.value)} placeholder='Enter Number' />
        </div>
        <button className="referral" type="submit">Submit</button>
        </form>
       </div>
       <div className="rightelement">
        <div className="circle">
        <DonutChart
        className='donutchart'

  data={[
    {
      label: 'Dalalearnings',
      value: dalalearnings,
    },
    {
      label: 'Traderearnings',
      value: traderearnings,
    },
    {
      label:"Miscfees",
      value:miscfees,
    },
    {
      label:"Referralearnings",
      value:referralearnings,
    }
  ]}/>
        </div>
       </div>
    </div>
  )
}

export default Home
