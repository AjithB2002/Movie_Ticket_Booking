import React from 'react'
import './Feedback.css'
import lijishlogo from '../../assets/feedback img/lijishlogo.jpg';
import feedbackimg1 from '../../assets/feedback img/feedbackimg1.jpg';
import feedbackimg2 from '../../assets/feedback img/feedbackimg2.jpg';
import feedbackimg3 from '../../assets/feedback img/feedbackimg3.jpg';
import feedbackimg4 from '../../assets/feedback img/feedbackimg4.jpg';
function Feedback() {
    return (
        <>
            <div id='feedback'>
                <div className='container'>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                            <p className='text-secondary h6'>Our Feedbacks</p>
                            <p className='feedbackheading'>What They're Talking About us?</p>
                            <p className=''>At <span className='fw-semibold'>"BL Movies Ticket Booking"</span>, we value your opinion and strive to provide the best possible experience for our users. Your feedback helps us understand what we're doing right and where we can improve. Whether you've had a seamless booking experience or encountered any issues along the way, we want to hear from you!</p>
                            <a href="#" className="btn feedbackbtn ">View All Feedbacks </a>
                        </div>
                        <div className="col">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card feedback_card mb-3 pt-4 pb-4">
                                            <div className="card-body ">
                                                <div className="d-flex g-5">
                                                    <div> 
                                                    <img src={lijishlogo} alt=" customer-img" className=" lijishlogo" />
                                                    </div>
                                                    <div className='pt-3 customername'> 
                                                    <h5 className="card-title ">Lijish Wilson</h5>
                                                    <p className="card-text fbusername">Customer</p>
                                                    </div>
                                                </div>
                                                <p className="card-text pt-3 fw-semibold">Whenever I want to watch a new movies I choose BL Movies ticket booking to buy a movie tickets .I used BL Movies ticket booking lots of time .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card feedback_card mb-3 pt-4 pb-4">
                                            <div className="card-body">
                                            <div className="d-flex g-5">
                                                    <div> 
                                                    <img src={feedbackimg1} alt=" customer-img" className=" lijishlogo" />
                                                    </div>
                                                    <div className='pt-3 customername'> 
                                                    <h5 className="card-title ">Nithiya B</h5>
                                                    <p className="card-text fbusername">Customer</p>
                                                    </div>
                                                </div>
                                                <p className="card-text pt-3 fw-semibold">BL Movies ticket booking is the wounderful site I have ever seen. we can book tickets of our required theaters and required seats. the service of this website is very good. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card feedback_card mb-3 pt-4 pb-4">
                                            <div className="card-body">
                                            <div className="d-flex g-5">
                                                    <div> 
                                                    <img src={feedbackimg2} alt=" customer-img" className=" lijishlogo" />
                                                    </div>
                                                    <div className='pt-3 customername'> 
                                                    <h5 className="card-title ">Elango Mubarak</h5>
                                                    <p className="card-text fbusername">Customer</p>
                                                    </div>
                                                </div>
                                                <p className="card-tex pt-3 fw-semibold">It is one of the most popular app for buying tickets . It’s not just limited to movie tickets, yet awesomely designed to even buy tickets of any kind of popular shows, events etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card feedback_card mb-3 pt-4 pb-4">
                                            <div className="card-body">
                                            <div className="d-flex g-5">
                                                    <div> 
                                                    <img src={feedbackimg3} alt=" customer-img" className=" lijishlogo" />
                                                    </div>
                                                    <div className='pt-3 customername'> 
                                                    <h5 className="card-title ">Aishwarya A</h5>
                                                    <p className="card-text fbusername">Customer</p>
                                                    </div>
                                                </div>
                                                <p className="card-text pt-3 fw-semibold">They don’t clearly say about cancellations. When you book a show or event, in the mail of confirmation ticket, you get a message, no refunds or changes under the mail footer line.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card feedback_card mb-3 pt-4 pb-4">
                                            <div className="card-body">
                                            <div className="d-flex g-5">
                                                    <div> 
                                                    <img src={feedbackimg4} alt=" customer-img" className=" lijishlogo" />
                                                    </div>
                                                    <div className='pt-3 customername'> 
                                                    <h5 className="card-title ">Jossi Jenan</h5>
                                                    <p className="card-text fbusername">Customer</p>
                                                    </div>
                                                </div>
                                                <p className="card-text pt-3 fw-semibold">BL Movies ticket booking is only best option for online movie tickets. One can book tickets for almost all cinema and movies across city where they are providing service. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback