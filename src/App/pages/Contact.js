{/* Contact Container */}
<div className="flex h-screen w-full justify-center items-center bg-light-background">
<div className="flex flex-col h-screen w-full justify-center items-center">

    {/* Contact Text */}
    <h1 className="text-4xl lg:text-9xl md:text-8xl sm:text-6xl text-dark-background uppercase font-bold mb-16">Contact Me</h1>

    {/* Contact Form */}
    <div className="flex flex-col bg-light-dashboard w-80 lg:w-about md:w-96 sm:w-80 shadow-xl rounded-md p-5">
        <p className="text-center">Please fill out all sections</p>
        <input className="h-12 w-full my-2 px-4 rounded-md" type="text" placeholder="John Doe" required></input>
        <input className="h-12 w-full my-2 px-4 rounded-md" type="email" placeholder="johndoe@email.com" required></input>
        <textarea className="h-36 w-full my-2 p-4 rounded-md" placeholder="Message" style={{ resize: "none"}} required></textarea>
        <input className="h-12 w-full my-2 px-4 rounded-md text-white font-bold uppercase bg-light-action" type="submit" id="send" value="Send"></input>
    </div>
</div>
</div>