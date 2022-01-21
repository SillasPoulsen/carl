function pagecontent({ project, theme }) {
  return (
    <div className="projectContent">
      <h1 className={theme}>{project.title}</h1>
      <p>{project.subTitle}</p>
      <iframe
        src={project.iframe}
        title={project.id}
        width="640"
        height="400"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default pagecontent;
