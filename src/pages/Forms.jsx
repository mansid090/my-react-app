import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Forms() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-stone-900">
          Contact Form
        </h1>

        <Input
          label="Name"
          id="name"
          type="text"
          placeholder="Enter your name"
          required
        />

        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />

          <Input
        label="Phone Number"
        id="name"
        type="tel"
        placeholder="Enter your Phone Number"
        required
        
        />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />

       
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm text-stone-700">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your message"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-stone-800 transition"
        >
          Submit
        </Button>
      </form>
    </main>
  );
}
