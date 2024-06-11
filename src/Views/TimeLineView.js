import TimeLineCard1 from "../Components/TimeLineCard1";
import TimeLineCard2 from "../Components/TimeLineCard2";
import TimeLineCard3 from "../Components/TimeLineCard3";
import '../Stylesheets/timeLineView.css'


export default function TimeLineView(params) {
    return (
        <div className="full-screen-container">
            <TimeLineCard1 text={"Starting Registration"} month={"JUNE"} day={"15"} />
            <TimeLineCard2 text={"Closing Registrations"} month={"JULY"} day={"6"} />
            <TimeLineCard2 text={"Case Study Publishing"} month={"JULY"} day={"10"} />
            <TimeLineCard1 text={"Workshop 02"} month={"JULY"} day={"15"} />
            <TimeLineCard3 text={"Workshop 02"} month={"JULY"} day={"18"}/>
            <TimeLineCard1 text={"Opening Submissions"} month={"JULY"} day={"19"} />
            <TimeLineCard3 text={"Workshop 03"} month={"JULY"} day={"25"}/>
            <TimeLineCard1 text={"Closing Submissions"} month={"AUGUST"} day={"18"} />
        </div>
    )
}