import { Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const openingsArr = [
    {
        title : "GIS Developer",
        experience : "3-10 Yrs",
        location :"Kochi, Trivandrum, Bangalore, Chennai",

    },
    {
        title : "Finforce Developer/Lead",
        experience : "5-10 Yrs",
        location :"Kochi, Trivandrum, Bangalore, Chennai",

    },
    {
        title : "AWS Solution Architect",
        experience : "6-12 Yrs",
        location :"Trivandrum, Kochi, Bangalore",

    },
    {
        title : "ServiceNow (Dev/Admin)2+yrs",
        experience : "2-5 Yrs",
        location :"Bangalore",

    },
    {
        title : "React JS Developer",
        experience : "4-8 Yrs",
        location :"Kochi, Trivandrum, Bangalore",

    },
    {
        title : "React JS Developer",
        experience : "4-8 Yrs",
        location :"Kochi, Trivandrum, Bangalore",

    },
    {
        title : "Dotnet Developer",
        experience : "4-8 Yrs",
        location :"Kochi, Trivandrum, Bangalore",

    },
    {
        title : "UI/UX Designer",
        experience : "2-4 Yrs",
        location :"Kochi, Trivandrum",

    },
    {
        title : "Backend Developer",
        experience : "3-10 Yrs",
        location :"Kochi, Trivandrum, Bangalore",

    },
    {
        title : "Senior Full Stack Developer",
        experience : "3-10 Yrs",
        location :"Kochi, Trivandrum, Bangalore",

    },
    {
        title : "QC Analyst – Web Developer",
        experience : "3-10 Yrs",
        location :"Kochi, Trivandrum, Bangalore",

    },
    
]

const MultiCarousel = () => {
    return(
        <Carousel 
         responsive={responsive}
         containerClass="carousel-container"   
         customTransition="all 1s linear"
         transitionDuration={1000}
         slidesToSlide={2}
         
    >

        {openingsArr.map((item,idx)=>
        (
            <div key={idx} className='carousel-card-opening'>
                <div className='card-body'>
                <h5>{item.title}</h5>
                <p>{`Exp: ${item.title}`}</p>
                <p>
                <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall css-1u94d1f" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                {item.location}
                </p>
                <button className="btn-common">More Info</button>
                </div>
            </div>
        )
        )}
          
          
    </Carousel>
    )
    
};

export default MultiCarousel;



