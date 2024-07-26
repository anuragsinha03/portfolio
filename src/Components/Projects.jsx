import skillHero from "./../../public/images/skillsHero.gif";
import openProject from "./../../public/images/openProject.png";
import github from "./../../public/images/github.png";
import { projectsData } from "./../data/projectsData";

function Projects() {
	return (
		<div
			className='md:h-screen flex flex-col gap-[50px]'
			id='projects'>
			<div className='flex flex-col justify-center items-center'>
				<div className='text-[24px] md:text-[40px]'>PROJECTS</div>
				<p className='border-b-2 pb-2'>Things I&apos;ve built</p>
			</div>

			<div className='flex flex-col md:flex-row justify-center items-center gap-[50px]'>
				{projectsData.map((project, index) => (
					<div
						key={index}
						className='flex flex-col justify-center items-center border-[1px] w-[300px] h-[420px] md:w-[350px] md:h-[500px] p-4 gap-[10px] hover:scale-[1.05] transition-transform duration-300 ease-out'>
						<div>
							<img
								className='w-[8rem] h-[8rem]'
								src={skillHero}
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-1'>
							<div className='text-center text-[24px] md:text-[28px] font-medium'>
								{project.name}
							</div>
							<div className='text-center text-slate-400'>
								{project.subtitle}
							</div>
							<p className='text-justify text-[14px] md:text-[16px] font-light'>
								{project.description}
							</p>
							<div className='flex gap-[15px] my-[1rem] justify-center'>
								<button>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'>
										<img
											className='w-[20px] md:w-[25px]'
											src={github}
											alt=''
										/>
									</a>
								</button>
								{project.production && (
									<button>
										<a
											href={project.production}
											target='_blank'
											rel='noopener noreferrer'>
											<img
												className='w-[20px] md:w-[25px]'
												src={openProject}
												alt=''
											/>
										</a>
									</button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
