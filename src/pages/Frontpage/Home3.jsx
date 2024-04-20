import React from 'react';
import './Home3.css';
import photocollection1 from '../../assets/photo collection/photocoll-1.png';
import photocollection2 from '../../assets/photo collection/photocoll-2.png';
import photocollection3 from '../../assets/photo collection/photocoll-3.png';
import photocollection4 from '../../assets/photo collection/photocoll-4.png';
import photocollection5 from '../../assets/photo collection/photocoll-5.png';
function Home3() {
    return (
        <>
        <div  id='Home3'>
            <div className="home3heading pt-3 pb-1">
                <h1 className='text-center ourphotogallary'>Our Photo Gallery</h1>
            </div>
            <div className='container'>
                <div className="row row-cols-2 row-cols-md-5 g-3 mt-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={photocollection1} className="card-img-top" alt="..."/>                        
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={photocollection2} className="card-img-top" alt="..."/>                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={photocollection3} className="card-img-top" alt="..."/>                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={photocollection4} className="card-img-top" alt="..."/>                               
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 d-md-block d-none">
                            <img src={photocollection5} className="card-img-top" alt="..."/> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home3;