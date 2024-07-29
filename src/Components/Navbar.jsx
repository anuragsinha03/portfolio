import { useState, useEffect } from "react";
import OutlinedBtn from "./OutlinedBtn";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		// Lock scroll when menu is open
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMobileMenuOpen]);

	return (
		<div>
			{/* Desktop View */}
			<nav className='hidden sm:flex items-center justify-around bg-[#002244]/[.25] h-[100px]'>
				<div>
					<Logo />
				</div>
				<div className='flex justify-center items-center gap-[50px] text-[18px] h-[40px]'>
					<a
						href='#home'
						className='relative p-[3px] hover:after:scale-x-100 after:content-[""] after:block after:h-[2px] after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:origin-bottom-left after:scale-x-0'>
						HOME
					</a>
					<a
						href='#skills'
						className='relative p-[3px] hover:after:scale-x-100 after:content-[""] after:block after:h-[2px] after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:origin-bottom-left after:scale-x-0'>
						SKILLS
					</a>
					<a
						href='#projects'
						className='relative p-[3px] hover:after:scale-x-100 after:content-[""] after:block after:h-[2px] after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:origin-bottom-left after:scale-x-0'>
						PROJECTS
					</a>
					<a
						href='#contact'
						className='relative p-[3px] hover:after:scale-x-100 after:content-[""] after:block after:h-[2px] after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:origin-bottom-left after:scale-x-0'>
						CONTACT
					</a>
					<a
						href='https://drive.google.com/file/d/1nFJiTiQrxP-DFcFQyzD7PTpgMIZfowmF/view?usp=drive_link'
						download>
						<OutlinedBtn btnText='RESUME' />
					</a>
				</div>
			</nav>

			{/* Mobile View */}
			<nav className='sm:hidden flex items-center justify-around bg-[#002244]/[.25] h-[100px]'>
				<div>
					<Logo />
				</div>
				<div>
					<button onClick={toggleMobileMenu}>
						<FontAwesomeIcon
							icon={isMobileMenuOpen ? faTimes : faBars}
							className='w-7 h-7'
						/>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`sm:hidden fixed top-[100px] left-0 right-0 bg-[#002244] transition-all duration-300 ease-in-out ${
					isMobileMenuOpen
						? "max-h-[100vh] z-50"
						: "max-h-0 overflow-hidden z-0"
				}`}>
				<div className='flex flex-col items-center justify-center h-[calc(100vh-100px)]'>
					<a
						href='#home'
						className='p-2 hover:border-b-2'
						onClick={toggleMobileMenu}>
						HOME
					</a>
					<a
						href='#skills'
						className='p-2 hover:border-b-2'
						onClick={toggleMobileMenu}>
						SKILLS
					</a>
					<a
						href='#projects'
						className='p-2 hover:border-b-2'
						onClick={toggleMobileMenu}>
						PROJECTS
					</a>
					<a
						href='#contact'
						className='p-2 hover:border-b-2'
						onClick={toggleMobileMenu}>
						CONTACT
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
