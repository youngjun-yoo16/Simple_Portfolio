<template>
  <div id="app">
    <b-img 
    src="./assets/profile_pic.jpg" 
    rounded 
    width="200px" 
    alt="Photo of Youngjun Yoo">
    </b-img>
    <h1>Youngjun Yoo</h1>
    <p>Hello, my name is Jun, and I am a Computer Science student at 
      Purdue University.
    </p>

    <b-container>
      <b-button variant="primary" href="https://github.com/youngjun-yoo16">GitHub</b-button>
      <b-button variant="primary" href="https://www.linkedin.com/in/youngjun-yoo/">LinkedIn</b-button>
    </b-container>

    <h2>Projects</h2>
    <b-card-group columns class="d-flex justify-content-center flex-wrap">
      <b-card title="Music Analyzer">
        Created a program in Java to analyze musical artists and their songs and
        output relationship data to the user.
      </b-card>
      <b-card title="Residence Hall Manager">
        Created an application in Java to track student information for Purdue
        residence halls.
      </b-card>
    </b-card-group>

    <h2>Contact Me</h2>
    <b-container class="form-container d-flex justify-content-center">
      <b-form action="https://formspree.io/f/{form_id}" method="POST">
        <b-form-group label="Your name:" label-for="name">
          <b-form-input name="name" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group label="Your email:" label-for="email">
          <b-form-input name="email" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group label="Your message:" label-for="message">
          <b-form-textarea
            name="message"
            rows="3"
            max-rows="6"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  margin: 50px;
  text-align: center;
}

#app h2 {
  margin-top: 1em;
}

#app form {
  width: 30em;
  text-align: left;
}

#app .card {
  max-width: 20em;
}
</style>
