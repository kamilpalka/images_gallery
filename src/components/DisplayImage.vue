<template>
  <li>
    <div>
      <header>
        <h1>{{ title }}</h1>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ["title", "description", "link"],
};
</script>
