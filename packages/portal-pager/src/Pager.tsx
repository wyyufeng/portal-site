/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import cls from 'classnames';
import Page from './Page';
import PropTypes from 'prop-types';
import PagerConfig from './PagerConfig';
export interface HrefCreator {
  (page: number, pageCount: number, pageRange: number): string;
}
export interface PagerProps {
  pageCount: number;
  pageRange: number;
  forcePage: number;
  prevLabel: string;
  nextLabel: string;
  firstLabel: string;
  lastLabel: string;
  showFirst: boolean;
  showLast: boolean;
  pagerClassName: string;
  pageClassName: string;
  containerClassName?: string;
  showTotal: boolean;
  showJump: boolean;
  onPageChange: (page: number) => any;
  hrefCreator: HrefCreator;
  autoHide: boolean;
}

export interface PagerState {
  current: number;
  jumpPage: any;
}
export default class Pager extends React.Component<PagerProps, PagerState> {
  readonly state = {
    current: 1,
    jumpPage: ''
  };

  static contextType = PagerConfig;

  static defaultProps = {
    prevLabel: '上一页',
    nextLabel: '下一页',
    pagerClassName: 'mp-pages',
    firstLabel: '首页',
    lastLabel: '末页',
    showFirst: true,
    showLast: true,
    pageClassName: 'page-item',
    containerClassName: 'mp-pager',
    showTotal: true,
    showJump: true,
    pageRange: 5,
    autoHide: true
  };

  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(props: PagerProps) {
    if (typeof props.forcePage !== 'undefined') {
      return { current: props.forcePage };
    }
    return null;
  }

  getAssignProps() {
    return Object.assign({}, this.props, this.context);
  }

  getPageNode(page: number) {
    const { current } = this.state;
    const { pageClassName } = this.getAssignProps();
    return (
      <Page
        href={this.createHref(page)}
        className={pageClassName}
        key={page}
        selected={current === page}
        onClick={(e) => {
          e.preventDefault();
          this.onPageClick(page);
        }}
        page={page}
      />
    );
  }

  createHref = (page: number) => {
    // const { current } = this.state;
    const { pageCount, pageRange, hrefCreator } = this.getAssignProps();

    return hrefCreator ? hrefCreator(page, pageCount, pageRange) : undefined;
  };

  pagination() {
    const items = [];
    const { pageCount, pageRange } = this.getAssignProps();

    const { current } = this.state;
    if (pageCount <= pageRange) {
      for (let i = 0; i < pageCount; i++) {
        items.push(this.getPageNode(i + 1));
      }
    } else {
      // nice
      //  pageRange = {current-2 current-1 current current+1 current+1  }
      const half = Math.floor(pageRange / 2);
      let start = current - half + 1 - (pageRange % 2);
      let end = current + half;

      if (current <= pageRange - half) {
        start = 1;
        end = pageRange;
      }
      if (current >= pageCount - half) {
        end = pageCount;
        start = pageCount - pageRange + 1;
      }

      let itPage = start;
      while (itPage <= end) {
        items.push(this.getPageNode(itPage));
        itPage++;
      }
    }
    return items;
  }

  onJumpInputChange = (e: any) => {
    const { pageCount } = this.getAssignProps();
    const value = e.target.value;
    const int = Number(value);
    if (int === 0 || Number.isNaN(int)) return this.setState({ jumpPage: '' });
    this.setState({ jumpPage: Math.max(1, Math.min(int, pageCount)) });
  };

  onJumpBtnClick = (e: any) => {
    e.preventDefault();
    const { jumpPage } = this.state;
    if (typeof jumpPage === 'number') {
      this.props.onPageChange(jumpPage);
      this.setState({ jumpPage: '' });
    }
  };

  onPageClick = (page: number) => {
    this.setState({ current: page });
    this.props.onPageChange(page);
  };

  onPrevPageClick = (e: any) => {
    e.preventDefault();
    const { current } = this.state;
    if (current === 1) return;
    this.setState((prevState) => ({
      current: prevState.current - 1
    }));
    this.props.onPageChange(current - 1);
  };

  onNextPageClick = (e: any) => {
    e.preventDefault();
    const { current } = this.state;
    const { pageCount } = this.props;
    if (current >= pageCount) return;
    this.setState((prevState) => ({
      current: prevState.current + 1
    }));
    this.props.onPageChange(current + 1);
  };

  render() {
    const {
      firstLabel,
      lastLabel,
      showFirst,
      showLast,
      pagerClassName,
      prevLabel,
      nextLabel,
      pageCount,
      hrefCreator,
      pageRange,
      containerClassName,
      showTotal,
      showJump,
      autoHide
    } = this.getAssignProps();
    if (pageCount <= 1 && autoHide) return null;
    const { current, jumpPage } = this.state;
    const showRightMore =
      pageCount > pageRange && current < Math.ceil(pageCount - pageRange / 2);
    const showLeftMore =
      pageCount > pageRange && current > Math.ceil(pageRange / 2);
    return (
      <div className={containerClassName}>
        <ul className={pagerClassName}>
          {showFirst && (
            <li
              className={cls('first-page', 'page-btn', {
                disable: pageCount === 1
              })}
            >
              <a
                href={
                  hrefCreator ? hrefCreator(1, pageCount, pageRange) : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  this.onPageClick(1);
                }}
              >
                {firstLabel}
              </a>
            </li>
          )}
          <li
            className={cls('prev-page', 'page-btn', {
              disable: current === 1
            })}
          >
            <a
              href={
                hrefCreator && current > 1
                  ? hrefCreator(current - 1, pageCount, pageRange)
                  : // eslint-disable-next-line no-script-url
                    'javascript:void(0)'
              }
              onClick={this.onPrevPageClick}
            >
              {prevLabel}
            </a>
          </li>
          {showLeftMore && (
            <li className='more-page page-btn disable'>
              <a>...</a>
            </li>
          )}
          {this.pagination()}
          {showRightMore && (
            <li className='more-page page-btn disable'>
              <a>...</a>
            </li>
          )}
          <li
            className={cls('next-page', 'page-btn', {
              disable: current >= pageCount
            })}
          >
            <a
              href={
                hrefCreator && current < pageCount
                  ? hrefCreator(current + 1, pageCount, pageRange)
                  : undefined
              }
              onClick={this.onNextPageClick}
            >
              {nextLabel}
            </a>
          </li>
          {showLast && (
            <li
              className={cls('last-page', 'page-btn', {
                disable: pageCount === 1
              })}
            >
              <a
                href={
                  hrefCreator
                    ? hrefCreator(pageCount, pageCount, pageRange)
                    : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  this.onPageClick(pageCount);
                }}
              >
                {lastLabel}
              </a>
            </li>
          )}
        </ul>

        {showTotal && <span className='page-total'>总页数:{pageCount}</span>}

        {showJump && (
          <div className='page-jump'>
            <input
              value={jumpPage}
              onChange={this.onJumpInputChange}
              type='text'
            />
            <button onClick={this.onJumpBtnClick} type='button'>
              确定
            </button>
          </div>
        )}
      </div>
    );
  }
}
