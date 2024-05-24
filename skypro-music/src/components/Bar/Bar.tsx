"use client";

import classNames from "classnames";
import styles from "./Bar.module.css";
import BarVolumeBlock from "@components/BarVolumeBlock/BarVolumeBlock";

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress}></div>
        <div className={styles.barPlayerBlock}>
          <div className={classNames(styles.barPlayer, styles.player)}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use href="image/icon/sprite.svg#iconprev"></use>
                </svg>
              </div>
              <div className={classNames(styles.playerBtnPlay, styles._btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                  <use href="/image/icon/sprite.svg#iconplay"></use>
                </svg>
              </div>
              <div className={styles.playerBtnNext}>
                <svg className={styles.playerBtnNextSvg}>
                  <use href="/image/icon/sprite.svg#iconnext"></use>
                </svg>
              </div>
              <div
                className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
              >
                <svg className={styles.playerBtnRepeatSvg}>
                  <use href="/image/icon/sprite.svg#iconrepeat"></use>
                </svg>
              </div>
              <div
                className={classNames(styles.playerbtnshuffle, styles._btnicon)}
              >
                <svg className={styles.playerBtnShuffleSvg}>
                  <use href="/image/icon/sprite.svg#iconshuffle"></use>
                </svg>
              </div>
            </div>

            <div
              className={classNames(styles.playerTrackPlay, styles.trackPlay)}
            >
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <svg className={styles.trackPlaySvg}>
                    <use href="/image/icon/sprite.svg#iconnote"></use>
                  </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                  <a className={styles.trackPlayAuthorLink} href="http://">
                    Ты та...{" "}
                  </a>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">
                    Баста
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.trackPlayLikeDis}>
              <div
                className={classNames(styles.trackPlayLike, styles._btnIcon)}
              >
                <svg className={styles.trackPlayLikeSvg}>
                  <use href="/image/icon/sprite.svg#iconlike"></use>
                </svg>
              </div>
              <div
                className={classNames(styles.trackPlayDislike, styles._btnIcon)}
              >
                <svg className={styles.trackPlayDislikeSvg}>
                  <use href="/image/icon/sprite.svg#icondislike"></use>
                </svg>
              </div>
            </div>
          </div>
          <BarVolumeBlock />
        </div>
      </div>
    </div>
  );
}