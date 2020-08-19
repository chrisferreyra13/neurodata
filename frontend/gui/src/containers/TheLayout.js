import React from 'react'
import {
  TheContentinicio,
    TheFooter,
  //TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
            <div className="c-wrapper">
       {/* <TheHeader/> */}
        <div className="c-body">
          <TheContentinicio/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
