import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'

class Users extends React.Component {
    baseURL = "http://localhost:3001/artists"
    constructor(props) {
        super(props)
        
        this.state = {
            users: []
        }
    }
   
    renderList({users}){
        if(users){
            return users.map((user)=>{
                return (
                    <div className="text-center">
                        
                        <img src={`/images/covers/${user.cover}.jpg`} alt="my imge" height="300"/>
                        
                        <NavLink to={`/artists/${user.id}`}><h3>{user.name}</h3></NavLink>
                    </div>
                )
            })
        }
        return 'Users'
    }

    render() {
        // console.log('2-render')
        return (
            <div>
                <div class="image text-center">
                    <img src="/images/cover.png" alt="my imge" height="300"/>
                    <h2>MUSIC-DB</h2>
                </div>
               {this.renderList(this.state)}
            </div>
        )
    }

    
    componentDidMount() {
        // console.log('3- did Mount')
        fetch(this.baseURL, { method: 'GET' })
            .then((response) => {
                if (response.status == 200)
                    return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({users:data})

            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default Users;