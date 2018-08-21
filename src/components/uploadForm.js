import React from 'react'
let baseURL = "https://sheltered-everglades-52637.herokuapp.com" + '/pics/show/'


class UploadForm extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    let imgLocation = baseURL + this.props.match.params.id.replace(' ', "%20")
    return (
    <div className='outer-div'>
      <div className='inner-div'>
      <img className='upload-container' alt='' src={imgLocation} />
      </div>
    </div>

    )
  }
}

export default UploadForm
