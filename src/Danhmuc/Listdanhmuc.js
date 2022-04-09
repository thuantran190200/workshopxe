import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../Components/Cart';
import { NavLink } from 'react-router-dom';
import { getDanhmuc } from '../Service/danhmucService';

class Listsp extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
       //  let res = await axios.get('/getSanpham');


         getDanhmuc().then((data) => {
            setTimeout(() => {
              if (data || data.success) {
                const { existProfile } = data;
                this.setState({
                    listUsers: data && data && data ? data : []
                   
                })
                console.log('lôp',data)
              }
            }, 750);
          });
      
      
    }

    render() {
        let { listUsers } = this.state;
        
        return (








            
            <div class="row">
                
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <ul class="clear">
                               
                              
                                <li><a href="pages/mam.html">{item.TenDM}</a></li>
                                
                              </ul>

                            )
                        })
                    }
                    <ul><NavLink to="/Cart">Cart</NavLink></ul>
</div>

          
        )
    }
}

export default Listsp;