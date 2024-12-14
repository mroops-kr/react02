import styles from "~pages/index/styles/index.module.scss";
import SearchBar from "~components/common/search/SearchBar";

function index() {
  const CARD_LIST: Array<string> = [];

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      {/* <CommonHeader /> */}
      {/* 공통 네비게이션 UI 부분 */}
      {/* <CommonNav /> */}
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <SearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      {/* <CommonFooter /> */}
      {/* {open && <DetailDialog data={imgData} handleDialog={setOpen} />} */}
    </div>
  );
}

export default index;
