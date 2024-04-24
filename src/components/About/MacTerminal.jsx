import React from "react";
import "./MacTerminal.scss";

export const MacTerminal = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="option">
          <svg width="22" height="20">
            <circle cx="15" cy="10" r="6" fill="red" />
          </svg>
          <svg width="22" height="20">
            <circle cx="11" cy="10" r="6" fill="#ffd900" />
          </svg>
          <svg width="22" height="20">
            <circle cx="7" cy="10" r="6" fill="green" />
          </svg>
        </div>
        <div className="title">huynguyen —- zsh — 80x24</div>
      </div>

      <div className="content">
        <div className="content-row">
          <span className="path">huynguyen $</span>
          <span className="command">&#160;cd ~/hobby/interests/</span>
        </div>
        <div className="content-row">
          <span className="path">
            hobby/interests<span className="main">&#160;{`(main)`}&#160;</span>$
          </span>
          <span className="command">&#160;ls</span>
        </div>
        <div className="content-row">
          <span className="path">
            <span>⚽&#160;Football&#160;</span>
          </span>
        </div>
        <div className="content-row">
          <span className="path">
            <span>🎮&#160;Games (LOL, TFT)&#160;</span>
          </span>
        </div>
        <div className="content-row">
          <span className="path">
            <span>🎥&#160;Films&#160;</span>
          </span>
        </div>
        <div className="content-row">
          <span className="path">
            <span>📔&#160;Read & Collect Manga, Comics&#160;</span>
          </span>
        </div>
      </div>
    </div>
  );
};
