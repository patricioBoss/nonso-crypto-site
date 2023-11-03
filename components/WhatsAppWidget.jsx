import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <FloatingWhatsApp
      accountName="FidelityCryptoPro"
      avatar="/img/fidelitycrypto-logo.png"
      buttonClassName="left-[2rem]"
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      phoneNumber="15623965148"
      chatboxClassName={`left-[2rem]  ${
        open ? "animate-bounce-in" : " animate-bounce-out"
      }`}
    />
  );
};

export default WhatsAppWidget;
