import React from "react";
function Navbar() {
  return (
    <nav className=" w-full  pt-4  text-center text-2xl justify-evenly  border-solid border-3">
      <div id="nav-upper" className=" w-full flex justify-between px-2 sm:px-2 lg:px-4 xl:px-6 2xl:px-8  items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.54286 28.8C0.257146 31.6714 0.0857196 34.2 0.0857196 35.1857C0.0857196 35.4429 0.300006 35.6143 0.514291 35.6143C1.75715 35.5286 5.44287 35.1428 8.70002 33.1286C9.2143 32.7857 9.72859 32.4857 10.1572 32.1429C15.8572 28.0286 17.0143 21.7286 17.1857 20.1429C17.3572 20.0143 17.4429 19.9286 17.5714 19.8H17.9572C18.1286 19.9286 18.2143 20.0143 18.3857 20.1857C18.5143 21.6 19.3286 26.7 24.0429 30.9857C24.1715 31.1143 24.3429 31.1143 24.5143 31.0714C24.7286 30.9857 24.9429 30.8571 25.2 30.6857C25.4572 30.5571 25.4572 30.2143 25.2429 30.0429C20.6143 25.9714 19.9714 20.2714 19.9286 20.0143C28.0286 21.1714 31.2857 27.0857 31.2857 27C31.8857 27.8571 31.9715 28.1571 32.1429 28.5C32.1429 28.5 33.3857 30.5571 33.8572 33.4714C33.9 33.7286 33.6857 33.9857 33.3857 33.9428C32.0572 33.7286 30.8572 33.3429 29.9572 33C29.8286 32.9571 29.6572 32.9571 29.5715 33.0429C29.3572 33.2143 29.1429 33.3857 28.9286 33.5143C28.6715 33.6857 28.7143 34.1143 29.0143 34.2C30.4715 34.8428 32.6572 35.4857 35.1858 35.5714C35.4429 35.5714 35.6143 35.3571 35.6143 35.1429C35.4 30.4286 33.1286 26.9571 33.1286 26.9571C32.8715 26.4857 32.5286 26.0143 32.1429 25.5C32.1429 25.5 28.1572 19.4571 20.1857 18.4286C19.9715 18.3857 19.8429 18.2143 19.8429 18.0429C19.8429 17.8286 19.8429 17.6571 19.8429 17.5286C19.8429 17.4 20.0572 17.3143 20.1429 17.2714C25.9715 16.4571 29.6143 13.2 31.2 11.4C31.3286 11.2714 31.3286 11.0571 31.2429 10.9286C31.1143 10.7143 30.9857 10.4571 30.8572 10.2429C30.7286 9.98571 30.3857 9.98571 30.1715 10.2C28.6715 12.0429 25.4143 14.9571 19.9286 15.7286C19.9714 15.4286 20.7857 8.48571 26.8715 4.41428C27.4286 4.07142 27.9429 3.72857 28.4143 3.47142C28.4143 3.47142 30.5572 2.22857 33.3857 1.8C33.6429 1.75714 33.9 2.01428 33.8572 2.27142C33.6429 3.68571 33.2143 4.88571 32.8715 5.78571C32.8286 5.91429 32.8286 6.08571 32.9143 6.17143C33.0858 6.38571 33.2572 6.64286 33.3857 6.85714C33.5572 7.11428 33.9858 7.07142 34.1143 6.77142C35.3572 3.94285 35.5286 1.45714 35.5286 0.471425C35.5286 0.214282 35.3143 0.0428532 35.1 0.0428532C33.8572 0.128567 30.1715 0.514283 26.9143 2.52857C26.3572 2.87143 25.8 3.21428 25.4572 3.51428C19.7572 7.62857 18.6 13.9286 18.4286 15.5143C18.2572 15.6428 18.1714 15.7286 18.0429 15.8571H17.6572C17.4857 15.7286 17.4 15.6429 17.2286 15.4714C17.1 14.0571 16.2857 9 11.5714 4.67143C11.4429 4.54285 11.2714 4.54285 11.1 4.62857C10.8857 4.75714 10.6286 4.88571 10.4143 5.01428C10.1572 5.14286 10.1572 5.48571 10.3714 5.65714C15 9.72857 15.6429 15.4286 15.6857 15.6857C7.58572 14.5714 4.45715 8.74286 4.37144 8.65714C4.07144 8.18571 3.77143 7.71428 3.47143 7.15714C3.47143 7.15714 2.27143 5.14285 1.75715 2.18571C1.97143 1.97142 2.01429 1.92857 2.22858 1.71429C3.55715 1.92857 4.75715 2.31428 5.65715 2.65714C5.78573 2.7 5.95715 2.7 6.04287 2.57143C6.25715 2.4 6.47144 2.22857 6.68572 2.1C6.94287 1.92857 6.9 1.5 6.6 1.37143C5.14286 0.72857 2.95715 0.0857143 0.428572 0C0.171429 0 0 0.214286 0 0.428571C0.214286 5.14286 2.48572 8.61428 2.48572 8.61428C2.74287 9.08571 3.08572 9.51428 3.47143 10.0714C3.47143 10.0714 7.45715 16.1143 15.4286 17.1429C15.6429 17.1857 15.7715 17.3571 15.7715 17.5286C15.7715 17.7 15.7715 17.8714 15.7715 18C15.7715 18.1714 15.6 18.3 15.5143 18.3C9.68573 19.0714 6.04286 22.3714 4.45714 24.1714C4.37143 24.3 4.32858 24.4286 4.37144 24.6C4.45715 24.8571 4.62858 25.1143 4.75715 25.3714C4.88572 25.6286 5.22858 25.6286 5.40001 25.4143C6.90001 23.6143 10.1572 20.6143 15.6857 19.8428C15.6429 20.1428 14.8286 27.0857 8.74286 31.1571C8.52858 31.3286 8.27144 31.4571 8.05716 31.6286C7.80002 31.8 5.10001 33.3 2.22858 33.7714C1.97144 33.8143 1.71429 33.5571 1.75715 33.3C1.97143 31.8428 2.4 30.6 2.78572 29.7429C2.82857 29.6143 2.82857 29.4429 2.74286 29.3571C2.57143 29.1429 2.40001 28.8857 2.27144 28.6714C2.05715 28.4571 1.67143 28.5 1.54286 28.8ZM3.47143 28.4143C4.28572 29.4857 5.3143 30.4714 6.12859 31.2C6.25716 31.3286 6.47143 31.3286 6.6 31.2429C6.81429 31.1143 7.07144 30.9857 7.28572 30.8571C7.50001 30.7286 7.54287 30.3857 7.32858 30.2143C5.61429 28.7571 4.4143 26.9571 4.4143 26.9571C4.1143 26.5286 3.81429 26.0143 3.51429 25.4571C2.01429 22.5429 1.62858 19.8857 1.58572 18.0857C1.58572 17.3143 1.62857 16.5857 1.71429 15.9428C1.75714 15.8143 1.75715 15.7286 1.75715 15.7286C1.97143 14.1 2.35714 12.7714 2.74286 11.8286C2.78571 11.7 2.78572 11.5286 2.70001 11.4429C2.52858 11.2714 2.40001 11.0143 2.22858 10.8C2.05715 10.5429 1.62857 10.5857 1.5 10.8857C1.02857 12.0857 0.471429 13.7143 0.214286 15.7286C0.214286 15.7286 -0.814287 21.2143 2.57143 26.9143C2.82857 27.5143 3.17143 28.0286 3.47143 28.4143ZM32.1 7.19999C31.2857 6.12857 30.2572 5.14285 29.4429 4.41428C29.3143 4.28571 29.1429 4.28571 28.9715 4.37143C28.7572 4.5 28.5 4.62857 28.2857 4.75714C28.0715 4.88571 28.0286 5.22857 28.2429 5.4C29.9572 6.85714 31.1572 8.65714 31.1572 8.65714C31.4572 9.04285 31.7572 9.55714 32.0572 10.1571C33.5572 13.0714 33.9429 15.7286 33.9858 17.5286C33.9858 18.3 33.9429 19.0286 33.8572 19.6714C33.8143 19.8 33.8143 19.8857 33.8143 19.8857C33.6 21.5571 33.2143 22.8857 32.8286 23.8286C32.7857 23.9571 32.7858 24.1286 32.9143 24.2571C33.0858 24.4714 33.2572 24.6857 33.3857 24.9C33.5572 25.1571 33.9858 25.1143 34.1143 24.8143C34.5858 23.6143 35.1429 21.9429 35.4 19.9286C35.4 19.9286 36.4286 14.4429 33.0429 8.74285C32.7857 8.18571 32.4429 7.67142 32.1 7.19999ZM10.0714 3.55714C10.2429 3.47142 10.5 3.3 10.6714 3.21429C16.5 0.471428 21.5572 1.8 23.9572 2.78571C24.0857 2.82857 24.2572 2.82857 24.3429 2.74285C24.5572 2.57143 24.7715 2.4 25.0286 2.22857C25.2857 2.05714 25.2429 1.62857 24.9429 1.5C21.5143 0 17.9572 0 17.7429 0C17.4857 0 12.6857 -5.31333e-06 8.6143 2.48571C8.14287 2.78571 7.71429 3.08571 7.24286 3.42857C7.24286 3.42857 5.87144 4.45714 4.58572 5.78571C4.45715 5.91429 4.45715 6.08571 4.54286 6.25714C4.67144 6.51428 4.8 6.77142 4.92858 6.98571C5.05715 7.24285 5.40001 7.24286 5.57143 7.07143C6.34286 6.21428 7.4143 5.18571 8.65716 4.37143C9.12859 4.07143 9.60001 3.81428 10.0714 3.55714ZM28.2857 32.1857C28.2857 32.1857 29.6143 31.1571 30.9429 29.8286C31.0715 29.7 31.0715 29.5286 31.0286 29.3571C30.9 29.1 30.7715 28.8857 30.6429 28.6286C30.5143 28.3714 30.1715 28.3714 30 28.5857C29.2715 29.4 28.4572 30.2571 27.2572 31.0714C26.8715 31.3714 26.1429 31.8429 25.5 32.1857C19.4143 35.3143 14.1429 33.9 11.6572 32.9143C11.5286 32.8714 11.3572 32.8714 11.2714 32.9571C11.0572 33.1286 10.8 33.3 10.5857 33.4286C10.3286 33.6 10.3714 34.0286 10.6714 34.1571C14.1 35.6571 17.6572 35.6571 17.8715 35.6571C18.1286 35.6571 22.9286 35.6571 27 33.1714C27.3857 32.8286 27.8572 32.5286 28.2857 32.1857ZM17.7857 17.4C17.9572 17.5714 18.0429 17.6571 18.2143 17.8286C18.0429 18 17.9572 18.0857 17.7857 18.2143C17.5714 18.2143 17.3572 18.0429 17.3572 17.7857C17.5286 17.6571 17.6143 17.5714 17.7857 17.4Z"
            fill="black"
          />
        </svg>

        <h2 className="font-extrabold text-3xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">LOGO</h2>
    <div className="flex w-fit items-center ">
        <svg
          width="180"
          height="30"
          viewBox="0 0 170 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 20.9998C16.7467 20.9998 21 16.7465 21 11.4998C21 6.25311 16.7467 1.99982 11.5 1.99982C6.25327 1.99982 1.99998 6.25311 1.99998 11.4998C1.99998 16.7465 6.25327 20.9998 11.5 20.9998Z"
            stroke="#292D32"
            strokeWidth="1.40625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 21.9998L20 19.9998"
            stroke="#292D32"
            strokeWidth="1.40625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.62 20.8116C60.28 20.9316 59.72 20.9316 59.38 20.8116C56.48 19.8216 50 15.6916 50 8.69156C50 5.60156 52.49 3.10156 55.56 3.10156C57.38 3.10156 58.99 3.98156 60 5.34156C61.01 3.98156 62.63 3.10156 64.44 3.10156C67.51 3.10156 70 5.60156 70 8.69156C70 15.6916 63.52 19.8216 60.62 20.8116Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.396 6.5H111.596C114.996 6.5 115.336 8.09 115.566 10.03L116.466 17.53C116.756 19.99 115.996 22 112.496 22H103.506C99.9961 22 99.2361 19.99 99.5361 17.53L100.436 10.03C100.656 8.09 100.996 6.5 104.396 6.5Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104 8V4.5C104 3 105 2 106.5 2H109.5C111 2 112 3 112 4.5V8"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M116.41 17.0312H104"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
          className="hidden sm:block lg:block xl:block 2xl:block"
            d="M156.162 10.87C156.062 10.86 155.942 10.86 155.832 10.87C153.452 10.79 151.562 8.84 151.562 6.44C151.562 3.99 153.543 2 156.003 2C158.453 2 160.443 3.99 160.443 6.44C160.433 8.84 158.543 10.79 156.162 10.87Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
           className="hidden sm:block lg:block xl:block 2xl:block"
            d="M151.159 14.56C148.739 16.18 148.739 18.82 151.159 20.43C153.909 22.27 158.419 22.27 161.169 20.43C163.589 18.81 163.589 16.17 161.169 14.56C158.429 12.73 153.919 12.73 151.159 14.56Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select className=" w-fit text-sm font-bold hidden sm:block lg:block xl:block 2xl:block">
          <option value="ENG">ENG</option>
          <option value="HND">HND</option>
          <option value="BNG">BNG</option>
        </select>
        </div>
      </div>






      <div id="nav-bottom" className="hidden sm:flex lg:flex xl:flex  2xl:flex w-full text-sm font-bold  text-center justify-evenly  mt-8 pb-4">
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
    </nav>
  );
}

export default Navbar;
