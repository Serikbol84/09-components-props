import './content.css'
import left from '../../img/left.svg'
import author from '../../img/author.svg'
import icons from '../../img/icons.svg'
import newsImg from '../../img/1-1.svg'
import heart from '../../img/heart.svg'
import speechBubble from '../../img/speech-bubble.svg'
import bookmark from '../../img/bookmark.svg'
import { Link } from 'react-router-dom'




const Content = () => {
    return (<section className="content">
        <div className="container">

            <div className="header-logo-2">
                <Link to="/">
                    <img src={left} alt="" />
                </Link>
            </div>

            <div className="content-news-block">

                <div className="content-news">
                    <div className="authors">
                        <div className="authors-box">
                            <div className="auth-logo">
                                <img src={author} alt="" />
                            </div>
                            <div className="info">
                                <p>Authors name </p>
                                <p>
                                    <a href="#!">7 july ·</a> 
                                    <a href="#!">12 min read ·</a>
                                    <a href="#!">Member only</a>
                                </p>
                            </div>
                        </div>
                        
                        <div className="socials"> 
                            <img src={icons} alt="" />
                        </div>
                    </div>

                    <div className="text">
                        <h1 className="title title-1">7 Practical CSS Tips </h1>
                        <p>
                            How product designers can break from the status quo and help our planet
                        </p>
                    </div>

                    <div className="img">
                        <img src={newsImg} alt="" /> 
                    </div>

                    <div className="post">
                        <h1 className="post-title">Subheader </h1>
                        <p>
                            How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, 
                            using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you
                            wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you
                            never signed off in the first place. <br />
                            And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, 
                            or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where 
                            an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating 
                            your shower water or the electricity powering your coffee maker. <br />
                            But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet 
                            connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed 
                            toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the 
                            first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. 
                            This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on 
                            the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our 
                            already-overloaded power grids.
                        </p>
                    </div>

                    <div className="info-bottom">

                        <div className="comment">
                            <div className="icon">
                                <img src={heart} alt="" />
                                <p>180</p>
                            </div>
                            
                            <div className="icon">
                                <img src={speechBubble} alt="" />
                                <p>12</p>
                            </div>
                            
                        </div>
                        <div className="icon">
                            <img src={bookmark} alt="" />
                        </div>

                    </div>

                </div> 
                
            </div>
            
        </div>

        <div className="divider">
            <span className="divider"> </span>
        </div>
        
    </section>);
}
 
export default Content;