import {ClassAttributes, HTMLAttributes, type JSX} from 'react';

const Banner = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & {bgcolor: string; text: string; color?: string}) => {
	return (
		<div className={` p-2 bg-${props.bgcolor}-600 text-${props.color} text-center`} {...props}>
			<span>{props.text}</span>
		</div>
	);
};

export default Banner;
