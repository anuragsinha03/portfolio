import skillHero from "./../../public/images/skillsHero.gif";
import openProject from "./../../public/images/openProject.png";
import github from "./../../public/images/github.png";

function Projects() {
	return (
		<div
			className='md:h-screen flex flex-col gap-[50px]'
			id='projects'>
			<div className='flex flex-col justify-center items-center'>
				<div className='text-[24px] md:text-[40px]'>PROJECTS</div>
				<p className=' border-b-2 pb-2'>Things I&apos;ve built</p>
			</div>

			<div className='flex flex-col md:flex-row justify-center items-center gap-[50px] '>
				<div className='flex flex-col justify-center items-center border-[1px] w-[300px] h-[400px] md:w-[350px] md:h-[550px] p-4 gap-[10px] hover:scale-[1.05] '>
					<div className=''>
						<img
							className='w-[150px] h-[150px]'
							src={skillHero}
							alt=''
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-center text-[24px] md:text-[28px] font-medium'>
							Money Tracker
						</div>
						<p className='text-justify text-[14px] md:text-[16px] font-light'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eveniet magni omnis dolor quae facere esse
							eligendi ex blanditiis praesentium impedit
							aspernatur eius consequuntur est minima asd{" "}
						</p>
						<div className='flex gap-[15px]'>
							<button className=''>
								<img
									className='w-[20px] md:w-[25px]'
									src={github}
									alt=''
								/>
							</button>
							<button className=''>
								<img
									className='w-[20px] md:w-[25px]'
									src={openProject}
									alt=''
								/>
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center border-[1px] w-[300px] h-[400px] md:w-[350px] md:h-[550px] p-4 gap-[10px] hover:scale-[1.05] '>
					<div className=''>
						<img
							className='w-[150px] h-[150px]'
							src={skillHero}
							alt=''
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-center text-[24px] md:text-[28px] font-medium'>
							Money Tracker
						</div>
						<p className='text-justify text-[14px] md:text-[16px] font-light'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eveniet magni omnis dolor quae facere esse
							eligendi ex blanditiis praesentium impedit
							aspernatur eius consequuntur est minima asd{" "}
						</p>
						<div className='flex gap-[15px]'>
							<button className=''>
								<img
									className='w-[20px] md:w-[25px]'
									src={github}
									alt=''
								/>
							</button>
							<button className=''>
								<img
									className='w-[20px] md:w-[25px]'
									src={openProject}
									alt=''
								/>
							</button>
						</div>
					</div>
				</div>

				<div className='flex flex-col justify-center items-center border-[1px] w-[300px] h-[400px] md:w-[350px] md:h-[550px] p-4 gap-[10px] hover:scale-[1.05] '>
					<div className=''>
						<img
							className='w-[150px] h-[150px]'
							src={skillHero}
							alt=''
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-center text-[24px] md:text-[28px] font-medium'>
							Money Tracker
						</div>
						<p className='text-justify text-[14px] md:text-[16px] font-light'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eveniet magni omnis dolor quae facere esse
							eligendi ex blanditiis praesentium impedit
							aspernatur eius consequuntur est minima asd{" "}
						</p>
						<div className='flex gap-[15px]'>
							<button className=''>
								<img
									className='w-[20px] md:w-[25px]'
									src={github}
									alt=''
								/>
							</button>
							<button className=''>
								<img
									className='w-[20px] md:w-[25px]'
									src={openProject}
									alt=''
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
