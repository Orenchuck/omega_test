/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './stylesMain.css';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import fb from './imgs/fb.png';
import tw from './imgs/tw.png';
import ig from './imgs/in.png';
import logo from './imgs/pngkey.png';

export default function Main() {
    return (
        <div className="main">
            <header>
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
                <div>
                    <form>
                        <fieldset>
                            <legend><h1>Workforce&nbsp;Survey</h1></legend>
                            <p className="headText">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                        atque corrupti quos dolores et quas molestias excepturi </p>
                        </fieldset>
                        </form> 
                    <button className="start">Start Now</button>
                </div>
            </header>
            <section>
            <Link to="/inner" className="block">
                <div>
                    <img src={img2} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                </Link>
                <Link to="/inner" className="block">
                <div>
                    <img src={img3} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                </Link>
                <Link to="/inner" className="block">
                <div>
                    <img src={img1} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                </Link>
                <Link to="/inner" className="block">
                <div>
                    <img src={img4} alt=""></img>
                    <div className="inblock">
                    <h3>Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    <Link to="/inner">Show more</Link>
                    </div>
                </div>
                </Link>
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