import { useState } from "react";
import "./App.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";


const amazon_prime_images = [
  "./amazon_prime_images/img1.jpg",
  "./amazon_prime_images/img2.jpg",
  "./amazon_prime_images/img3.jpg",
  "./amazon_prime_images/img4.jpg",
  "./amazon_prime_images/img5.jpg",
  "./amazon_prime_images/img6.jpg",
  "./amazon_prime_images/img7.jpg",
  "./amazon_prime_images/img8.jpg",
  "./amazon_prime_images/img9.jpg",
  "./amazon_prime_images/img10.jpg",
];

function ThirdExample(){
    const [count, setCount] = useState(0);
    return(
        <>
         <h1 className="h1">Third Example</h1>
        <div className="d-flex">
            <button  className="btn button1"
            onClick={() => {
            if (count === 0) {
              setCount(amazon_prime_images.length - 1);
            } else {
              setCount(count - 1);
            }
          }}><MdArrowBackIos style={{fontSize : "40px", color: "white"}}/></button>
            <img width={"1200px"} src={amazon_prime_images[count]} alt="movieImg"/>
            <button className="btn button2"
            onClick={() => {
            if (count === amazon_prime_images.length - 1) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }}
        >
          <MdArrowForwardIos style={{fontSize : "40px", color: "white"}}/>
          </button>
            <div
        style={{
          position: "absolute",
          display: "flex",
          top : "95%",
          gap: "10px"
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
          <div className={count === i ? "common active" : "common"}></div>
        ))}
      </div>
        </div>
        <div className="button3">
        <button
          style={{
            width: "150px",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            borderRadius: "50px",
            padding: "10px 0px"
          }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </div>
        <p className="h1">
        Here you can also track the carousel image index with below dotted
        circles
      </p>
        </>
    )
}

export default ThirdExample;