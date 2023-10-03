import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from './../Shared/RightSideNav/RightSideNav';
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="col-span-2 ">
                    <h2 className="text-4xl">news comming soon... </h2>
                    {
                        news.map(aNews =><NewsCard
                        key={aNews.id}
                        news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;