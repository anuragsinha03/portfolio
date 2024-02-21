import OutlinedBtn from "./OutlinedBtn";
import heroImg from "./../../public/images/skillsHero.gif";
import Social from "./Social";

function Hero() {
	return (
		<section
			className='flex justify-around items-center h-[90vh]'
			id='home'>
			<div className='w-[40%] flex flex-col gap-[20px]'>
				<div>
					<p className='text-[24px] font-medium'>
						Hi, I am Anurag Sinha
						<span className='wave'>👋🏻</span>
					</p>
					<p className='text-[40px] font-medium'>
						I am a{" "}
						<span className='text-[#edca2a]'>Web developer</span>
					</p>
				</div>

				<p>
					&quot;Crafting digital experiences through elegant design
					and robust development. Passionate about creating intuitive
					user interfaces and engaging user experiences. Leveraging
					cutting-edge technologies to build innovative solutions.
					Dedicated to continuous learning and pushing boundaries.
					Let&apos;s collaborate and bring your vision to life!&quot;
				</p>

				<div className='flex gap-[10px] '>
					<a
						href='https://drive.google.com/file/d/14WLe_bifwuyY7sFhnoDzFf-fBe5uhUb0/view?usp=drive_link'
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

			<div className='flex justify-center items-center '>
				<img
					className='h-[600px] w-[600px]'
					src={heroImg}
					alt=''
				/>
			</div>
		</section>
	);
}

export default Hero;
