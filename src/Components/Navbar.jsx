import OutlinedBtn from "./OutlinedBtn";
import Logo from "./Logo";

function Navbar() {
	return (
		<div>
			<nav className='flex items-center justify-around bg-[#D9D9D9]/[.25] h-[100px] '>
				<div>
					<Logo />
				</div>
				<div className='flex gap-[50px] text-[18px] h-[40px]'>
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
				</div>

				<div>
					<a
						href='https://drive.google.com/file/d/14WLe_bifwuyY7sFhnoDzFf-fBe5uhUb0/view?usp=drive_link'
						download>
						<OutlinedBtn btnText='RESUME' />
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
