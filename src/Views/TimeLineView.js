import TimeLineCard1 from "../Components/TimeLineCard1";
import TimeLineCard2 from "../Components/TimeLineCard2";
import TimeLineCard3 from "../Components/TimeLineCard3";
import '../Stylesheets/timeLineView.css'


export default function TimeLineView(params) {
    return (
        <div className="full-screen-container">
            <div className="inner-container">
                <div className="card1">
                    <TimeLineCard1 text={"Starting Registration"} month={"JUNE"} day={"15"} />
                    <div className="path1">
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

                            <line x1="50" y1="0" x2="50" y2="50" stroke="#000" stroke-dasharray="4" stroke-width="2" />

                            <line x1="50" y1="50" x2="100" y2="50" stroke="#000" stroke-dasharray="4" stroke-width="2" />
                        </svg>
                    </div>
                </div>
                <div className="card2">
                    <TimeLineCard2 text={"Closing Registrations"} month={"JULY"} day={"6"} />
                </div>
                <div className="card3">
                    <TimeLineCard2 text={"Case Study Publishing"} month={"JULY"} day={"10"} />
                </div>
                <div className="card4">
                    <TimeLineCard1 text={"Workshop 02"} month={"JULY"} day={"15"} />
                </div>
                <div className="card5">
                    <TimeLineCard3 text={"Workshop 02"} month={"JULY"} day={"18"} />
                </div>
                <div className="card6">
                    <TimeLineCard1 text={"Opening Submissions"} month={"JULY"} day={"19"} />
                </div>
                <div className="card7">
                    <TimeLineCard3 text={"Workshop 03"} month={"JULY"} day={"25"} />
                </div>
                <div className="card8">
                    <TimeLineCard1 text={"Closing Submissions"} month={"AUGUST"} day={"18"} />
                </div>
            </div>
            
        </div>
    )
}