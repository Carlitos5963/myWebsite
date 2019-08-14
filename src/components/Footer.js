import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import facebook from './icons8-facebook-50.png';
import github from './icons8-github-50.png';
import linkedin from './icons8-linkedin-50.png';
import website from './icons8-website-50-2.png';

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="flex font-small pt-4 mt-4 bg-light-gray tc">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className='w-third pa3 mr2'>
            <h5 className="title">Note from Carlos</h5>
            <p>
              Thank you for taking the time to look over my website.
              If you think there is something I can improve on or a feature I could add, please let me know.
              You can contact me through either LinkedIn or Facebook.
              If you would like a copy of my resume, please reach out to me on LinkedIn.
              Thanks again!
            </p>
          </MDBCol>
          <MDBCol className='tc w-third pa3 mr2'>
            <h4 className="title">Follow me!</h4>
            <ul className='flex pa2'>
              <li className="list-unstyled w-25">
                    <a href='https://www.facebook.com/profile.php?id=100000490282238&ref=bookmarks' target='_blank' rel="noopener noreferrer"><img src={facebook} alt='Facebook'></img></a>
              </li>
              <li className="list-unstyled w-25">
                <a href='https://github.com/Carlitos5963' target='_blank' rel="noopener noreferrer"><img src={github} alt='Github'></img></a>
              </li>
              <li className="list-unstyled w-25">
                <a href='https://www.linkedin.com/in/carlos-gomez-pro/' target='_blank' rel="noopener noreferrer"><img src={linkedin} alt='LinkedIn'></img></a>
              </li>
              <li className="list-unstyled w-25">
                <a href='http://Carlitos5963.github.io/portfolio/' target='_blank' rel="noopener noreferrer"><img src={website} alt='Website'></img></a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className='w-third pa3 mr2 tc'>
            <h4 className="title">Sections</h4>
            <ul className='list'>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;