import React, { Component ,useState} from 'react'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../actions';
import { adoder } from '../Service/OderServices';
import Message from './Message';
function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart,props}){
   
    
  //  console.log(items)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    const [oder, setOder] = useState({
        tenkh: '',
        diachi: '',
        sdt:'',
        mail:'',
      
        // masp:'',
        // tensp:'',
        // gia:'',
        // soluong:'',
    
       
      });

      const [message, setMessage] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    const newoder = { ...oder };
    newoder[e.target.name] = e.target.value;
    setOder(newoder);
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    {
        ListCart.map((item)=>{
            const variable = {
                TenKH: oder.tenkh,
                Diachi: oder.diachi,
                Sdt:oder.sdt,
                Mail:oder.mail,
              
                Masp:item.id,
                TenSP:item.name,
                Gia:item.price,
                Soluong:item.quantity,
             
             };
             adoder(variable).then((data) => {
                const { message } = data;
                setMessage(message);
        
                if (!message.msgError) {
                  setMessage(message);
                  setTimeout(() => {
<<<<<<< HEAD
                  
=======
                   
>>>>>>> b37ea14b0cf3d9f9c4faaf0795ea3adac80c3af1
                  }, 2000);
                }
              });

        })
    }
   

  
   
  
  };

    return(
        
        <div className="row">
            <h1>Gi??? H??ng C???a B???n</h1>
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>S???n Ph???m</th>
                        <th>T??n s???n ph???m</th>
                        <th>Gi??</th>
                        <th>S??? l?????ng</th>
                        <th>Th??nh ti???n</th>
                        <th>X??a s???n ph???m</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>  
                            <td></td>  
                            <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
                            <td>{item.name}</td>
                            <td>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VN??</td>
                            
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)} VN??</td>
                            <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="6"><h5>T???ng Gi??:</h5></td>
                    <td>{Number(TotalCart).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                </tr>
                </tbody>
              
            </table>
            
            </div>
            <div class="col mb-2">
                <div class="row">
                    <div class="col-sm-12  col-md-6">

                    <ul class="trigger-btn" data-toggle="modal"><NavLink to="/" class="btn btn-lg btn-block btn-success text-uppercase">Ti???p t???c mua s???m</NavLink></ul>

                    </div>
                    <div class="col-sm-12 col-md-6 text-right">
                        <a href="#myModal" class="trigger-btn" data-toggle="modal"> <button class="btn btn-lg btn-block btn-success text-uppercase">Thanh To??n</button></a>
                    </div>
                </div>
            </div>

            <div id="myModal" class="modal fade">
                <div class="modal-dialog modal-login">
                    <div class="modal-content">
                    {message ? <Message message={message} /> : null}
                        <form  id="contactForm"
                     name="sentMessage"
                         noValidate="novalidate"
                            onSubmit={onSubmit}>
                            <div class="modal-header">
                                <h1 class="modal-title">Thanh to??n</h1>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>

                            <div class="modal-body">
                                <div class="form-group">
                                    <label>?????a ch??? giao h??ng</label>
                                    <input   
                    type="text"
                   
                    autoFocus={true}
                    value={oder.Diachi}
                    onChange={onChange}  name="diachi"  class="form-control"/>  
                                    <div class="form-group">
                                        <label>H??? T??n</label>
                                        <input  type="text"
                   
                   autoFocus={true}
                   value={oder.TenKH}
                   onChange={onChange}  name="tenkh" class="form-control"/>
                                    </div>

                                    <div class="form-group">
                                        <label>S??T</label>
                                        <input  type="text"
                   
                   autoFocus={true}
                   value={oder.Sdt}
                   onChange={onChange}  name="sdt" class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        <label>Mail</label>
                                        <input  type="text"
                   
                   autoFocus={true}
                   value={oder.Mail}
                   onChange={onChange}  name="mail"  class="form-control" />
                                    </div>
                                </div>
                 
                                <div class="modal-footer justify-content-between">
                                    <input  id="sendMessageButton"
                  type="submit" class="btn btn-primary" value="Thanh To??n"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
  //  console.log(state)
    return{
        items:state._todoProduct
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
