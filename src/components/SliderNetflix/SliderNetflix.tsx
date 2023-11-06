import { useEffect } from "react";
import {
  Container,
  Handle,
  Header,
  ProgressBar,
  Slider,
  Title,
} from "./styled-components";

export type SliderNetflixProps = {};

const SliderNetflix = ({}: SliderNetflixProps) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      let handle;
      if (e.target.matches(".handle")) {
        handle = e.target;
      } else {
        handle = e.target.closest(".handle");
      }
      if (handle != null) {
        onHandleClick(handle);
      }
    });
    function onHandleClick(handle: any) {
      const progressBar = handle.closest(".row").querySelector(".progress-bar");
      const slider = handle.closest(".container").querySelector(".slider");
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      const progressBarItemCount = progressBar.children.length;
      if (handle.classList.contains("left-handle")) {
        if (sliderIndex - 1 < 0) {
          slider.style.setProperty("--slider-index", progressBarItemCount - 1);
          progressBar.children[sliderIndex].classList.remove("active");
          progressBar.children[progressBarItemCount - 1].classList.add(
            "active"
          );
        } else {
          slider.style.setProperty("--slider-index", sliderIndex - 1);
          progressBar.children[sliderIndex].classList.remove("active");
          progressBar.children[sliderIndex - 1].classList.add("active");
        }
      }
      if (handle.classList.contains("right-handle")) {
        if (sliderIndex + 1 >= progressBarItemCount) {
          slider.style.setProperty("--slider-index", 0);
          progressBar.children[sliderIndex].classList.remove("active");
          progressBar.children[0].classList.add("active");
        } else {
          slider.style.setProperty("--slider-index", sliderIndex + 1);
          progressBar.children[sliderIndex].classList.remove("active");
          progressBar.children[sliderIndex + 1].classList.add("active");
        }
      }
    }
  }, []);

  function calculateProgressBar(progressBar: HTMLElement) {
    progressBar.innerHTML = "";
    const slider = progressBar.closest(".row")?.querySelector(".slider");
    if (!slider) return;
    const itemCount = slider?.children.length;
    const itemPerScree = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = Math.ceil(itemCount / itemPerScree);
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  }
  useEffect(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
  }, []);

  return (
    <div className="row">
      <Header className="header">
        <Title className="title">Title</Title>
        <ProgressBar className="progress-bar"></ProgressBar>
      </Header>
      <Container className="container">
        <Handle className="handle left-handle">&#8249;</Handle>
        <Slider className="slider">
          <img src="https://via.placeholder.com/210?text=1" alt="" />
          <img src="https://via.placeholder.com/220?text=2" alt="" />
          <img src="https://via.placeholder.com/230?text=3" alt="" />
          <img src="https://via.placeholder.com/240?text=4" alt="" />
          <img src="https://via.placeholder.com/250?text=5" alt="" />
          <img src="https://via.placeholder.com/260?text=6" alt="" />
          <img src="https://via.placeholder.com/270?text=7" alt="" />
          <img src="https://via.placeholder.com/280?text=8" alt="" />
          <img src="https://via.placeholder.com/290?text=9" alt="" />
        </Slider>
        <Handle className="handle right-handle">&#8250;</Handle>
      </Container>
    </div>
  );
};

export default SliderNetflix;
