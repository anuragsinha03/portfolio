import { useState } from "react";
import { academicData } from "../data/academicData";

function Academics() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = index => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className='flex flex-col justify-center items-center gap-[30px] mb-[5rem] md:max-h-[100vh]'>
			<div className='flex flex-col gap-[20px] max-w-[90vw]'>
				<div>
					<div className='text-[24px] md:text-[40px] text-center'>
						ACADEMIC BACKGROUND
					</div>
					<p className='text-center text-[16px] border-b-2 pb-2'>
						Have a look at my academic journey!
					</p>
				</div>
				<div className='flex flex-col gap-5 w-full'>
					{academicData.map((academic, index) => (
						<div
							key={index}
							className='border-white bg-[#D9D9D9]/[.25] rounded-lg px-[10px] py-[15px]'>
							<div className='flex justify-between items-center md:px-[2rem]'>
								<div>
									<div className='text-lg'>
										{academic.degreeName}
									</div>
									<div className='text-sm text-slate-400'>
										{academic.institution}
									</div>
									<div className='text-sm text-slate-400'>
										{academic.batch}
									</div>
								</div>
								<button
									className='text-blue-500'
									onClick={() => toggleAccordion(index)}>
									{openIndex === index ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											className='w-6 h-6'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 15l7-7 7 7'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											className='w-6 h-6'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									)}
								</button>
							</div>
							<div
								className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out md:px-[2rem] ${
									openIndex === index
										? "max-h-[1000px]"
										: "max-h-0"
								}`}>
								<h2 className='text-lg font-semibold'>
									Details:
								</h2>
								<p className='text-sm mt-2'>
									Aggregate{" "}
									<span className='font-bold'>
										CGPA: {academic.cgpa}
									</span>
								</p>
								{academic.details.map((detail, detailIndex) => (
									<p
										key={detailIndex}
										className='text-sm mt-2'>
										- {detail}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Academics;
