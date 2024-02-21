import github from "./../../public/images/github.png";
import linkedin from "./../../public/images/linkedin.png";
import email from "./../../public/images/email.png";

function Social() {
	return (
		<div className='flex gap-[20px]'>
			<div className='flex justify-center items-center rounded-full hover:scale-[1.2] '>
				<a href='mailto:anuraagrk4@gmail.com'>
					{" "}
					<img
						className='w-[40px] h-[40px]'
						src={email}
						alt=''
					/>
				</a>
			</div>
			<div className='flex justify-center items-center rounded-full hover:scale-[1.2] '>
				<a href='https://www.linkedin.com/in/anuragsinha03/'>
					{" "}
					<img
						className='w-[40px] h-[40px]'
						src={linkedin}
						alt=''
					/>
				</a>
			</div>

			<div className='flex justify-center items-center rounded-full hover:scale-[1.2] '>
				<a href='https://github.com/anuragsinha03'>
					{" "}
					<img
						className='w-[40px] h-[40px]'
						src={github}
						alt=''
					/>
				</a>
			</div>
		</div>
	);
}

export default Social;
