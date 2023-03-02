/** @jsxImportSource react */
import { useState, useCallback, useRef } from 'react';
import { ALGOLIA } from '../../consts';
import '@docsearch/css';
import './Search.css';

import { createPortal } from 'react-dom';
import * as docSearchReact from '@docsearch/react';

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal =
	docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =
	docSearchReact.useDocSearchKeyboardEvents ||
	(docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search() {
	// 是否展示搜索弹框
	const [isOpen, setIsOpen] = useState(false);
	//
	const searchButtonRef = useRef<HTMLButtonElement>(null);
	// 输入框中的初始值
	const [initialQuery, setInitialQuery] = useState('');
	// 点击搜索出现弹框
	const onOpen = useCallback(() => {
		// 弹框
		setIsOpen(true);
	}, [setIsOpen]);
	// 点击其他关闭弹窗
	const onClose = useCallback(() => {
		// 关闭弹窗
		setIsOpen(false);
	}, [setIsOpen]);
	// 在输入框中输入内容
	const onInput = useCallback(
		(e) => {
			setIsOpen(true);
			setInitialQuery(e.key);
			// 搜索后面的逻辑需要在这里添加。有后台数据的情况请求后台，没有的情况需要自己查找全部文档，然后再过滤
		},
		[setIsOpen, setInitialQuery]
	);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	return (
		<>
			<button type="button" ref={searchButtonRef} onClick={onOpen} className="search-input">
				<svg width="24" height="24" fill="none">
					<path
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<span>Search</span>

				<span className="search-hint">
					<span className="sr-only">Press </span>

					<kbd>/</kbd>

					<span className="sr-only"> to search</span>
				</span>
			</button>

			{isOpen &&
				createPortal(
					<DocSearchModal
						initialQuery={initialQuery}
						initialScrollY={window.scrollY}
						onClose={onClose}
						indexName={ALGOLIA.indexName}
						appId={ALGOLIA.appId}
						apiKey={ALGOLIA.apiKey}
						transformItems={(items) => {
							return items.map((item) => {
								// We transform the absolute URL into a relative URL to
								// work better on localhost, preview URLS.
								const a = document.createElement('a');
								a.href = item.url;
								const hash = a.hash === '#overview' ? '' : a.hash;
								return {
									...item,
									url: `${a.pathname}${hash}`,
								};
							});
						}}
					/>,
					document.body
				)}
		</>
	);
}
