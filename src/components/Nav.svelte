<script>
  export let segment;
</script>

<style lang="scss">
  nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0 2rem;
    width: 50%;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.2rem;
    span {
      font-weight: bold;
    }
  }

  ul {
    margin: 0;
    padding: 0;

    /* clearfix */
    &::after {
      content: '';
      display: block;
      clear: both;
    }

    li {
      display: block;
      float: left;
    }
  }

  .selected {
    position: relative;
    display: inline-block;

    &::after {
      position: absolute;
      content: '';
      width: calc(100% - 1em);
      height: 2px;
      background-color: rgb(255, 62, 0);
      display: block;
      bottom: -1px;
    }
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <a class:selected={segment === undefined} href="." class="logo">🐶 blogmops</a>
  <ul>
    <li>
      <a class:selected={segment === 'about'} href="about">About</a>
    </li>
    <li>
      <a class:selected={segment === 'contact'} href="contact">Contact</a>
    </li>
  </ul>
</nav>
