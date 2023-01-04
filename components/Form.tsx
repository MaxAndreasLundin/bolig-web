"use client";

import { FormEvent } from "react";

export default function PageWithJSbasedForm() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      last: form.last.value as string,
    };

    // Send the form data to our API and get a response.
    const response = await fetch("/api/form", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    <div className="p-5 content-center justify-center flex">
      <form onSubmit={handleSubmit} className="m-3">
        <label htmlFor="first" className="m-3">
          First Name
        </label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="last" className="m-3">
          Last Name
        </label>
        <input type="text" id="last" name="last" required />
        <button type="submit" className="m-3">
          Submit
        </button>
      </form>
    </div>
  );
}
