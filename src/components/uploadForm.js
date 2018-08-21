import React from 'react'
let baseURL = process.env.BACKEND_URL + '/pics/show/'


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
