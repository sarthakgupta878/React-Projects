import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
     articles =  [
             {
                 "source": {
                     "id": "reuters",
                     "name": "Reuters"
                 },
                 "author": null,
                 "title": "Ukraine says Russia pounding Donbas, failing to take targets - Reuters",
                 "description": "Russian forces pounded Ukraine's eastern Donbas region on Saturday but failed to capture three target areas, Ukraine's military said, while Moscow said Western sanctions on Russia and arms shipments to Ukraine were impeding peace negotiations.",
                 "url": "https://www.reuters.com/world/europe/ukraine-warns-talks-with-russia-may-collapse-battles-rage-east-2022-04-30/",
                 "urlToImage": "https://www.reuters.com/resizer/1QMSwjQgWYldWsTep9xA9HleacA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C5FNNVDHC5JWHBA4S5B6SP33W4.jpg",
                 "publishedAt": "2022-04-30T09:44:00Z",
                 "content": "KYIV, April 30 (Reuters) - Russian forces pounded Ukraine's eastern Donbas region on Saturday but failed to capture three target areas, Ukraine's military said, while Moscow said Western sanctions on… [+4568 chars]"
             },
             {
                 "source": {
                     "id": null,
                     "name": "New York Post"
                 },
                 "author": "Patrick Reilly",
                 "title": "Wife of ex-Marine killed in Ukraine has seen her life 'completely fallen apart' - New York Post ",
                 "description": "On Tuesday, Cancel’s wife received “the worst call of her life,” when she was informed that her husband was killed in battle, the father said.",
                 "url": "https://nypost.com/2022/04/30/ex-marine-willy-joseph-cancels-wife-has-seen-her-life-completely-fall-apart-since-his-death/",
                 "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/willy-cancel-545.jpg?quality=75&strip=all&w=1024",
                 "publishedAt": "2022-04-30T09:39:00Z",
                 "content": "The wife of the former US Marine who was killed fighting against invading Russians in Ukraine has seen her life “completely fallen apart” since her husband’s death, according to the slain soldiers fa… [+2773 chars]"
             },
             {
                 "source": {
                     "id": null,
                     "name": "TMZ"
                 },
                 "author": "TMZ Staff",
                 "title": "Adele Close to Finalizing Deal to Move Residency to Planet Hollywood - TMZ",
                 "description": "Adele is close to finalizing a deal to bring her Vegas residency to a new home than first intended ... with her sights set on a show premiere by the end of 2022.",
                 "url": "https://www.tmz.com/2022/04/30/adele-las-vegas-residency-zappos-theater/",
                 "urlToImage": "https://imagez.tmz.com/image/41/16by9/2022/04/29/41a52a7758db4b23a4196c4c1fff00fe_xl.jpg",
                 "publishedAt": "2022-04-30T08:00:00Z",
                 "content": "Adele is close to finalizing a deal to bring her Vegas residency to a new home ... with her sights set on a premiere date in a few months.\r\nSources with direct knowledge of the singer's plans tell TM… [+1402 chars]"
             },
             {
                 "source": {
                     "id": "the-washington-post",
                     "name": "The Washington Post"
                 },
                 "author": "Adam Taylor, Amy Cheng, Andrew Jeong",
                 "title": "Latest Russia-Ukraine war news: Live updates - The Washington Post",
                 "description": "Russia's slow movement is a reflection of its desire to avoid stretching supply lines in face of fierce Ukrainian resistance, the Pentagon said.",
                 "url": "https://www.washingtonpost.com/world/2022/04/30/russia-ukraine-war-news-putin-live-updates/",
                 "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OG672ZGDDQI6ZNO7D65GDJTMOU.jpg&w=1440",
                 "publishedAt": "2022-04-30T07:58:32Z",
                 "content": "Conflicts continued in Ukraines eastern Donbas region Friday as holdouts in the besieged city of Mariupol continued to look for evacuation routes.\r\nIn Kyiv, residents continued to take stock after a … [+2434 chars]"
             },
             {
                 "source": {
                     "id": "cnn",
                     "name": "CNN"
                 },
                 "author": "By <a href=\"/profiles/simone-mccarthy\">Simone McCarthy</a> and <a href=\"/profiles/brad-lendon\">Brad Lendon</a>, CNN",
                 "title": "Russia's war in Ukraine - CNN",
                 "description": "Follow here for news and updates on the ground as Russia's invasion of Ukraine continues.",
                 "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-04-30-22/index.html",
                 "urlToImage": "https://dynaimage.cdn.cnn.com/cnn/digital-images/org/0879c362-9bee-4b82-8cc9-75b2fb54c064.png",
                 "publishedAt": "2022-04-30T04:09:00Z",
                 "content": "The leader of the Belarusian opposition called on the United States to enact sanctions on the government of Belarus that mirror those imposed on Moscow.\r\nIn meetings with the US State Department and … [+2486 chars]"
             }
             
         ]
    constructor(){
        super();
        // console.log("constructor of news component")
        this.state ={
            articles : this.articles ,
            loading :false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2859da7387a14fb99a820e5fffb7a43a"
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({articles:parsedData.articles})

    }
    render() {
        return (
            <div className="container my-3">
                
                <h2>NewsTak - Top Headlines</h2>
                {/* {this.state.articles.map((element)=>{console.log(element)})} */}
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key ={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                </div>

            </div>
        )
    }
}

export default News