import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import 'numeral/locales/fr';

const ExpenseListItem = ( {id,description,amount,createdAt}) =>( 
    <div>
       {numeral.locale('fr')}
       <Link to={'/edit/'+id}><h2>{description}</h2></Link>
       <p>
       {numeral(amount/100).format('$ #,##0.00')} <br/>
        - <br/>
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>   

);


export default ExpenseListItem;