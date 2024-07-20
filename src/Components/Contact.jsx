import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
	const navigate = useNavigate();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_q9p54a8",
				"template_0p5spc6",
				e.target,
				"MmZTDeDK-Kj4EneIh"
			)
			.then(
				result => {
					console.log(result.text);
					navigate("/thank-you");
				},
				error => {
					console.log(error.text);
					alert("Failed to send message.");
				}
			);
	};

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
			<form onSubmit={sendEmail}>
				<div className='flex flex-col justify-center items-center gap-[10px]'>
					<div className='flex flex-col w-[300px] md:w-[500px]'>
						<label htmlFor='name'>NAME</label>
						<input
							className='h-[35px] bg-[#002244] border-[1px] p-[10px]'
							type='text'
							id='name'
							name='name'
							required
						/>
					</div>

					<div className='flex flex-col w-[300px] md:w-[500px]'>
						<label htmlFor='email'>EMAIL</label>
						<input
							className='h-[35px] bg-[#002244] border-[1px] p-[10px]'
							type='email'
							id='email'
							name='email'
							required
						/>
					</div>

					<div className='flex flex-col w-[300px] md:w-[500px]'>
						<label htmlFor='message'>MESSAGE</label>
						<textarea
							className='bg-[#002244] border-[1px] p-[10px]'
							id='message'
							name='message'
							cols='20'
							rows='10'
							required
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
