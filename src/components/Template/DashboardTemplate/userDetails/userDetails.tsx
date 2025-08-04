import Button from "../../../common/Button/Button";
import Separator from "../../../common/Separator/separator";
import UserDetailsCard from "../../../common/UserDetailsCard/userDetailsCard";
import "./userDetails.modules.scss";
import { PiUserBold } from "react-icons/pi";
const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <button className="arrow__back">
        <img src="/svg/icons/arrow-back.svg" alt="arrow icon" />
        <span>Back to Users</span>
      </button>
      <div className="details__header">
        <h2>Users Details</h2>
        <div className="action__btn">
          <Button className="blackList">BLACKLIST USER</Button>
          <Button className="activate">ACTIVATE USER</Button>
        </div>
      </div>

      <div className="profile__card">
        <div className="profile">
          <div className="user__container">
            <div className="user__icon">
              <PiUserBold className="icon_icon" />
            </div>

            <div className="user-info">
              <p>firstName lastName</p>
              <span>LSQFf587g90</span>
            </div>
          </div>

          <Separator orientation="vertical" />

          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <img src="/svg/icons/star-filled.svg" alt="star-icon" />
              <img src="/svg/icons/star.svg" alt="staricon" />
              <img src="/svg/icons/star.svg" alt="staricon" />
            </div>
          </div>

          <Separator orientation="vertical" />

          <div className="bank__details">
            <h1> &#8358;500,000</h1>
            <span>9912345678/Providus Bank</span>
          </div>
        </div>

        <div className="tabs">
          <div className="tabs-list">
            {tabs.map((tab, index) => (
              <button key={index}>{tab}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="user_details_details">
        <div className="section">
          <h1>Personal Information</h1>
          <div className="details-grid">
            <UserDetailsCard label="full name" value={`firstName lastName`} />
            <UserDetailsCard label="PHONE NUMBER" value={`phoneNumber`} />
            <UserDetailsCard label="EMAIL ADDRESS" value={`email`} />
            <UserDetailsCard label="BVN" value={`phoneNumber`} />
            <UserDetailsCard label="GENDER" value={`gender`} />
            <UserDetailsCard label="MARITAL STATUS" value={`Single`} />
            <UserDetailsCard label="CHILDREN" value={`None`} />{" "}
            <UserDetailsCard
              label="Type of residence"
              value={`Parent’s Apartment`}
            />
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className="section">
          <h1 className="">Education and Employment</h1>
          <div className="details-grid">
            <UserDetailsCard label="level of education" value={`B.Sc`} />
            <UserDetailsCard
              label="employment status"
              value={`employmentStatus`}
            />
            <UserDetailsCard label="sector of employment" value={`FinTech`} />
            <UserDetailsCard
              label="Duration of employment"
              value={`employmentDuration`}
            />
            <UserDetailsCard label="office email" value={`email`} />
            <UserDetailsCard label="monthly income" value={""} />
            <UserDetailsCard label="loan repayment" value={""} />
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className="section">
          <h1 className="">Socials</h1>
          <div className="details-grid">
            <UserDetailsCard label="twitter" value={`jhsjkkfjkfd`} />
            <UserDetailsCard label="facebook" value={`firstName lastName`} />
            <UserDetailsCard label="instagram" value={`sfdnsdfnfd`} />
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className="section">
          <h1 className="">Guarantor</h1>
          <div className="details-grid">
            <UserDetailsCard label="full name" value="name" />
            <UserDetailsCard label="phone number" value="phoneNumber" />
            <UserDetailsCard label="email address" value="email" />
            <UserDetailsCard label="relationship" value="relationship" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
