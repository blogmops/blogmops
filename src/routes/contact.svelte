<style lang="scss">
  h1 {
    text-align: center;
  }
  label {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
  .container {
    width: 50%;
  }
  form {
    margin: 0;
    padding: 0;
  }
  input,
  textarea {
    padding: 10px 5px;
    font-size: 16px;
    border: 2px solid #dedede;
    border-radius: 5px;
    max-width: 100%;
  }
  .button-container {
    text-align: right;
  }
  .button {
    cursor: pointer;
    background: #dedede;
    border-radius: 5px;
    font-size: 16px;
    padding: 8px 20px;
  }
  .button:hover,
  .button:focus,
  .button:active {
    background: #cdcdcd;
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="container">
  <h1>Contact Page</h1>

  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>
        Your Name:
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email:
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Message:
        <textarea name="message" rows="8" />
      </label>
    </p>
    <p class="button-container">
      <button class="button" type="submit">Contact Us</button>
    </p>
  </form>
</div>
