import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: [{
      username: 'test',
      conteng: 'this is test'
    }]
  }
  render () {
    return (
      <div>
        {this.props.comments.map((item, index) => <Comment item={item} key={index}/>)}
      </div>
    )
  }
}

export default CommentList;