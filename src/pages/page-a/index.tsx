import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from "./components/modal";

const initialProjects = [
  { logo: "1", title: "Project 1", height: 40 },
  { logo: "2", title: "Project 2", height: 80 },
  { logo: "3", title: "Project 3", height: 120 },
  { logo: "4", title: "Project 4", height: 160 },
  { logo: "5", title: "Project 5", height: 200 },
  { logo: "6", title: "Project 6", height: 240 },
  { logo: "7", title: "Project 7", height: 280 },
  { logo: "8", title: "Project 8", height: 320 },
  { logo: "9", title: "Project 9", height: 360 },
  { logo: "10", title: "Project 10", height: 320 },
  { logo: "11", title: "Project 11", height: 280 },
  { logo: "12", title: "Project 12", height: 240 },
  { logo: "13", title: "Project 13", height: 200 },
  { logo: "14", title: "Project 14", height: 160 },
  { logo: "15", title: "Project 15", height: 120 },
  { logo: "16", title: "Project 16", height: 80 },
  { logo: "17", title: "Project 17", height: 40 },
];

const PageA: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [modalX, setModalX] = useState(window.innerWidth);

  const onLoadMore = () => {
    console.log("onLoadMore");
    setTimeout(() => {
      setProjects((prevProjects) => [...prevProjects, ...initialProjects]);
    }, 1000);
  };

  return (
    <div className={styles.pageA}>
      <div className={styles.title}>
        <span>PageA</span>
        <Link to="/page-b">Navigate to PageB</Link>
      </div>

      <div className={styles.projectListContainer} id="scrollableDiv">
        <InfiniteScroll
          dataLength={projects.length}
          next={onLoadMore}
          hasMore={true}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
          endMessage={<h4 style={{ textAlign: "center" }}>No more data</h4>}
          scrollThreshold={0.9}
          scrollableTarget="scrollableDiv"
        >
          <Masonry
            className={styles.projectList}
            columnClassName={styles.projectListColumn}
            breakpointCols={{ default: 5, 992: 4, 786: 3 }}
          >
            {projects.map((project, index) => (
              <div
                className={styles.projectItem}
                key={`${project.logo}-${index}`}
                style={{ height: project.height }}
                onClick={() => setModalX(0)}
              >
                {project.title}
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>

      <Modal x={modalX} onClose={() => setModalX(window.innerWidth)} />
    </div>
  );
};

export default PageA;
