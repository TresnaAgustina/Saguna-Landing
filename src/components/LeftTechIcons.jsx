import { motion } from "framer-motion";
import clsx from "clsx";

const LeftTechIcons = () => {
  return (
    <div className={clsx("z-30 top-0")} id="content">
      <div className={clsx("w-auto h-auto flex flex-col gap-3")} id="container">
        {/* single icons C# */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, x: -50 }}
          className={clsx(
            "relative w-20 h-20 flex items-center justify-center p-4 border border-[#9B4F96] rounded-full bg-secondary shadow-techLogo"
          )}
          id="singleIcon C#"
        >
          <svg
            width="49"
            height="57"
            viewBox="0 0 49 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.3891 13.6711L25.8805 1.29146C25.5242 1.0688 25.0344 0.979736 24.5 0.979736C23.9656 0.979736 23.4758 1.11333 23.1195 1.29146L1.74453 13.7157C0.9875 14.161 0.453125 15.2743 0.453125 16.1204V40.9243C0.453125 41.4141 0.542188 41.993 0.898438 42.4829L48.4578 14.8735C48.1906 14.3391 47.7898 13.9383 47.3891 13.6711Z"
              fill="#9B4F96"
            />
            <path
              d="M0.764843 42.4383C0.9875 42.7946 1.29922 43.1063 1.61094 43.2844L23.075 55.7086C23.4312 55.9313 23.9211 56.0204 24.4555 56.0204C24.9898 56.0204 25.4797 55.8868 25.8359 55.7086L47.2109 43.2844C47.968 42.8391 48.5023 41.7258 48.5023 40.8797V16.0758C48.5023 15.675 48.4578 15.2297 48.2352 14.829L0.764843 42.4383Z"
              fill="#68217A"
            />
            <path
              d="M33.9852 33.8883C32.1148 37.1836 28.5523 39.4102 24.5 39.4102C18.4883 39.4102 13.5898 34.5118 13.5898 28.5C13.5898 22.4883 18.4883 17.5899 24.5 17.5899C28.5523 17.5899 32.1148 19.8165 33.9852 23.1563L39.7742 19.8165C36.7461 14.5172 31.0461 10.9102 24.5 10.9102C14.7922 10.9102 6.91016 18.7922 6.91016 28.5C6.91016 38.2079 14.7922 46.0899 24.5 46.0899C31.0016 46.0899 36.7016 42.5274 39.7297 37.2727L33.9852 33.8883ZM39.1953 29.4797L39.5961 27.5649H37.7258V25.4719H39.9969L40.5312 22.711H42.7133L42.1789 25.4274H43.8711L44.4055 22.711H46.543L46.0086 25.4274H47.0773V27.5204H45.6078L45.207 29.4352H47.0773V31.5282H44.8062L44.2719 34.2001H42.0898L42.6242 31.5282H40.932L40.3977 34.2001H38.2602L38.7945 31.5282H37.7258V29.4352H39.1953V29.4797ZM41.3328 29.4797H43.025L43.4258 27.5649H41.7336L41.3328 29.4797Z"
              fill="white"
            />
          </svg>
        </motion.div>
        {/* end single icons */}

        {/* single icons Astro */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, x: 50 }}
          className={clsx(
            "relative w-20 h-20 flex items-center justify-center p-4 border border-[#FF500C] rounded-full bg-secondary shadow-techLogo"
          )}
          id="singleIcon Astro"
        >
          <svg
            width="34"
            height="48"
            viewBox="0 0 34 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8375 1.69729C24.2176 2.16877 24.4113 2.8051 24.7973 4.0762L33.2567 31.8637C30.0793 30.2146 26.669 29.0601 23.1434 28.4399L17.6363 9.82815C17.5929 9.67937 17.5023 9.54872 17.3782 9.45582C17.2541 9.36292 17.1033 9.31279 16.9483 9.31297C16.7933 9.31314 16.6425 9.36361 16.5186 9.45679C16.3948 9.54997 16.3045 9.68083 16.2613 9.82971L10.8203 28.4305C7.27929 29.0481 3.85376 30.2045 0.662903 31.8594L9.16212 4.07034C9.55119 2.80081 9.74493 2.16565 10.1246 1.69416C10.4602 1.27915 10.8963 0.95672 11.3914 0.757446C11.9512 0.532837 12.6164 0.532837 13.9442 0.532837H20.0156C21.3445 0.532837 22.0098 0.532837 22.5715 0.759009C23.067 0.958246 23.5026 1.28131 23.8375 1.69729Z"
              fill="url(#paint0_linear_274_140)"
            />
            <path
              d="M24.8492 33.1852C23.4547 34.3785 20.6711 35.1918 17.4652 35.1918C13.5317 35.1918 10.2328 33.9664 9.35822 32.3184C9.04572 33.2629 8.9754 34.3434 8.9754 35.0348C8.9754 35.0348 8.76954 38.4235 11.127 40.7809C11.127 40.4899 11.1843 40.2018 11.2956 39.9331C11.407 39.6643 11.5702 39.42 11.7759 39.2143C11.9817 39.0086 12.2259 38.8455 12.4947 38.7342C12.7635 38.6229 13.0516 38.5656 13.3426 38.5656C15.4402 38.5656 15.4391 40.3949 15.4375 41.8813V42.0125C15.4375 44.2676 16.8152 46.1996 18.7746 47.0145C18.4726 46.3941 18.3161 45.713 18.3168 45.0231C18.3168 42.8715 19.5785 42.0719 21.0465 41.141C22.2141 40.4012 23.511 39.5785 24.4035 37.9293C24.8853 37.0407 25.1371 36.0456 25.136 35.0348C25.1365 34.4071 25.0398 33.7832 24.8492 33.1852Z"
              fill="#FF5D01"
            />
            <path
              d="M24.8492 33.1852C23.4547 34.3785 20.6711 35.1918 17.4652 35.1918C13.5317 35.1918 10.2328 33.9664 9.35822 32.3184C9.04572 33.2629 8.9754 34.3434 8.9754 35.0348C8.9754 35.0348 8.76954 38.4235 11.127 40.7809C11.127 40.4899 11.1843 40.2018 11.2956 39.9331C11.407 39.6643 11.5702 39.42 11.7759 39.2143C11.9817 39.0086 12.2259 38.8455 12.4947 38.7342C12.7635 38.6229 13.0516 38.5656 13.3426 38.5656C15.4402 38.5656 15.4391 40.3949 15.4375 41.8813V42.0125C15.4375 44.2676 16.8152 46.1996 18.7746 47.0145C18.4726 46.3941 18.3161 45.713 18.3168 45.0231C18.3168 42.8715 19.5785 42.0719 21.0465 41.141C22.2141 40.4012 23.511 39.5785 24.4035 37.9293C24.8853 37.0407 25.1371 36.0456 25.136 35.0348C25.1365 34.4071 25.0398 33.7832 24.8492 33.1852Z"
              fill="url(#paint1_linear_274_140)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_274_140"
                x1="26.4921"
                y1="-1.65352"
                x2="7.30474"
                y2="42.8517"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000014" />
                <stop offset="1" stopColor="#150426" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_274_140"
                x1="31.1281"
                y1="23.4863"
                x2="22.8721"
                y2="40.7699"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF1639" />
                <stop offset="1" stopColor="#FF1639" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {/* end single icons */}

        {/* single icons */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, x: -50 }}
          className={clsx(
            "relative w-20 h-20 flex items-center justify-center p-4 border border-[#FFE053] rounded-full bg-secondary shadow-techLogo"
          )}
          id="singleIcon Python"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7883 0.0141602C12.1258 0.0141602 12.9164 5.52691 12.9164 5.52691L12.9305 11.2383H25.0141V12.953H8.13105C8.13105 12.953 0.0283203 12.0304 0.0283203 24.8569C0.0283203 37.6838 7.10059 37.2289 7.10059 37.2289H11.3213V31.2767C11.3213 31.2767 11.0938 24.1767 18.2807 24.1767H30.2654C30.2654 24.1767 36.9988 24.2859 36.9988 17.6436V6.66083C36.9988 6.66083 38.0215 0.0141602 24.7883 0.0141602ZM18.1254 3.85494C18.4109 3.85469 18.6937 3.91096 18.9576 4.02054C19.2214 4.13012 19.4612 4.29086 19.6631 4.49357C19.865 4.69627 20.0251 4.93695 20.1343 5.20184C20.2434 5.46673 20.2995 5.75063 20.2992 6.0373C20.2995 6.32396 20.2434 6.60786 20.1343 6.87275C20.0251 7.13764 19.865 7.37833 19.6631 7.58103C19.4612 7.78373 19.2214 7.94447 18.9576 8.05405C18.6937 8.16364 18.4109 8.21991 18.1254 8.21965C17.8398 8.21991 17.5571 8.16364 17.2932 8.05405C17.0293 7.94447 16.7896 7.78373 16.5877 7.58103C16.3858 7.37833 16.2257 7.13764 16.1165 6.87275C16.0074 6.60786 15.9513 6.32396 15.9516 6.0373C15.9513 5.75063 16.0074 5.46673 16.1165 5.20184C16.2257 4.93695 16.3858 4.69627 16.5877 4.49357C16.7896 4.29086 17.0293 4.13012 17.2932 4.02054C17.5571 3.91096 17.8398 3.85469 18.1254 3.85494Z"
              fill="url(#paint0_linear_221_186)"
            />
            <path
              d="M25.1479 49.8287C37.8103 49.8287 37.0197 44.3159 37.0197 44.3159L37.0057 38.6047H24.9219V36.89H41.8049C41.8049 36.89 49.9076 37.8126 49.9076 24.9857C49.9076 12.1591 42.8354 12.614 42.8354 12.614H38.6146V18.5659C38.6146 18.5659 38.8422 25.6659 31.6553 25.6659H19.6705C19.6705 25.6659 12.9371 25.5567 12.9371 32.1993V43.1822C12.9371 43.1822 11.9148 49.8287 25.1479 49.8287ZM31.8107 45.9883C31.5252 45.9885 31.2424 45.9323 30.9785 45.8227C30.7147 45.7131 30.4749 45.5524 30.273 45.3497C30.0711 45.147 29.911 44.9063 29.8019 44.6414C29.6927 44.3765 29.6367 44.0926 29.6369 43.8059C29.6366 43.5192 29.6927 43.2353 29.8018 42.9704C29.9109 42.7055 30.0711 42.4648 30.273 42.2621C30.4749 42.0593 30.7146 41.8986 30.9785 41.789C31.2424 41.6794 31.5252 41.6231 31.8107 41.6234C32.0963 41.6231 32.3791 41.6794 32.6429 41.789C32.9068 41.8986 33.1465 42.0593 33.3484 42.262C33.5504 42.4647 33.7105 42.7054 33.8196 42.9703C33.9288 43.2352 33.9848 43.5191 33.9846 43.8057C33.9848 44.0924 33.9288 44.3763 33.8196 44.6412C33.7105 44.9061 33.5504 45.1468 33.3484 45.3495C33.1465 45.5522 32.9068 45.7129 32.6429 45.8225C32.3791 45.9321 32.0963 45.9885 31.8107 45.9883Z"
              fill="url(#paint1_linear_221_186)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_221_186"
                x1="646.414"
                y1="599.731"
                x2="3968.08"
                y2="3899.88"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#387EB8" />
                <stop offset="1" stopColor="#366994" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_221_186"
                x1="720.441"
                y1="778.494"
                x2="3384.74"
                y2="3287.31"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE052" />
                <stop offset="1" stopColor="#FFC331" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {/* end single icons */}

        {/* single icons */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, x: 50 }}
          className={clsx(
            "relative w-20 h-20 flex items-center justify-center p-4 border border-[#4F98FF] rounded-full bg-secondary shadow-techLogo"
          )}
          id="singleIcon Laravel"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 0C11.2156 0 0 11.2156 0 25C0 38.7844 11.2156 50 25 50C38.7812 50 50 38.7844 50 25C50 11.2156 38.7812 0 25 0ZM25 48.8531C11.8469 48.8531 1.14688 38.1531 1.14688 25C1.14688 11.8438 11.8438 1.14688 25 1.14688C38.15 1.14688 48.85 11.8438 48.85 25C48.85 38.1531 38.15 48.8531 25 48.8531ZM39.4781 23.9156C39.4781 21.2656 38.525 19.4313 37.7094 18.0031L37.4594 17.5969C36.4688 16.0031 35.6031 14.6031 35.6031 12.9719C35.6031 11.0031 37.0969 9.16562 39.2031 9.16562C39.2453 9.16562 39.286 9.16847 39.3262 9.17128C39.3457 9.17263 39.365 9.17398 39.3844 9.175L39.4813 9.18437C35.5318 5.55669 30.3627 3.54661 25 3.55312C21.4458 3.5513 17.9471 4.43382 14.819 6.12116C11.6909 7.80849 9.03176 10.2476 7.08125 13.2188C7.58125 13.2344 8.05937 13.2469 8.4625 13.2469C10.7031 13.2469 14.175 12.975 14.175 12.975C15.3312 12.9062 15.4688 14.6031 14.3125 14.7406C14.3125 14.7406 13.1531 14.8781 11.8594 14.9438L19.6719 38.175L24.3594 24.0938L21.0156 14.9406C19.8625 14.8719 18.7687 14.7375 18.7687 14.7375C17.6125 14.6688 17.75 12.9 18.9031 12.9688C18.9031 12.9688 22.4469 13.2406 24.5531 13.2406C26.7969 13.2406 30.2719 12.9688 30.2719 12.9688C31.4281 12.9 31.5625 14.6 30.4062 14.7375C30.4062 14.7375 29.2437 14.8719 27.9531 14.9406L35.7031 37.9937L37.8406 30.8469L38.0094 30.3062C38.8531 27.6187 39.475 25.6344 39.475 23.9125L39.4781 23.9156ZM3.55312 25C3.55291 29.0273 4.6865 32.9734 6.82415 36.3865C8.96181 39.7997 12.0172 42.5421 15.6406 44.3L5.40625 16.2687C4.18072 19.0162 3.54923 21.9916 3.55312 25ZM18.9406 45.5719L25.3781 26.875L31.9687 44.9375C32.0125 45.0406 32.0625 45.1375 32.1219 45.2313C27.8733 46.728 23.2609 46.8472 18.9406 45.5719ZM43.8156 14.7094C43.9094 15.3937 43.9625 16.125 43.9625 16.9156C43.9625 19.0906 43.5562 21.5375 42.3312 24.5969L35.7812 43.5344C40.6147 40.7261 44.1601 36.1409 45.6615 30.7563C47.1629 25.3716 46.5017 19.6135 43.8187 14.7094H43.8156Z"
              fill="#4F98FF"
            />
          </svg>
        </motion.div>
        {/* end single icons */}
      </div>
    </div>
  );
};
export default LeftTechIcons;
