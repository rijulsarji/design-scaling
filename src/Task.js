import react from "react";
import { FaCircleNotch, FaLock} from "react-icons/fa";
import "./Task.css";

function Task(props) {
    var lockIcon="hide", unlockIcon="hide";
    if(props.status==true)
        unlockIcon="show";
    else if(props.status==false)
        lockIcon="show";
    return (
        <div className="taskBody">

            <div className="taskSubBody">
                <FaCircleNotch className={unlockIcon} />
                <FaLock className={lockIcon} />

                <p className="taskDetails">{props.details}</p>
            </div>

        </div>
    )
}

export default Task;