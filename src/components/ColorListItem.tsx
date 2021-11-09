import React, { HTMLAttributes, useEffect, useState } from 'react';
import Bookmark from '@material-ui/icons/Bookmark';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import classNames from 'classnames';
import * as munsell from 'munsell';
import * as gtag from "../lib/gtag";

interface ColorListItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  yomi: string;
  code: string;
  explain: string;
  isHideColor?: boolean;
  isHideName?: boolean;
  checked?: boolean;
  pass?: number;
  total?: number;
  paletteStyle?: React.CSSProperties;
  onChecked?: () => void;
}

const ColorListItem = ({
  id,
  name,
  yomi,
  code,
  explain,
  isHideColor = false,
  isHideName = false,
  checked = false,
  pass = 0,
  total = 0,
  children,
  className,
  paletteStyle = {},
  onChecked,
  ...props
}: ColorListItemProps) => {
  const [isDisplayColor, setIsDisplayColor] = useState(!isHideColor);
  const [isDisplayName, setIsDisplayName] = useState(!isHideName);

  useEffect(() => {
    setIsDisplayColor(!isHideColor);
  }, [isHideColor])

  useEffect(() => {
    setIsDisplayName(!isHideName);
  }, [isHideName])

  const displayColor = isDisplayColor ? code : "transparent";

  return (
    <div className={classNames("relative", className)} {...props}>
      <div className="group">
        <div
          className={classNames(
            "align-middle h-20 rounded-lg mb-2",
            !isDisplayColor && "border",
            (isHideColor || isHideName) && "cursor-pointer hover:opacity-90",
          )}
          style={{ background: displayColor, ...paletteStyle }}
          onClick={() => {
            if (isHideColor) setIsDisplayColor(!isDisplayColor);
            if (isHideName) setIsDisplayName(!isDisplayName);
          }}
        ></div>
        <div className={classNames("absolute right-0 top-0 rounded-bl-md rounded-tr-lg bg-white p-1", checked ? "" : "sm:opacity-0 group-hover:opacity-100")}>
          <span className="cursor-pointer hover:opacity-80" tabIndex={0} onClick={() => {
            onChecked && onChecked()
            gtag.event({ action: "click", category: "bookmark", label: code, value: checked ? "0" : "1" })
          }}>
            {checked
              ? <Bookmark className="text-red-500" />
              : <BookmarkBorder />}
          </span>
        </div>
      </div>
      <p className={classNames("font-bold mb-1", !isDisplayName && "opacity-0")}>{name}{yomi !== "" && `(${yomi})`}</p>
      <p className={classNames("text-gray-400 text-sm mb-1", !isDisplayColor && "opacity-0")}>{explain}</p>
      <div className="flow-root text-sm">
        <p className={classNames("inline-block", !isDisplayColor && "opacity-0")}>{munsell.hexToMunsell(code)}</p>
        <p className="inline-block text-gray-500 float-right">正答率 {total === 0 ? 0 : Math.floor(100 * pass / total)}% ({pass}/{total})</p>
      </div>
    </div>
  )
};

export default ColorListItem;