function pagecontent({ project, theme }) {
  const divStyle = {
    //position: "absolute",
    top: "0",
    left: "0",
    minWidth: "50vw",
    minHeight: "50vh",
  };
  return (
    <div className="projectContent">
      <h1 className={`font${theme}`}>{project.title}</h1>
      <p>{project.subTitle}</p>
      <iframe
        src={project.iframe}
        title={project.id}
        frameBorder="0"
        style={divStyle}
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default pagecontent;

// style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
