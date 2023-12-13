import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <FloatingWhatsApp
      accountName="WisevestCapital"
      avatar="/img/wisevestcapital-logo.jpg"
      buttonClassName="left-[2rem]"
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      phoneNumber="16465439217"
      chatboxClassName={`left-[2rem] ${
        open ? "animate-bounce-in" : " animate-bounce-out"
      }`}
    />
  );
};

export default WhatsAppWidget;
