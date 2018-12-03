import React from 'react'
import {Link} from 'react-router-dom'


const ListItem = ({description,amount,createdAt,id,dispatch}) => ( // we destructure all props including dispatch
    <div>
     <Link to = {`/edit/${id}`}>{description}</Link>
     <p>{amount} </p>
     <p>{createdAt} </p>  
     <hr/>  
    </div>
)

// sometimes we dont need values from state but only possibility to dispatch actions. In order to do that we need to connect our component to redux store.

export default ListItem
