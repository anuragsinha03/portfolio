import { useState } from "react";
import OutlinedBtn from "./OutlinedBtn";
import Logo from "./Logo";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div>
			{/* Desktop View */}
			<nav className='hidden sm:flex items-center justify-around bg-[#D9D9D9]/[.25] h-[100px]'>
				<div>
					<Logo />
				</div>
				<div className='flex justify-center items-center gap-[50px] text-[18px] h-[40px]'>
					<a
						href='#home'
						className='p-[3px] hover:border-b-2'>
						HOME
					</a>
					<a
						href='#skills'
						className='p-[3px] hover:border-b-2'>
						SKILLS
					</a>
					<a
						href='#projects'
						className='p-[3px] hover:border-b-2'>
						PROJECTS
					</a>
					<a
						href='#contact'
						className='p-[3px] hover:border-b-2'>
						CONTACT
					</a>
					<a
						href='https://drive.google.com/file/d/1cbSfm4-eA9fxP6GIadJmOIiwbSfxvgMH/view'
						download>
						<OutlinedBtn btnText='RESUME' />
					</a>
				</div>
			</nav>

			{/* Mobile View */}
			<nav className='sm:hidden flex items-center justify-around bg-[#D9D9D9]/[.25] h-[100px]'>
				<div>
					<Logo />
				</div>
				<div>
					<button onClick={toggleMobileMenu}>
						{/* Hamburger Icon */}
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='sm:hidden flex flex-col items-center justify-center bg-[#002244]/[.25] h-[100vh]'>
					<a
						href='#home'
						className='p-2 hover:border-b-2'>
						HOME
					</a>
					<a
						href='#skills'
						className='p-2 hover:border-b-2'>
						SKILLS
					</a>
					<a
						href='#projects'
						className='p-2 hover:border-b-2'>
						PROJECTS
					</a>
					<a
						href='#contact'
						className='p-2 hover:border-b-2'>
						CONTACT
					</a>
				</div>
			)}
		</div>
	);
}

export default Navbar;
