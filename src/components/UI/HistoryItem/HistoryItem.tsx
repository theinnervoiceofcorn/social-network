import React from "react";
import { SCHistoryItem } from "./HistoryItem.styled"

interface IHistoryItem {
  posterImgSrc: string | undefined;
  userImgSrc: string | undefined;
  userTxt: string | undefined;
  isAddHistory?: boolean;
}

export const HistoryItem: React.FC<IHistoryItem> = ({
  posterImgSrc,
  userImgSrc,
  userTxt,
  isAddHistory
}: IHistoryItem) => {
  return (
    <SCHistoryItem>
      {isAddHistory ? (
        <div className="History__item add-history">
          <div className="icon-wrapper">
            <svg
              className="icon icon-plus"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <g>
                <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
              </g>
            </svg>
            <span>История</span>
          </div>
          <img src="./img/users/andrey-kashirskiy.jpeg" alt="Add History" />
        </div>
      ) : (
        <>
          <img src={posterImgSrc} alt="History Poster" />
          <div className="History__owner">
            <img className="owner__img" src={userImgSrc} alt="History Owner" />
            <span className="owner__name">{userTxt}</span>
          </div>
        </>
      )}
    </SCHistoryItem>
  );
};


// import { SCHistoryItem } from "./HistoryItem.styled";

// interface IHistoryItem {
//   posterImgSrc: string;
//   userImgSrc: string;
//   userTxt: string;
//   isAddHistory?: boolean;
// }

// export const HistoryItem = ({
//   posterImgSrc,
//   userImgSrc,
//   userTxt,
//   isAddHistory
// }: IHistoryItem) => {
//   return (
//     <SCHistoryItem>
//       {switch (isAddHistory) {
//         case true:
//           return (
//             <div className="History__item add-history">
//             <div className="icon-wrapper">
//               <svg
//                 className="icon icon-plus"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 14 14"
//               >
//                 <g>
//                   <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
//                 </g>
//               </svg>
//               <span>История</span>
//             </div>
//             <img src="./img/users/andrey-kashirskiy.jpeg" alt="Add History" />
//           </div>
//           )
//         default:
//           return (
//             <img src={posterImgSrc} alt="History Poster" />
//             <div className="History__owner">
//               <img className="owner__img" src={userImgSrc} alt="History Owner" />
//               <span className="owner__name">{userTxt}</span>
//             </div>
//           )
//       }}
      
//     </SCHistoryItem>
//   );
// };
