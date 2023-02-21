import "../component/Layout.css";

// export function Carousel(props: any) {
//   return (
//     <div className={props.classname} data-bs-interval={props.interval}>
//       <img src={props.img} className="d-block img-fluid w-100" alt="..." />
//       <div className="carousel-captio">
//         <h1 className="">{props.h1}</h1>
//         <p>{props.p}</p>
//       </div>
//     </div>
//   );
// }

export function Services(props: any) {
  return (
    <div className="services mt-4">
      <img src={props.img} alt="" />
      <i className={props.icon}></i>
      <h6 className="">
        {props.h5}
        <span>{props.span}</span>
      </h6>
      <a href={props.href}>Know More</a>
    </div>
  );
}

export function Scroll(props: any) {
  return <img className="img-fluid" src={props.img} alt="" />;
}

export function Sliderinput(props: any) {
  return (
    <input
      type="radio"
      name="slider"
      title={props.type}
      className="slider__nav"
    />
  );
}

export function Slider(props: any) {
  return (
    <div className="slider__contents">
      <img src={props.img} className="slider__image"></img>
      <h5 className="slider__caption">{props.h5}</h5>
      <p className="slider__txt">{props.p}</p>
    </div>
  );
}

export function Twoslide(props: any) {
  return (
    <div className={props.classname}>
      <div className="col-sm-8 py-4">
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
      <div>
        <img className="img-fluid col-sm-4 m-0 p-0" src={props.img} alt="" />
      </div>
    </div>
  );
}
