import skillsHero from "./../../public/images/skillsHero.gif";
import html from "./../../public/images/html.png";
import css from "./../../public/images/css.png";
import js from "./../../public/images/js.png";
import react from "./../../public/images/react.png";
import node from "./../../public/images/node.png";
import express from "./../../public/images/express.png";
import mongo from "./../../public/images/mongo.png";
import mongoose from "./../../public/images/mongoose.png";
import tailwind from "./../../public/images/tailwind.png";
import postman from "./../../public/images/postman.png";
function Skills() {
	return (
		<section
			className='flex flex-col justify-center items-center gap-[30px] h-screen '
			id='skills'>
			<div>
				<div className='text-[40px] text-center'>SKILLS</div>
				<p className='border-b-2 pb-2'>
					Technologies I&apos;ve worked with
				</p>
			</div>

			<div className='flex justify-around items-center gap-[20px] w-[80%] '>
				<div className=''>
					<img
						className='h-[400px] w-[400px]'
						src={skillsHero}
						alt=''
					/>
				</div>
				<div className='flex flex-col gap-[30px]'>
					<div>
						<div className='flex gap-[40px]'>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={html}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full  h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={css}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full  h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={js}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={react}
									alt=''
								/>
							</div>
						</div>
					</div>

					<div>
						<div className='flex gap-[40px]'>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={node}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full  h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={express}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full  h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={mongo}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[60px]'
									src={mongoose}
									alt=''
								/>
							</div>
						</div>
					</div>
					<div>
						<div className='flex gap-[40px]'>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[60px] h-[40px]'
									src={tailwind}
									alt=''
								/>
							</div>
							<div className='flex justify-center items-center hover:scale-[1.2] bg-[#fff] rounded-full  h-[100px] w-[100px]'>
								{" "}
								<img
									className='w-[80px] h-[60px]'
									src={postman}
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
