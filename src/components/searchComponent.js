import React from 'react';
import axios from 'axios'
let getRecentImagesUrl = "https://sheltered-everglades-52637.herokuapp.com" + '/pics/recentUploads'

class SearchComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageKeys: [],
    }
  }

  componentWillMount() {
    axios.get(getRecentImagesUrl)
      .then((response) => {
        this.setState({imageKeys: response.data.keys})
      })
  }

  render(){
    return (

      <div className='outer-div'>
        <div className='inner-div'>
          {
            this.state.imageKeys.reverse().filter(url => url.includes(this.props.match.params.query)).map((key, id) => {
              let link = "https://sheltered-everglades-52637.herokuapp.com" + '/pics/show/' + key
              let tnSrc = "https://sheltered-everglades-52637.herokuapp.com" + '/pics/show/' + 'tn.' + key
              return <a key={id} href={link}><img src={tnSrc} /></a>
            })}
        </div>
      </div>
    )
  }

}


export default SearchComponent
