import React from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';


export default class PersonList extends React.Component {
  state = {
    image: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

handleChangeImage = event => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
    this.setState({ image: reader.result });
    };
}

  handleSubmit = event => {
    event.preventDefault();

    var user = {
      theme: 'aaaaaaasaaa',
    //   image: 'data:image/png;base64,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RBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAEGEIAECEIQAAEYYAAEQYAgAQYQgAQIQhAAARhgAARBgCABBhCABAhCEAABGGAABEGAIAkM1ms/k/NQ+kkAsycx8AAAAASUVORK5CYII='
      image: this.state.image
    };

    
    let axiosConfig = {
        headers: {
            'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3VuZGFuZ2Fua3VcL3B1YmxpY1wvYXBpXC9sb2dpbiIsImlhdCI6MTYxMTIyMjE0NiwiZXhwIjoxNjExMjI1NzQ2LCJuYmYiOjE2MTEyMjIxNDYsImp0aSI6Im03SGtsMFNmQ1JzejY0WloiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.2qlb_volTn1XNBWiozaSt0l8PqiHPa7-tZVe7hFdVVo',
            'Content-Type' : 'application/json'
        }
      };
      


    axios.post(`http://localhost/undanganku/public/api/theme/create`,  user, axiosConfig  )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log('response: ', error.response.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="file" id="input" onChange={this.handleChangeImage} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}