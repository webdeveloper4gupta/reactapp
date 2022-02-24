import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        let aman=word.toLowerCase();
        return aman.charAt(0).toUpperCase()+aman.slice(1);
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {props.alert.msg}:{capitalize(props.alert.type)}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}

export default Alert
