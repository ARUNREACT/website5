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
      <div className="col-md-8 col-12">
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
      <div className="col-md-4 col-12 d-flex justify-content-center ">
        <img className="img-fluid" src={props.img} alt="" />
      </div>
    </div>
  );
}

export function Mail(props: any) {
  return (
    <div className="col-md-4 col-12 mx-auto d-flex flex-column align-items-center mail py-3">
      <i className={props.icon}></i>
      <p className="mt-3">{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
}
