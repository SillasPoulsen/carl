function pagecontent({ project }) {
  return (
    <div className="projectContent" {...project.id}>
      <h1 className="greeting">{project.title}</h1>
      <p>{project.subTitle}</p>
      <iframe
        src={project.iframe}
        title={project.id}
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default pagecontent;
