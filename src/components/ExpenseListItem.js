import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ListItem = ({description,amount,createdAt,id,dispatch}) => ( // we destructure all props including dispatch
    <div>
     <Link to = {`/edit/${id}`}>{description}</Link>
     <p>{numeral(amount).format('$0,0.00') } </p>
     <p>{moment(createdAt).format('Do,MMMM,YYYY')} </p>  
     <hr/>  
    </div>
)

// sometimes we dont need values from state but only possibility to dispatch actions. In order to do that we need to connect our component to redux store.

export default ListItem
