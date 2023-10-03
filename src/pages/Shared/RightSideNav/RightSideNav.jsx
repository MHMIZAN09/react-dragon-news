import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 '>
                <h2 className="text-2xl"> Find us on</h2>
                <a className="p-4 flex items-center text-lg border rounded-t-lg">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex items-center text-lg border-x">
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex items-center text-lg border rounded-b-lg">
                    <FaInstagram className='mr-3'></FaInstagram>
                    instagram
                </a>
            </div>
            {/* qzone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;