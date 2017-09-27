import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {
  constructor () {
    super ()
    this.state = {
      comments: [{
      username: 'test',
      content: 'this is test'}]
    }
  }

  handleSubmitComment (comment) {
    if (!comment.username) {
      alert('请输入用户名')
      return
    }
    if (!comment.content) {
      alert('请输入内容')
      return
    }
    console.log(comment.createTime)
    this.state.comments.push(comment)
    this._saveComment(this.state.comments)
    this.setState({
      comments: this.state.comments
    })
  }

  handleDeleteComment (v) {
    this.state.comments.splice(v, 1)
    this._saveComment(this.state.comments)
    this._loadComment()
  }

  _loadComment () {
    let list = JSON.parse(localStorage.getItem('comments'))
    if (list) {
      this.setState({
        comments: list
      })
    }
  }

  _saveComment (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  componentDidMount () {
    this._loadComment()
  }
  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments} onDelete={this.handleDeleteComment.bind(this)}/>
      </div>
    )
  }

}

export default CommentApp