import React from 'react'
import ReactDOM from 'react-dom'




const Info = (props) => (
    <div>
    <h1>Your account</h1>
    <p> Content: {props.info} </p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {

return (props) => (
    <div>
     { props.isLogged ? <WrappedComponent {...props}/> : <p> You are not logged in </p> }       
    </div>
)
}

const Auth = requireAuthentication(Info)


// requireAuthentication is a function that takes regular component as a argument and returns a high order component.
// In hoc we conditionally render that regular component.




// ReactDOM.render(<Info info = {'These are the details'}/>,document.querySelector('#app'))
ReactDOM.render(<Auth isLogged = {true} info = {'details'}/>,document.querySelector('#app'))