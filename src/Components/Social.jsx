import { socialData } from "./../data/socialData";

function Social() {
	return (
		<div className='flex gap-[20px]'>
			{socialData.map((social, index) => (
				<div
					key={index}
					className='flex justify-center items-center rounded-full transition-transform duration-300 ease-out transform hover:scale-[1.2]'>
					<a
						href={social.link}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='h-[30px] w-[30px] md:w-[40px] md:h-[40px]'
							src={social.image}
							alt=''
						/>
					</a>
				</div>
			))}
		</div>
	);
}

export default Social;
