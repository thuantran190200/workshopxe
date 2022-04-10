import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from '../actions'
import {connect} from 'react-redux';
import { NavLink,Link } from 'react-router-dom';

export class Product extends Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    
    render() {
        const {_getSanpham} = this.props._getSanpham;
        if(_getSanpham.length>0){
           
           return (
                <div class="row">
                    
                        
                            {
                                _getSanpham.map((item,index)=>(
                                    <div class="col-4">
                                    
                                        <img src={item.IMG} alt={item.IMG}/>
                                        <h5><Link to={`/Detail/${item._id}`} >{item.TenSP}</Link></h5>
                                        <h4 type="color:red">{item.Gia}</h4>
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-0"></i>
                                        </div>
                                        <span className="badge badge-primary" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                                        <div class="socials-share">
                                            <a class="bg-facebook"  href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/All-RacingShop-106377424321048/?ref=pages_you_manage" target="_blank"><span class="fab fa-facebook"></span> Share</a>
                                            <a class="bg-email"   href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=&body=https://www.facebook.com/All-RacingShop-106377424321048/?ref=pages_you_manage" target="_blank"><span class="fa fa-envelope"></span> Gmail</a>
                                        </div>
                                    </div>
                                    
                                ))
                            }
                        
                    
                </div>
            ) 

        }
        console.log('getsanpham',_getSanpham);
            console.log('data', this.componentDidMount);

        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
        _getSanpham: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
