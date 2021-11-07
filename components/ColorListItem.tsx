import classNames from 'classnames';
import * as munsell from 'munsell';
import React, { HTMLAttributes, useEffect, useState } from 'react';

interface ColorListItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  yomi: string;
  code: string;
  explain: string;
  isHideColor?: boolean;
}

const ColorListItem = ({
  id,
  name,
  yomi,
  code,
  explain,
  isHideColor = false,
  children,
  ...props
}: ColorListItemProps) => {
  const [isDisplayColor, setIsDisplayColor] = useState(!isHideColor);

  useEffect(() => {
    setIsDisplayColor(!isHideColor);
  }, [isHideColor])

  const displayColor = isDisplayColor ? code : "transparent";

  return (
    <div {...props}>
      <div
        className={classNames(
          "align-middle h-24 mb-2",
          !isDisplayColor && "border",
          isHideColor && "cursor-pointer hover:opacity-90",
        )}
        style={{ background: displayColor }}
        onClick={() => {
          if (!isHideColor) return;
          setIsDisplayColor(!isDisplayColor);
        }}
      ></div>
      <div className="flow-root mb-1">
        <p className="font-bold inline-block mr-2">{name}{yomi !== "" && `(${yomi})`}</p>
        <p className={classNames("float-right", !isDisplayColor && "opacity-0")}>{munsell.hexToMunsell(code)}</p>
      </div>
      <p className={classNames("text-gray-400", !isDisplayColor && "opacity-0")}>{explain}</p>
    </div>
  )
};

export default ColorListItem;