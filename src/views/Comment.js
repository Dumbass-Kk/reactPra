import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    item : PropTypes.object.isRequired,
    index: PropTypes.number,
    onDeleteComment: PropTypes.func
  }

  static defaultProps = {

  }

  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }

  handleDeleteComment (event) {
    this.props.onDeleteComment(this.props.index)
  }

  _updateTime () {
    if (this.props.item.createTime) {
      let rightTime = +new Date()
      let duration = (rightTime - this.props.item.createTime) / 1000
      this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
      })
    }
  }

  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  
  componentDidMount () {
    this._updateTime()
    this._timer = setInterval(this._updateTime.bind(this), 5000)
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }
  render () {
    const { item } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{item.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(item.content)
        }} />
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <button onClick={this.handleDeleteComment.bind(this)}>X</button>
      </div>
    )
  }
}

export default Comment;