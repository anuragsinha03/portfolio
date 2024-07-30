import OutlinedBtn from "./OutlinedBtn";
import heroImg from "./../../public/images/hero.gif";
import Social from "./Social";

function Hero() {
	return (
		<section
			className='max-width-container flex flex-col-reverse md:flex-row justify-around items-center mb-[5rem] md:min-h-[90vh]'
			id='home'>
			<div className='w-[90%]  md:w-[40%] flex flex-col gap-[20px]'>
				<div>
					<p className='text-[16px] md:text-[24px] font-medium'>
						Hi, I am Anurag Sinha
						<span className='wave'>👋🏻</span>
					</p>
					<p className='text-[24px] md:text-[40px] font-medium'>
						I am a{" "}
						<span className='text-[#edca2a]'>
							Software Developer
						</span>
					</p>
				</div>

				<p className='text-[14px]'>
					&quot;Crafting digital experiences through elegant design
					and robust development. Passionate about creating intuitive
					user interfaces and engaging user experiences. Leveraging
					cutting-edge technologies to build innovative solutions.
					Dedicated to continuous learning and pushing boundaries.
					Let&apos;s collaborate and bring your vision to life!&quot;
				</p>
				<div className='flex flex-col md:flex-row gap-[10px] '>
					<a
						href='https://drive.google.com/file/d/1nFJiTiQrxP-DFcFQyzD7PTpgMIZfowmF/view?usp=drive_link'
						download>
						<OutlinedBtn btnText='RESUME' />
					</a>

					<a href='#contact'>
						<OutlinedBtn btnText='CONTACT' />
					</a>
				</div>
				<div>
					<Social />
				</div>
			</div>

			<div className='flex justify-center items-center'>
				<img
					className='h-[250px] w-[250px] md:h-[600px] md:w-[600px]'
					src={heroImg}
					alt=''
				/>
			</div>
		</section>
	);
}

export default Hero;
