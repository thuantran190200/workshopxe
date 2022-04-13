import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink,Link } from 'react-router-dom';
import { getSanpham } from '../Service/sanphamService';
import { getOder } from '../Service/OderServices';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
class Listsp extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
       //  let res = await axios.get('/getSanpham');


         getOder().then((data) => {
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
           
<div class="grid_10">
	<div class="box round first grid">
		<h2>Danh Sách oder</h2>
		<div class="block">
		
        

			<a href="http://localhost/webxe/webPhpXe/wavefire/admin/admin/index.php">Trang chủ</a>
           
			<table id="emp"  class="data display datatable">
				<thead>
					<tr>
						<th>idoder</th>
						
						<th>Địa chỉ</th>
						<th>Tên KH</th>
						<th>Sđt</th>
						<th>mail</th>

                       
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Mã sản phẩm</th>
                    
					
					</tr>
				</thead>

			
				
                   
                {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            
                            return (
                              

                                <tbody>
                               
           
           
                                <td>{item._id}</td>
                                
                                <td>{item.Diachi}</td>
                                <td>{item.TenKH}</td>
                                <td>{item.Sdt}</td>
                                <td>{item.Mail}</td>
                              
                                <td>{item.Soluong}</td>
                                <td>{item.Gia}</td>
                                <td>{item.Masp}</td>
              

                                </tbody>
        
                            )
                        })
                    }
                    
                   
                   
                 
              
        
							
				
			</table>


            <div>  
                                        <ReactHTMLTableToExcel  
                                                className="btn btn-info"  
                                                table="emp"  
                                                filename="ReportExcel"  
                                                sheet="Sheet"  
                                                buttonText="Export excel" ></ReactHTMLTableToExcel>  
                                </div>  
	
		</div>
	</div>
</div>

          
        )
    }
}

export default Listsp;