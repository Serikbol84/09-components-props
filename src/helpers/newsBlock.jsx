import React from "react";
import { Link } from "react-router-dom";
import actions from '../img/actions.svg'

const NewsBlock = ({ title, text, img, authorImg, date, readTime }) => {
    return (
        <div className="news-list">
            <div className="news-block">
                <div className="news">
                    <div className="authors">
                        <div className="auth-logo">
                            <img src={authorImg} alt="" />
                        </div>
                        <p> Authors name
                            <a href="#!"> in </a>
                            Topics Name ·
                            <a href="#!"> {date}</a>
                        </p>
                    </div>
                    <div className="text">
                        <h1 className="title">
                            <Link to="/content">
                                {title}
                            </Link>
                        </h1>
                        <p>
                            {text}
                        </p>
                    </div>

                    <div className="button-actions">
                    <div className="button-line">
                        <button className="btn">
                            <Link to="/content">Java Script</Link>
                        </button>
                        <p>
                            <a href="#!">{readTime} </a>
                            ·
                            <a href="#!"> Selected for you</a>
                        </p>
                    </div>
                    <div className="actions">
                        <img src={actions} alt="" />
                    </div>
                    
                </div>
                </div>

                <div className="img">
                    <img src={img} alt="" />
                </div>

            </div>

            <div className="divider">
                <span className="divider"> </span>
            </div>
        </div>
    );
}
 
export default NewsBlock;