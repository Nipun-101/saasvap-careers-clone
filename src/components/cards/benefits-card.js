const BenefitsCard = ({title,details,imgSrc}) => {
    return(
        <div class="benefits-card-wrap">
        <div class="card-body">
          <h5 class="card-title">
            <img src={imgSrc} class="card-img" alt={title}/>
            {title}
          </h5>
          <p class="card-text">{details}</p>
        </div>
      </div>
    )
    
};

export default BenefitsCard;