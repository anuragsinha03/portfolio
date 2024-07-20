import { useNavigate } from "react-router-dom";

function ThankYou() {
	const navigate = useNavigate();

	const handleHomeClick = () => {
		navigate("/");
	};

	return (
		<section className='flex flex-col justify-center items-center gap-[50px] h-screen bg-[#002244] text-[#fff]'>
			<div className='flex flex-col justify-center items-center '>
				<div className='text-[24px] md:text-[40px]'>THANK YOU!</div>
				<p className='border-b-[2px] pb-2'>
					We have received your message
				</p>
			</div>
			<button
				className='bg-[#eda22a] w-[10rem] hover:bg-[#ff9b30] text-[#000] p-[10px] text-[20px]'
				onClick={handleHomeClick}>
				HOME
			</button>
		</section>
	);
}

export default ThankYou;
