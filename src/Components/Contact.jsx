function Contact() {
	return (
		<section
			className='flex flex-col justify-center items-center gap-[50px] h-screen'
			id='contact'>
			<div className='flex flex-col justify-center items-center'>
				<div className='text-[24px] md:text-[40px]'>CONTACT ME</div>
				<p className='border-b-[2px] pb-2'>
					Reach out to me via a message
				</p>
			</div>
			<form action=''>
				<div className='flex flex-col justify-center items-center gap-[10px]'>
					<div className='flex flex-col w-[300px] md:w-[500px]'>
						<label htmlFor='username'>NAME</label>
						<input
							className='h-[35px] bg-[#002244] border-[1px] p-[10px]'
							type='text'
							id='username'
						/>
					</div>

					<div className='flex flex-col w-[300px] md:w-[500px]'>
						<label htmlFor='email'>EMAIL</label>
						<input
							className='h-[35px] bg-[#002244] border-[1px] p-[10px]'
							type='email'
							id='email'
						/>
					</div>

					<div className='flex flex-col w-[300px] md:w-[500px]'>
						<label htmlFor='message'>MESSAGE</label>
						<textarea
							className='bg-[#002244] border-[1px] p-[10px]'
							id='message'
							cols='20'
							rows='10'
						/>
					</div>

					<div className='flex justify-center w-[300px] md:w-[500px] bg-[#eda22a] hover:bg-[#ff9b30]'>
						<input
							className='h-[50px] text-[22px] text-[#000]'
							type='submit'
							value='SUBMIT'
						/>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Contact;
