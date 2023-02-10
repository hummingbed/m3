import './ComponentInHome.css';
import missionOneImg from '../../../Asset/MoneyMission/money-mission-2.png'

function MoneyPlayersComponent() {
    return (
        <div>
           <div className="money-mission py-5" id="#MoneyMissionComponent">
            <div className="container overflow-hidden">
                <div className="row gy-5 align-items-center py-5">
                    <div className="col-lg-7">
                        <div className="row justify-content-around ">
                            <div className="col-md-1 hexagon float-end d-none d-lg-inline"></div>
                            <div className="col-md-10 ">
                                <p className='fs-1 mt-1  money-meet-mind-text'>M3 PLAY SERIES | THE </p>
                                <p className='fs-1 mt-1  money-meet-mind-text'>INTERVIEWS</p>
                                <p className='money-meet-mind-small-text col-lg-11'>
                                    are a series entrepreneurship disruptive conclave which aims to identify and 
                                    promote how Nigeria can deepen ties between Fortune500 business leaders, 
                                    Forbes rates Entrepreneurs and innovators with the young businesses in 
                                    the Nigerian marketplace and economy. This will help foster and promote 
                                    Intellectual Property development for the creative economy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 text-center">
                        <img src={missionOneImg} className=' img-fluid' alt='money-mission-1' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default MoneyPlayersComponent;