import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
// import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
    //   addLike,
    //   removeLike,
    //   deletePost,
    auth,
    post: { _id, text, name, avatar, user, likes, comments, date }
    //showActions
}) => (
        <div class="post bg-white p-1 my-1">
            <div>
                <Link to="/profile">
                    <img
                        class="round-img"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p class="my-1">
                    {text}
                </p>
                <p class="post-date">
                    Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
                <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-up"></i> {' '}
                    <span>{likes.length>0 && (
                        <span>{likes.length}</span>
                    )}</span>
                </button>
                <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-down"></i>
                </button>
                <Link to={`/post/${_id}`} class="btn btn-primary">
                    Discussion {comments.length>0 && (
                        <span class='comment-count'>{comments.length}</span>
                    )} 
                </Link>
                {!auth.loading && user === auth.user._id && (
                    <button
                        type="button"
                        class="btn btn-danger"
                    >
                        <i class="fas fa-times"></i>
                    </button>
                )}
                <button
                    type="button"
                    class="btn btn-danger"
                >
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

    );

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    // addLike: PropTypes.func.isRequired,
    // removeLike: PropTypes.func.isRequired,
    // deletePost: PropTypes.func.isRequired,
    // showActions: PropTypes.bool
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    // { addLike, removeLike, deletePost }
)(PostItem);
