import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: [{
      username: 'test',
      conteng: 'this is test'
    }]
  }

  handleDeleteComment (v) {
    this.props.onDelete(v)
  }
  render () {
    return (
      <div>
        {this.props.comments.map((item, index) => <Comment item={item} key={index} index={index} onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
      </div>
    )
  }
}

export default CommentList;