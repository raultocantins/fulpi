function signIn(user) {
    window.location.href = "/app";
    return { type: "SIGNIN_USER", user };
  }

  function favorite(id) {
    return { type: "FAVORITE_BOOK", id };
  }
  function setImage(image) {
    return { type: "SET_IMAGE", image };
  }

module.exports={signIn,favorite,setImage}