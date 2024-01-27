import React, { useEffect, useState } from 'react'
import HomeCard from './HomeCard'
import axios from '../Axios'

function Home() {
  const [company, setCompany] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('company/').then((response) => {
      setCompany(response.data);

      // Extract unique locations from the company data
      const uniqueLocations = Array.from(
        new Set(response.data.map((comp) => comp.Location))
      );

      setLocations(uniqueLocations);

    });
  }, []);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className='pt-10'>
      <div>
        <div>
          <h1 className='text-4xl font-semibold text-center text-gray-800'>Heading</h1>
        </div>
        <div className='flex justify-center p-3 items-center'>
          <div className='max-w-3xl text-justify'>
            <p className='text-slate-600 font-semibold'>The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.</p>
          </div>
        </div>
        <div className='flex px-6'>
        <div>
          <select className="outline-none p-3 rounded-md w-[20rem] " onChange={handleLocationChange} value={selectedLocation} >
            <option value="">
              All Locations
            </option>
            {locations.sort().map((location,index) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        </div>
      </div>
      <div className='grid grid-cols-1  lg:grid-cols-3 gap-10 place-items-center px-9 pt-5 pb-5'>
      {company.map((comp, index) => (
        <>
          {selectedLocation ?
            <>
              {comp.Location === selectedLocation ?
                <div key={index} className=''>
                  <HomeCard data={comp} />
                </div> : null
              }
            </> :
              <HomeCard data={comp} />
            }
            
        </>
      ))}
      
      </div>
    </div>
  )
}

export default Home