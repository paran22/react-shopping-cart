import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path fill="url(#trash_svg__a)" d="M0 0h24v24H0z" />
		<defs>
			<pattern
				id="trash_svg__a"
				width={1}
				height={1}
				patternContentUnits="objectBoundingBox"
			>
				<use xlinkHref="#trash_svg__b" transform="scale(.025)" />
			</pattern>
			<image
				xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURbu7u////729vbu7u7y8vLy8vLy8vEdwTLy8vLy8vLy8vL+/v7u7u7y8vLu7u7u7u729vbu7u7+/v7u7u7u7u7u7u7u7u7y8vL6+vru7u7y8vL29vbu7u7u7u7y8vLy8vLu7u7u7u6hNFAIAAAAhdFJOU4ABRsRoNnsAf4N6JJOSfL2+fTBxzPxXvzN4b1Z1zcCC+y6w4fIAAACdSURBVDjL7dTJDsIgFEBROvponedZ7///pKYmDS3QIBuN8W7K4iSEqWoUmIqA9bZSnapT7YKrDVb3ow33OFta8ABr3Z1aX+BsQQXWwm6wsKA4oIapAaVpDjvpdYXZa9RAAnoPSkBxRxgAXXvY39/vgc+DFPP7h78LP3HNxAfFhCVkylMGZQvT4deftjAZD7lJYrzrIvdNnRfxP/vhHjYnSVqiKRrnAAAAAElFTkSuQmCC"
				id="trash_svg__b"
				width={40}
				height={40}
			/>
		</defs>
	</svg>
);
export default SvgTrash;
