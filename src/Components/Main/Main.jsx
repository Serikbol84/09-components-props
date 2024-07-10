import NewsBlock from '../../helpers/newsBlock'
import { newsList } from '../../helpers/newsList'

import './main.css'

const Main = () => {
    return (<section className="main">
        <div className="container">

            <div className="header-logo-2">Hello, world!</div>
            
            {newsList.map((news) => (
                <>
                    <NewsBlock 
                        key={news.id}
                        title={news.title}
                        text={news.text}
                        img={news.img}
                        authorImg={news.authorImg}
                        date={news.date}
                        readTime={news.readTime}
                    />
                </>
            ))}

        </div>
    </section>);
}
 
export default Main;