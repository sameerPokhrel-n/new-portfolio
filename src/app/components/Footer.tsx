import { style } from "../styles";

export function Footer() {
  return (
    <div
      className={`${style.container} ${style.paddingX} p-2 bg-lightFooter dark:!bg-darkPrimary`}
    >
      <div className={`${style.flexRow} justify-center place-items-center`}>
        <p
          className={`${style.paragraph} font-poppins !text-white text-center`}
        >
          2023 <strong className="text-secondary">Samir</strong> All right
          reserved, Inc
        </p>
      </div>
    </div>
  );
}
