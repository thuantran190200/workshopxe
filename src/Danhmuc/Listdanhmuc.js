import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../Components/Cart';
import { NavLink } from 'react-router-dom';
import { getDanhmuc } from '../Service/danhmucService';
import {connect} from 'react-redux'

class Listdanhmuc extends React.Component {

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
                    <ul><li className="nav-item"><NavLink to="/Cart" className="nav-link">Carts : {this.props.numberCart}</NavLink></li></ul>
</div>

          
        )
    }
}

const mapStateToProps = state =>{
  return{
      numberCart:state._todoProduct.numberCart
  }
}

export default connect(mapStateToProps,null)(Listdanhmuc);