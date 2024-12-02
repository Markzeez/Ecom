function Contactus() {
  return (
    <div className="flex flex-row justify-center mt-2 gap-5">
      <div>
        <h1>say hi to the team</h1>
        <h1>Contact Us</h1>
        <p>
          feel free to contact us and we will get back to you as soon as we can
        </p>
        <div className="flex flex-col justify-center">
          <form action="">
            <input type="text" name="" id="" placeholder="name" />

            <input type="text" name="" id="" placeholder="email address" />
            <input
              type="text"
              name=""
              id=""
              placeholder="tell us all about it"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <p>openinng hours</p>
          <p>Monday - Friday</p>
          <p>9am - 5am</p>
          <p>Weekend</p>
          <p>Closed</p>{' '}
          
        </div>
        <div className="flex flex-col">
          <p>address</p>
          <p>No 8 Adedosu Street Lagos</p>
          <p>9am - 5am</p>
          
          
        </div>
      </div>
    </div>
  );
}

export default Contactus;
