import React from 'react';
import classes from "./ProfileInfo.module.css";
import { ProfilePropsType } from '../Profile';

const ProfileInfo = (props:ProfilePropsType) => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkLo7z8i12fWUYE95gZvFwSOGD1PlsQGE_rjh8hII7xrtMoLK3&usqp=CAU"></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;