const BenefitsCard = ({title,details,imgSrc}) => {
    return(
        <div className="benefits-card-wrap">
        <div className="card-body">
          <h5 className="card-title">
            <img src={imgSrc} className="card-img" alt={title}/>
            {title}
          </h5>
          <p className="card-text">{details}</p>
        </div>
      </div>
    )
    
};

export default BenefitsCard;