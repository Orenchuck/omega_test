import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import fb from './imgs/fb.png';
import tw from './imgs/tw.png';
import ig from './imgs/in.png';
import logo from './imgs/pngkey.png';
import './stylesMain.css';

export default function Inner() {
    return (
      <div>
            <header className="inner">
                <span className='logo'><img src={logo} alt=""></img></span>
                <nav>
                    <ul className="navbar">
                        <li><a href="#">what we do</a></li>
                        <li><a href="#">our work</a></li>
                        <li><a href="#">seo insights</a></li>
                        <li><a href="#">about us</a></li>
                    </ul>
                </nav>
                <div class="dropdown">
                    <button className="burger">...</button>
                    <div class="dropdown-content">
                        <a href="#">what we do</a>
                        <a href="#">our work</a>
                        <a href="#">seo insights</a>
                        <a href="#">about us</a>
                    </div>
                </div>
                <div className="textinnerHead">
                Cracking the Government Procurement Code
                </div>
            </header>
            <div className="bigtext">
                <p>
                Group, a Washington D.C.-based strategy consulting firm, has published a report entitled “Cracking the Government 
                Procurement Code” which details the results of an extensive study on the experience of small businesses doing business in 
                government markets. Conducted in partnership with Amazon Business, the report examines the barriers to entry and the barriers 
                to success that small businesses face when selling to the government customers, and the role that B2B e-commerce (i.e., online
                 marketplaces) can play in reducing these barriers.</p>

                <p>Leveraging the firm’s deep experience supporting public sector acquisition strategy and operations, Censeo developed a 
                comprehensive web-based survey to capture the perspectives of small businesses selling to government customers at the federal, 
                state and local levels. The survey was broadly distributed to a network of 35,000 small businesses currently registered to do 
                business with government customers, and asked respondents to describe the impact of several key barriers to entry and success on 
                their experience selling to the government. To assess the potential enabling role of online marketplaces in government procurement,
                 the survey also asked respondents about their current usage of online marketplaces and the benefits that they provide. 
                 Key findings from the report include:
                </p>
                <p>
                “Despite efforts by government agencies to level the playing field, small businesses still face significant challenges in 
                doing business with the public sector,” said Derrick Moreira, President of Censeo and team leader of the study. “Through this
                extensive study, we wanted to highlight the perspectives of the small business community and provide tangible focus areas for
                improvement, particularly in the opportunity space created by the growing adoption of online marketplaces by government
                procurement officials and small businesses.”
                </p>
              </div>
              <button className="download">Download Full Report</button>
              <h2>Related Insights</h2>
            <section className="innersection">
                <div className="block">
                    <img src={img2} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                <div className="block">
                    <img src={img3} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                <div className="block">
                    <img src={img1} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                <div className="block">
                    <img src={img4} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footertext">Ukraine 2000-2015</div>
                <div className="footerImg">
                    <img src={fb} alt=""></img>
                    <img src={tw} alt=""></img>
                    <img src={ig} alt=""></img>
                </div>
            </footer>
        </div>
    );
  }