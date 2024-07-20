import skillsHero from "./../../public/images/skillsHero.gif";
import { skillsData } from "./../data/skillsData";

const chunkArray = (arr, size) => {
	const result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
};

function Skills() {
	const skillsChunks = chunkArray(skillsData, 4);

	return (
		<section
			className='flex flex-col justify-center items-center gap-[30px] h-screen'
			id='skills'>
			<div>
				<div className='text-[24px] md:text-[40px] text-center'>
					SKILLS
				</div>
				<p className='text-[16px] border-b-2 pb-2'>
					Technologies I&apos;ve worked with
				</p>
			</div>

			<div className='flex flex-col md:flex-row justify-around items-center gap-[20px] w-[80%]'>
				<div className=''>
					<img
						className='h-[300px] w-[300px] md:h-[400px] md:w-[400px]'
						src={skillsHero}
						alt='Skills Hero'
					/>
				</div>
				<div className='flex flex-col gap-[30px]'>
					{skillsChunks.map((chunk, chunkIndex) => (
						<div key={chunkIndex}>
							<div className='flex gap-[40px]'>
								{chunk.map((skill, index) => (
									<div
										key={index}
										className='flex justify-center items-center transition-transform duration-300 ease-out transform hover:scale-[1.2] bg-[#fff] rounded-full h-[50px] w-[50px] md:h-[100px] md:w-[100px]'>
										<img
											className='w-[30px] h-[30px] md:w-[60px] md:h-[60px]'
											src={skill.image}
											alt='Skill'
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
