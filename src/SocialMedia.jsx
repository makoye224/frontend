import React from 'react';
import { Container } from 'react-bootstrap';

const SocialMedia = () => {
  const posts = [
    {
      platform: 'Facebook',
      content: 'This is a Facebook post.',
      imageSource: 'https://tinyurl.com/53w5uedd',
    },
    {
      platform: 'Instagram',
      content: 'This is an Instagram post.',
      imageSource: 'https://tinyurl.com/ycx7fzm6',
    },
    {
      platform: 'Twitter',
      content: 'This is a Twitter post.',
      imageSource: 'https://tinyurl.com/3ftyypcp',
    },
  ];

  return (
    <>
    <div className ="background-image" >
      <Container>
       <hr/>
        <section className="container-fluid text-center">
          <div>
            <h2  style={{backgroundColor: "#520B4D"}}className="amazing-heading">Social Media Posts</h2>
          </div>
          <div className="row">
            {posts.map((post, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img className="card-img-top" src={post.imageSource} alt={post.platform} />
                  <div className="card-body">
                    <h5 className="card-title">{post.platform}</h5>
                    <p className="card-text">{post.content}</p>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
        </section>
      </Container>
      <hr className='background-image' style={{ height: '5px' }}></hr>
      <section className="container-fluid text-center" style={{ backgroundColor: '#212529', color: 'white' }}>
        <footer className="footer">
        <Container>
          <p>&copy; 2023 Digital Labs. All rights reserved.</p>
          <h6>Email: digitallabtz@gmail.com</h6>
        <h6>Phone: +255 692-0833-236</h6>
        <h6>Address: Dar es Salaam, Tanzania</h6>
        <h6>Facebook: <a href = "#facebook" target="_blank" >Digital Lab</a></h6>
        <h6>Instagram: <a href="https://www.instagram.com/digital_lab_tz/" target="_blank" rel="noopener noreferrer">digital_lab_tz</a>
        </h6>
        <hr/>
        </Container>
        </footer>
      </section>
      </div>
    </>
  );
}

export default SocialMedia;
