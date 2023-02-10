import './ComponentInHome.css';
import missionOneImg from '../../../Asset/MoneyMission/money-mission-1.png'
import missionOneTwo from '../../../Asset/MoneyMission/money-mission-2.png'


function MoneyMissionComponent() {
    return (
        <div className="money-mission py-5" id="#MoneyMissionComponent">
            <div className="container overflow-hidden mt-5">
                <div className="row gy-5 align-items-center py-5">
                    <div className="col-lg-7">
                        <div className="row justify-content-around ">
                            <div className="col-md-1 hexagon float-end d-none d-lg-inline"></div>
                            <div className="col-md-10 ">
                                <p className='fs-1 mt-1  money-meet-mind-text'>MONEY MEETS MINDS</p>
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

                <div className="row mission-two gy-5 align-items-center py-5">
                    <div className="col-lg-5 text-center d-none d-lg-inline">
                        <img src={missionOneTwo} className=' img-fluid' alt='money-mission-1' />
                    </div>

                    <div className="col-lg-7">
                        <div className="row justify-content-around ">
                            <div className="col-md-1 hexagon float-end d-none d-lg-inline"></div>
                            <div className="col-md-10 ">
                                <p className='fs-1 mt-1  money-meet-mind-text'>M3 | MISSION</p>
                                <p className='money-meet-mind-small-text col-lg-11'>
                                If You are tired of just hearing it, here is just doing it. 
                                We were tired so we set out to get a solution on how to ignite ideas. 
                                Disruptive minds with action provocative insights and real-time lessons
                                 and know-how on how to “work your thoughts”. Thought provocative mechanics
                                  of idea execution from action led talks to connecting minds to venture 
                                  capital. When money meets minds, ideas come to life
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center d-lg-none d-md-inline">
                        <img src={missionOneTwo} className=' img-fluid' alt='money-mission-1' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoneyMissionComponent;