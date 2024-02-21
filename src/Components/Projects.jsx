import skillHero from "./../../public/images/skillsHero.gif";
import openProject from "./../../public/images/openProject.png";
import github from "./../../public/images/github.png";

function Projects() {
	return (
		<div
			className='h-screen flex flex-col gap-[50px]'
			id='projects'>
			<div className='flex flex-col justify-center items-center'>
				<div className='text-[40px]'>PROJECTS</div>
				<p className='border-b-2 pb-2'>Things I&apos;ve built</p>
			</div>

			<div className='flex justify-center items-center gap-[50px] '>
				<div className='flex flex-col border-[1px] w-[350px] h-[550px] p-4 gap-[10px] hover:scale-[1.05] '>
					<div className=''>
						<img
							src={skillHero}
							alt=''
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-center text-[28px] font-medium'>
							Money Tracker
						</div>
						<p className='text-justify text-[16px] font-light'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eveniet magni omnis dolor quae facere esse
							eligendi ex blanditiis praesentium impedit
							aspernatur eius consequuntur est minima
						</p>
						<div className='flex gap-[15px]'>
							<button className=''>
								<img
									className='w-[25px]'
									src={github}
									alt=''
								/>
							</button>
							<button className=''>
								<img
									className='w-[20px]'
									src={openProject}
									alt=''
								/>
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col border-[1px] w-[350px] h-[550px] p-4 gap-[10px] hover:scale-[1.05] '>
					<div className=''>
						<img
							src={skillHero}
							alt=''
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-center text-[28px] font-medium'>
							Money Tracker
						</div>
						<p className='text-justify text-[16px] font-light'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eveniet magni omnis dolor quae facere esse
							eligendi ex blanditiis praesentium impedit
							aspernatur eius consequuntur est minima
						</p>
						<div className='flex gap-[15px]'>
							<button className=''>
								<img
									className='w-[25px]'
									src={github}
									alt=''
								/>
							</button>
							<button className=''>
								<img
									className='w-[20px]'
									src={openProject}
									alt=''
								/>
							</button>
						</div>
					</div>
				</div>

				<div className='flex flex-col border-[1px] w-[350px] h-[550px] p-4 gap-[10px] hover:scale-[1.05]'>
					<div className=''>
						<img
							src={skillHero}
							alt=''
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-center text-[28px] font-medium'>
							Money Tracker
						</div>
						<p className='text-justify text-[16px] font-light'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eveniet magni omnis dolor quae facere esse
							eligendi ex blanditiis praesentium impedit
							aspernatur eius consequuntur est minima
						</p>
						<div className='flex gap-[15px]'>
							<button className=''>
								<img
									className='w-[25px]'
									src={github}
									alt=''
								/>
							</button>
							<button className=''>
								<img
									className='w-[20px]'
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
