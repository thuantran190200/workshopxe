
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function deletesp()
{
    const { id } = useParams
    const [product, setProduct] = useState

   
        axios.get(`/deleteSanpham/${id}`)
        .then(res => console.log(res.data))
   
    
    return <div>
ghgsd

    </div>
}
export default deletesp;