import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    <div className="">
      <h1 className='text-success fs-1 text-center mt-4 main-heading-home'>Services</h1>
      <div id="carouselExampleIndicators" className="carousel slide carousel-background-style">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>

  <div className="carousel-inner container" >
    <div className="carousel-item active">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Timely Remainders</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/02/1990175-6-of-the-Best-Medication-Reminders-1200x628-Facebook-1200x628.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>

    <div className="carousel-item">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Yoga Asanas</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://www.columbiacommunities.in/wp-content/uploads/2020/09/Why-is-yoga-an-important-activity-in-senior-citizen-homes-in-India.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>

    <div className="carousel-item ">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Care Givers</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://calbizjournal.com/wp-content/uploads/2021/07/senior-woman-sitting-in-chair-and-laughing-with-nurse-in-retirement-home.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>
    <div className="carousel-item ">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Diet Plans</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://assets-us-01.kc-usercontent.com/ffacfe7d-10b6-0083-2632-604077fd4eca/7740ee7f-d782-4815-8577-2f09336348ce/Healthy-Eating-Tips_Buddha-bowl-salad-1202314918_2021-2_FB-1200x630.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>

    <div className="carousel-item ">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Tourism</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://drprem.com/travel/wp-content/uploads/sites/53/2014/07/Guide-to-Senior-Tourism.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>
    
    
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );


  <div classname="footer"> 
    <div></div>
    <div></div>
  </div>
}

export default Home;
