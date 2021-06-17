import { React, useEffect, useState } from "react";
import "./Profile.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ReactLoading from "react-loading";
import {development} from '../../config/url'
const Profile = () => {
  const [user, setUser] = useState({
    name: "Undefined",
    email: "Undefined",
    phoneNumber: "",
  });
  const [userimg, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem("token"));
    if (user) {
      setUser({
        id:user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        token:user.token,
        image:user.image
      });
      setImg(user.image);
    }
  }, []);

  function onChange(img) {
    Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.token}`;
    setLoading(true);
    const data = new FormData();
    data.append("file", img.target.files[0]);
    Axios.post(`${development}/user/image`, data)
      .then((res) => {
        setImg(res.data.location);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Error ao enviar Imagem");
      });
  }

  return (
    <div className="profile">
      <h1>Informações Pessoais</h1>
      <div className="perfil">
        <div className="upload">
          <div className="hoverblack"></div>
          <input
            type="file"
            onChange={onChange}
            className="input"
            id="icon-button-file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              disabled={loading ? true : false}
            >
              {loading ? (
                <ReactLoading color="red" type="spinningBubbles" />
              ) : (
                <PhotoCamera />
              )}
            </IconButton>
          </label>
          <img src={userimg} alt="profile" />
        </div>

        <div className="describe">
          <Input
            className="input"
            fullWidth
            id="input-with-icon-adornment"
            value={user.name}
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
            value={user.email}
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
            value={user.phoneNumber}
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
