import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { getSanpham } from '../Service/sanphamService';

class Listsp extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
       //  let res = await axios.get('/getSanpham');


         getSanpham().then((data) => {
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
                              

                                
                                <div class="col-4">

            <img src="https://th.bing.com/th/id/R.0ecb587227caf0b438e9a43e3175fc5f?rik=GyBkcHTVYn07LA&riu=http%3a%2f%2fphutungxehonda.com%2fupload%2fsanpham%2fmu_ga1l-5812.JPG&ehk=SsCkYBzcPckZ0QoZpuEjM4O6F%2bHWZtz8JMLRYTe50mg%3d&risl=&pid=ImgRaw&r=0"/>
            <NavLink to="/Detail" >{item.TenSP}</NavLink>
            <h4 type="color:red">{item.Gia}</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-0"></i>



            </div>
            <div class="socials-share">
    <a class="bg-facebook"  href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/All-RacingShop-106377424321048/?ref=pages_you_manage" target="_blank"><span class="fab fa-facebook"></span> Share</a>
    <a class="bg-email"   href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=&body=https://www.facebook.com/All-RacingShop-106377424321048/?ref=pages_you_manage" target="_blank"><span class="fa fa-envelope"></span> Gmail</a>
</div>
        </div>
        
                            )
                        })
                    }

</div>

          
        )
    }
}

export default Listsp;