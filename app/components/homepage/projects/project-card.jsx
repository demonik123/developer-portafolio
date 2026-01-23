// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="relative rounded-lg border border-border bg-card w-full shadow-subtle">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-primary text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t border-border px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-primary">const</span>
            <span className="mr-2 text-foreground">project</span>
            <span className="mr-2 text-primary">=</span>
            <span className="text-muted-foreground">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-foreground">name:</span>
            <span className="text-muted-foreground">{`'`}</span>
            <span className="skill-text">{project.name}</span>
            <span className="text-muted-foreground">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-foreground">tools:</span>
            <span className="text-muted-foreground">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="skill-text">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-muted-foreground">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-muted-foreground">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-foreground">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-foreground">Description:</span>
            <span className="text-primary">{' ' + project.description}</span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div><span className="text-muted-foreground">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;