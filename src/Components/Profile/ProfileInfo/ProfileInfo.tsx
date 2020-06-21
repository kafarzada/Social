import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkLo7z8i12fWUYE95gZvFwSOGD1PlsQGE_rjh8hII7xrtMoLK3&usqp=CAU"></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;