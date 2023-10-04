import React from 'react'
import AirvendTestimonal from './AirvendTestimonal'
import AirpayTestimonal from './AirpayTestimonal'
import Viewall from './Viewall'
import AirgateTestimonal from './AirgateTestimonal'

const SidebarItems = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-between">
        <Viewall/>
        <AirvendTestimonal/>
        <AirpayTestimonal/>
        <AirgateTestimonal/>

    </div>
  )
}

export default SidebarItems;