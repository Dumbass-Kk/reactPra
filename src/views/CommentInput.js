import React, {Component} from 'react';

class CommentInput extends Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleTextValue (e) {
    this.setState({
      content: e.target.value
    })
  }

  handleInputValue (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit (e) {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
      return
    }
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleInputValue.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleTextValue.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;