// import React from 'react'
//
//  const SimplerComponent = (props) => {
//
//   return (
//     <div>I am just happy</div>
//   )
// }
// export default SimplerComponent
import React from 'react'

const SimplerComponent = props => <div onClick={props.handleClick}>'I am just happy'</div>

export default SimplerComponent
