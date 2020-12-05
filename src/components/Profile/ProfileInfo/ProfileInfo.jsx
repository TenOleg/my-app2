import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import noAccPhoto from '../../../assets/images/account.png'
import ProfileStatusWithHooks from "./ProfileStatusWitchHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.accPhoto}>
                    {profile.photos.large ? <img src={profile.photos.large}/> : <img src={noAccPhoto}/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div>
                    {profile.lookingForAJobDescription}
                </div>
                <div>
                    {profile.fullName}
                </div>
                <div className={s.contactsBlock}>
                    Социальные сети
                    <div>
                        {profile.contacts.facebook}
                    </div>
                    <div>
                        {profile.contacts.vk}
                    </div>
                    <div>
                        {profile.contacts.instagram}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;