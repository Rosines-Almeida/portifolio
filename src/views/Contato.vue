<template>
  <div class="container-contact bg-dots">
    <div class="contact-image">
      <img src="../assets/contato.png" alt="lanpada" />
    </div>
    <div class="contact-links">
      <div
        class="box-contatos"
        v-for="(contact, index) in contacts"
        v-bind:key="index"
      >
        <div class="contact">
          <i :class="contact.icon"> </i>
          <div class="contact-link">
            <a :href="contact.link" target="_blank"
              >{{ contact.socialMedia }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-contact {
  margin: 0px;
  padding: 0 20px;
  display: flex;
}

.contact-image {
  padding: 5%;
  background: #6f94a9;
}

img {
  margin: 10px 50px;
}

.contact-links {
  margin: 120px 90px;
}

.contact {
  display: flex;
}

.contact div {
  font-size: 1.2em;
  line-height: 60px;
  font-weight: 100;
}

.icon {
  background-repeat: no-repeat;
  height: 32x;
  width: 32px;
  margin: 16px 10px 0px 0px;
}

.ic_linkedin {
  background-image: url("../assets/ic_linkedin_004.png");
}

.ic_email {
  background-image: url("../assets/ic_email.svg");
}

.ic_gitHub {
  background-image: url("../assets/ic_gitHub.svg");
}

@media screen and (max-width: 1022px) {
  img {
    width: 80%;
  }
}

@media screen and (max-width: 745px) {
  .contact-image {
    display: none;
  }
  .contact-links {
    background-image: url("../assets/contato.png");
    mix-blend-mode: color-burn;
    width: 100%;
    min-height: 390px;
    background-repeat: no-repeat;
    margin: 35px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center;
  }
  a {
    color: black;
    font-weight: 550;
  }
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