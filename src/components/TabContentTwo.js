import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import imgTv from '../images/tab-tv.png';
import imgTablet from '../images/tab-tablet.png';
import imgMacbook from '../images/tab-macbook.png';

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies anytime, anywhere -
            personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        {/* Tab bottom content */}
        <div className="tab-bottom-content">
          {/* Tv image container */}
          <div>
            <img src={imgTv} style={{width: '18.75rem'}} />
            <h3>Watch on your TV</h3>
            <p>Smart TVs, PlayStatio, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          {/* Tablet image container */}
          <div>
            <img src={imgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}} />
            <h3>Watch on your TV</h3>
            <p>Smart TVs, PlayStatio, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          {/* Macbook image container */}
          <div>
            <img src={imgMacbook} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}} />
            <h3>Watch on your TV</h3>
            <p>Smart TVs, PlayStatio, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

// Main Tab content container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  // Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1 / 8;
  }

  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
  }

  // Tab Bottom content 
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;
