import Bookmark from '@material-ui/icons/Bookmark';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import classNames from 'classnames';
import * as munsell from 'munsell';

import React, { HTMLAttributes, useEffect, useState } from 'react';
import { ColorAchieveType } from '../utils';

interface ColorListItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  yomi: string;
  code: string;
  explain: string;
  isHideColor?: boolean;
  checked?: boolean;
  onChecked?: () => void;
}

const ColorListItem = ({
  id,
  name,
  yomi,
  code,
  explain,
  isHideColor = false,
  checked = false,
  children,
  className,
  onChecked,
  ...props
}: ColorListItemProps) => {
  const [isDisplayColor, setIsDisplayColor] = useState(!isHideColor);

  useEffect(() => {
    setIsDisplayColor(!isHideColor);
  }, [isHideColor])

  const displayColor = isDisplayColor ? code : "transparent";

  return (
    <div className={classNames("relative", className)} {...props}>
      <div className="group">
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
        <div className={classNames("absolute right-0 top-0 rounded-bl-md bg-white p-1", checked ? "" : "opacity-0 group-hover:opacity-100")}>
          <span className="cursor-pointer hover:opacity-80" tabIndex={0} onClick={() => { onChecked && onChecked() }}>
            {checked
              ? <Bookmark className="text-red-500" />
              : <BookmarkBorder />}
          </span>
        </div>
      </div>

      <div className="flow-root mb-1">
        <p className="font-bold inline-block mr-2">{name}{yomi !== "" && `(${yomi})`}</p>
        <p className={classNames("float-right", !isDisplayColor && "opacity-0")}>{munsell.hexToMunsell(code)}</p>
      </div>
      <p className={classNames("text-gray-400", !isDisplayColor && "opacity-0")}>{explain}</p>
    </div>
  )
};

export default ColorListItem;