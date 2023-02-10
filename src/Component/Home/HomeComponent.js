import HeaderComponent from '../HeadFooter/HeaderComponent'
import HeroComponent from '../../Component/Home/ComponentInHome/HeroComponent';
import MoneyMissionComponent from '../../Component/Home/ComponentInHome/MoneyMissionComponent';
// import SpeakerComponent from '../../Component/Home/ComponentInHome/SpeakerComponent'
import BookSeatComponent from '../../Component/Home/ComponentInHome/BookSeatComponent';
import ParagraphComponent from '../../Component/Home/ComponentInHome/ParagraphComponent';
import MoneyPlayersComponent from '../../Component/Home/ComponentInHome/MoneyPlayersComponent';
import OpportunityComponent from '../../Component/Home/ComponentInHome/OpportunityComponent';





function HomeComponent() {
    return (
        <div>
            <HeaderComponent />
            <HeroComponent/>
            <MoneyMissionComponent/>
            {/* <SpeakerComponent/> */}
            <BookSeatComponent/>
            <ParagraphComponent/>
            <MoneyPlayersComponent/>
            <OpportunityComponent/>
            
        </div>
    );
}

export default HomeComponent;