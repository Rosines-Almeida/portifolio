<template>
  <footer>
    <ul
      v-for="(contact, index) in contacts"
      v-bind:key="index"
      class="contact-links"
    >
      <li class="contact">
        <i :class="contact.icon">
          <a :href="contact.link" target="_blank"></a>
        </i>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: end;
  background-color: #505659;
  width: 100%; 
  bottom: 0;
  left: 0;
  padding: 10px 0 5px 0;
}

ul {
  align-self: center;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}

.icon {
  background-repeat: no-repeat;
  height: 33px;
  width: 32px;
  margin: 0px 10px 0px 0px;
}

.ic_linkedin {
  background-image: url("../assets/002-linkedin.png");
}

.ic_email {
  background-image: url("../assets/001-email.png");
}

.ic_gitHub {
  background-image: url("../assets/003-github.png");
}

.contact {
  display: flex;
  padding: 0 10px;
}

</style>

<script>
import data from "@/mixins/data.js";

export default {
  created() {
    this.contacts = data.contact;
  },
};
</script>