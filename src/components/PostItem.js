import React from 'react';
import './PostItem.css';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <>
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} />
            <div className="details">
              <span>{comment.author.name}</span>
              <span>{comment.date}</span>
            </div>
          </div>

          <p className="comment-content">
            {comment.content}
          </p>
        </>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
