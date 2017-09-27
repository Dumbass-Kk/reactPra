import React, {Component} from 'react';

class CommentInput extends Component {
  constructor () {
    super ()
    this.state  =  {
      username: '',
      content: '',
      createTime: +new Date()
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
      const { username, content, createTime}  =  this.state
      this.props.onSubmit({username, content, createTime})
      return
    }
    this.setState({
      content: ''
    })
  }

  _localStorageUsername(value) {
    localStorage.setItem('username', value)
  }

  handleNameBlur (event) {
    this._localStorageUsername(event.target.value)
  }

  componentDidMount () {
    this.textarea.focus()
  }

  render () {
    return (
      <div className = 'comment-input'>
        <div className = 'comment-field'>
          <span className = 'comment-field-name'>用户名：</span>
          <div className = 'comment-field-input'>
            <input value = {this.state.username} onChange = {this.handleInputValue.bind(this)}
            ref = {(input) => this.input = input} onBlur = {this.handleNameBlur.bind(this)}/>
          </div>
        </div>
        <div className = 'comment-field'>
          <span className = 'comment-field-name'>评论内容：</span>
          <div className = 'comment-field-input'>
            <textarea value = {this.state.content} onChange = {this.handleTextValue.bind(this)} ref = {(textarea) => this.textarea = textarea}/>
          </div>
        </div>
        <div className = 'comment-field-button'>
          <button onClick = {this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;