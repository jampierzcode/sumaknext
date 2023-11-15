import React, { useEffect } from "react";

const FacebookChat = () => {
  useEffect(() => {
    // Agrega el código para inicializar el plugin de chat de Facebook aquí
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "108720132335364");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default FacebookChat;
