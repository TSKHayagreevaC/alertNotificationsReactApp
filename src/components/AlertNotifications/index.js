import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import Notification from '../Notification'

const AlertNotifications = () => {
  const successNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="notification-item">
        <h1 className="notification-heading success">Success</h1>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="notification-item">
        <h1 className="notification-heading error">Error</h1>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="notification-item">
        <h1 className="notification-heading warning">Warning</h1>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const infoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="notification-item">
        <h1 className="notification-heading info">Info</h1>
        <p className="notification-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-notifications-bg-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {successNotification()}
        {errorNotification()}
        {warningNotification()}
        {infoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
