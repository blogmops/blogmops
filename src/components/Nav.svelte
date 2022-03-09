<script>
  export let segment;
</script>

<style>
  nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0 2rem;
    width: 50%;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: block;
    float: left;
  }
  span {
    margin-right: 0.8rem;
  }

  .logo {
    font-size: 1.2rem;
    vertical-align: text-bottom;
    margin-right: 10px;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }
</style>

<nav>
  <a class:selected={segment === undefined} href="." class="logo">
    <img class="logo" src="logo-32.png" alt="Logo for blogmops." /> blogmops
  </a>
  <ul>
    <li>
      <a class:selected={segment === 'about'} href="about">About</a>
    </li>
    <li>
      <a class:selected={segment === 'contact'} href="contact">Contact</a>
    </li>
  </ul>
</nav>
