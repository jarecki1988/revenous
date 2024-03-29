import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';



class BusinessList extends React.Component {
    render(){
        return (
            <div className="BusinessList">
                {
                this.props.businesses.map((business, index)=> { 
                return <Business key={index} business={business} />;
             })
            }   
                </div>
             );
        }
}

export default BusinessList;