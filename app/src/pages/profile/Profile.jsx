import { React, useState } from "react";
import "./Profile.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import Axios from "../../shared/axios/Axios";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ReactLoading from "react-loading";
import { development } from "../../config/url";
import { useDispatch, useSelector } from "react-redux";
import ProfileIllustration from "../../assets/n.png";
import { useAlert } from "react-alert";
import setImage from "../../store/actions/actions";

const Profile = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.authentication.user);
  function onChange(img) {
    setLoading(true);
    const data = new FormData();
    data.append("file", img.target.files[0]);
    Axios.post(`${development}/user/image`, data)
      .then((res) => {
        dispatch(setImage(res.data.url));
        setLoading(false);
        alert.success("Image updated with success!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert.error("Error ao enviar Imagem");
      });
  }

  return (
    <div className="profile">
      <h1>Informações Pessoais</h1>
      <div className="perfil">
        <div className="upload">
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
                <ReactLoading type="spinningBubbles" />
              ) : (
                <PhotoCamera />
              )}
            </IconButton>
          </label>
          <img
            src={user.image ? user.image : ProfileIllustration}
            alt="profile"
          />
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
            value={user.phoneNumber ? user.phoneNumber : "(00)0000-0000"}
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
