
cost e = React.createElement;
cLass LikeButton extends React.Component {
	constructor (props) {
		super (props);
		this.state = { liked: false };
	}	

	render(){
		if (this.state.liked) {
			return 'You liked this.';
		}

		return e(
			'button',
			{ onClick: () =› this.setState({ liked: true}) },
			'Like'
		);
	}
}
const domContainer = document.querySelector('#like_button_container') ;
ReactDOM.render(e(LikeButton),domContainer);


render() {
			if (this.state.liked) {
				return 'You liked comment number' + this.props.commentID;
			}
		}


document.querySelectorAll('.like_button_container')
	.forEach(domContainer=>{
// Read the comment ID from a data-* attribute.
		const commentID = parseInt(domContainer.dataset.commentid, 10);
		ReactDOM.render(
			e(LikeButton, { commentID: commentID }),
			domContainer
		);
	});


