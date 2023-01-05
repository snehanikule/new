import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                
                <section className='container main-hero-container'>
               
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-left-size d-flex justify-content-center flex-column
                        align-item-start'>
                              <div className='input-group mt-3'>
                              
                                <input type='text'
                                    className='rounded-pill w-50 me-3 p-2 form-control-text1'
                                    placeholder='Join our remote team' />
                                <div className='input-group-button1'>We’re hiring!</div>
                            </div>  
                            <h1 className='display-2'>People who care
                                <br />about your growth</h1>
                            <p className='main-hero-para'>
                                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>

                            <div className='input-group mt-3  secondSearch'>
                            <div className='input-group-button'>Get Started</div>
                                <input type='text'
                                    className=' w-50 ml-3 p-2  form-control-text'
                                    placeholder='Enter Your Email' />
                                
                            </div>
                            <h3>We care about your data in our privacy policy.</h3>
                        </div>
                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-image'>
                            <img src='./images/Image.png' alt='img'
                                className='img-fluid' />
                        </div>

                    </div>
                </section>
            </header>
        </>
    )
}

export default Header