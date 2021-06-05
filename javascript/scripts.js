const downloadCV = () => {
  createAnchorElement().click();
};

const createAnchorElement = () => {
  const linkCV =
    "https://docs.google.com/document/d/190xvd0PqpL3RlfSsRnkQV2prAIOhf0rMSHMYYhaai4Q/export?format=pdf";
  const anchor = document.createElement("a");
  anchor.href = linkCV;
  anchor.download = "CV - Gabriel Beijamin Mendes Alves";
  return anchor;
};
