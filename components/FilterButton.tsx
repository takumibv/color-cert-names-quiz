import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export default ({ children, active = false, className, ...props }: FilterButtonProps) => {
  return (
    <button className={classNames(
      "border-2 border-transparent rounded-full  py-2 px-4",
      active ? "bg-blue-500 hover:bg-blue-700 text-white" : "border-gray-500 hover:bg-gray-100 text-gray-500",
      !props.disabled && "cursor-pointer",
      className,
    )} {...props}>
      {children}
    </button>
  )
};
