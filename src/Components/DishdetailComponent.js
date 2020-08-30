import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    
    
     renderComments(comments) {
        if (comments != null){
            return(
                <ul className="list-unstyled">
                    {
                    comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })
                    }
                </ul>
            );
        }
        else
            return(
                <div></div>
            );
    }

 renderDish(dish){
    if (dish != null){
        return(
          <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    else
    {
        return(
            <div></div>
        );
}
 
 }
render(){
    const dish=this.props.dish;
 
    if (dish==null){
        return(<div></div>)
    }
    const dishItem=this.renderDish(dish);
    const commentItem = this.renderComments(dish.comments);
    return(
        <div class="container">
        <div className="row">
           
           {dishItem}
           {commentItem}
        </div></div>
    );
}

}
export default DishDetail;