/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	display: inline-block;
	height: ${({ height }) => (height ? `${height}px` : "50px")};
	width: ${({ width }) => (width ? `${width}px` : "50px")};
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	vertical-align: middle;
	background-color: "#eee";
	opacity: ${({ opacity }) => opacity || 0.25};
	animation: pulse ${({ duration }) => duration || "2.5s"} infinite ease-in-out;

	&:before {
		content: "";
		position: absolute;
		height: ${({ height }) => (height ? `${height * 2}px` : "100px")};
		width: ${({ width }) => (width ? `${width * 0.125}px` : "6.25px")};
		top: -50%;
		left: -50%;
		z-index: 1;
		background-image: -o-linear-gradient(
			left,
			transparent 0%,
			#fff 50%,
			transparent 100%
		);
		background-image: linear-gradient(
			90deg,
			transparent 0px,
			#fff 50%,
			transparent 100%
		);
		animation: wave ${({ duration }) => duration || "2.5s"} infinite ease-in-out;
		transform: rotate(25deg);
		${({ duration }) => duration === "0s" && "display: none;"};
	}
`;
