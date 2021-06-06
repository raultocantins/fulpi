import React from "react";
import "./Profile.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";

const Profile = () => {
  var profile = {
    name: "Alex raul santo",
    email: "alexbraul.ar@gmail.com",
    phoneNumber: "63992086480",
  };
  return (
    <div className="profile">
      <h1>Informações Pessoais</h1>
      <div className="perfil">
        <img
          src="https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg"
          alt="profile"
        />
        <div className="describe">
          <Input
            className="input"
            fullWidth
            id="input-with-icon-adornment"
            value={profile.name}
            disabled
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <Input
            className="input"
            fullWidth
            id="input-with-icon-adornment"
            value={profile.email}
            disabled
            startAdornment={
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            }
          />
          <Input
            className="input"
            disabled
            fullWidth
            id="input-with-icon-adornment"
            value={profile.phoneNumber}
            startAdornment={
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            }
          />

          <Button>Atualizar</Button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
