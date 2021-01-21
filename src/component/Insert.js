import React, { useState } from "react";
import axios from 'axios';

function Insert() {
    const [selectetdFile, setSelectedFile] = useState([]);
    const [fileBase64String, setFileBase64String] = useState("");

    const state = {
        image:''
    }


    const handleChangeImage = event => {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
        this.setState({ image: reader.result });
        };
    }

    const handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: 'themecobaan',
          image: state.image
        };

        const headers = { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3VuZGFuZ2Fua3VcL3B1YmxpY1wvYXBpXC9sb2dpbiIsImlhdCI6MTYxMTIyMjE0NiwiZXhwIjoxNjExMjI1NzQ2LCJuYmYiOjE2MTEyMjIxNDYsImp0aSI6Im03SGtsMFNmQ1JzejY0WloiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.2qlb_volTn1XNBWiozaSt0l8PqiHPa7-tZVe7hFdVVo'
        };
    
        axios.post(`localhost/undanganku/public/api/theme/create`,  user , { headers })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
  
    // encodeFileBase64(selectetdFile[0]);
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            {/* <input type="text" name="name" onChange={handleChangeName} /> */}
            <input type="file" id="input" onChange={handleChangeImage} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
}

export default Insert;