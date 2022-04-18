import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink,Link } from 'react-router-dom';
import { getSanpham } from '../Service/sanphamService';
import { deletesp } from '../Service/sanphamService';

class ListspAdmin extends React.Component {

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
      
     
       
       
       async function deleteop(id,props) {
                 alert(id)
                let result =await fetch("/deleteSanpham/"+id,{
                    method:'DELETE'
                });
                result =await result.json();
                console.warn('delete',result)
                window.location.href="/admin";
         
              
        }
       
        return (








            
            <div class="row">
                
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                              

                                
                                <div class="col-4">

            <img src={item.IMG} alt={item.IMG}/>
            <Link to={`/Detail/${item._id}`} >{item.TenSP}</Link>
            <Link to={`/update/${item._id}`} >update</Link>
           <button onClick={()=>deleteop(item._id)}>Xóa</button>
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

export default ListspAdmin;