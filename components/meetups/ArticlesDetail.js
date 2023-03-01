import classes from './ArticlesDetail.module.css'


function ArticlesDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image}
       alt={props.title} />
       <h1>{props.title}</h1>
       <h3>{props.creator}</h3>
       <p>{props.description}</p>
    </section> 
  )
}

export default ArticlesDetails