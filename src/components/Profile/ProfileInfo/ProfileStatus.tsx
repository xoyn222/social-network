import React, {ChangeEvent, LegacyRef} from 'react';
import s from "./ProfileInfo.module.css";
import {Button, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateStatus = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    deActivateStatus = () => {
        this.setState({
            editMode: false,
            status: this.state.status
        })
        this.props.updateStatusTC(this.state.status)
    }

    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.borderDescriptionBLock}>
                <div className={s.status}>Status: </div>
                {this.state.editMode ? <div className={s.statusBlock}>
                                            <input value={this.state.status}
                                                   onChange={this.changeStatus}
                                                   className={s.editInput}
                                                   autoFocus
                                            />
                                            <Button sx={{ml: '10px'}} variant={'contained'} onClick={this.deActivateStatus}>
                                                Save
                                            </Button>
                                       </div>
                                     : <div className={s.statusBlock}>
                                            {this.props.status || "I haven't added my status yet"}
                                            <IconButton onClick={this.activateStatus} style={{marginLeft: '20px', boxShadow: '1px 0 10px 0 rgba(0, 0, 0, 0.3)'}} color={'primary'}>
                                                <EditIcon/>
                                            </IconButton>
                                       </div>

                }
            </div>
        );
    }
};

