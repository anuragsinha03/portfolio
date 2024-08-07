import PropTypes from "prop-types";

function OutlinedBtn(props) {
	return (
		<>
			{props.btnText === "CONTACT" ? (
				<div className='flex justify-center items-center h-[50px] w-[90vw]  md:h-[60px] md:w-[200px] border-2 border-black text-[#000] bg-[#eda22a]'>
					<button className='text-[28px] font-light'>
						{props.btnText}
					</button>
				</div>
			) : (
				<div className='flex justify-center items-center  h-[50px] w-[90vw] md:h-[60px] md:w-[200px] border-2'>
					<button className='text-[28px] font-light'>
						{props.btnText}
					</button>
				</div>
			)}
		</>
	);
}

export default OutlinedBtn;

OutlinedBtn.propTypes = {
	btnText: PropTypes.string.isRequired,
};
