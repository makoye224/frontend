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
      <Container>
        <hr className='background-image' style={{ height: '25px' }}></hr>
        <section className="container-fluid text-center">
          <div>
            <h2 style={{ color: 'purple' }}>Social Media Posts</h2>
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
            <p>Random content 1</p>
            <p>Random content 2</p>
            <p>Random content 3</p>
            {/* Add more random content here */}
          </Container>
        </footer>
      </section>
    </>
  );
}

export default SocialMedia;
