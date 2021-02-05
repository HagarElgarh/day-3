import React from 'react'
// import { withRouter  } from 'react-router-dom';

class UsersDetails extends React.Component {
    baseURL = "http://localhost:3001/artists/"
    //history = useHistory()
    constructor(props) {
        super(props)
        console.log('1-ctor')
        console.log('-intialState')
        this.state = {
            user: {}
        }
        this.goBack = this.goBack.bind(this)
    }
    goBack(){
        this.props.history.goBack();
    }
    renderImage({albums})
    {
        if(albums){
            return albums.map((album)=>{
                return (
                    <div className=" column text-center ml-5">
                        
                        <img src={`/images/albums/${album.cover}.jpg`} alt="my imae" width="400" height="200"/>
                    </div>
                )
            })
        }
        return 'albums'
    }
    renderList({user}){
        if(user){
            console.log(user)
                return (
                    <div className="text-center">
                        
                        <img src={`/images/covers/${user.cover}.jpg`} alt="my imge" height="200" width="200"/>
                        <h1>{user.name}</h1>
                        <h6>{user.bio}</h6>
                        <div className="row text-center m-5">
                        {this.renderImage(user)}
                        </div>
                        
                        <input className="m-5" type="button" value="go home" onClick={this.goBack}/>
                    </div>
                )
         
        }
        return 'Users'
    }

    render() {
        console.log('2-render')
        return (
            <div>
               {this.renderList(this.state)}
            </div>
        )
    }

    componentDidMount() {
        console.log('3- did Mount')
        fetch(`${this.baseURL}${this.props.match.params['id']}`, { method: 'GET' })
            .then((response) => {
                if (response.status == 200)
                    return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({user:data})
               
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default UsersDetails;