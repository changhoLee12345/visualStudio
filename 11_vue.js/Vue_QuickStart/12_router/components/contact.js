import contactlist from '../assets/contactlist.js';

const template = `
<div>
  <h1>Contact</h1>
  <div class="wrapper">
    <div class="box" v-for="c in contacts" v-bind:key="c.no">
      <router-link v-bind:to="'/contact/'+c.no">{{c.name}}</router-link>
    </div>
  </div>
  <router-view></router-view>
</div>
`;

export default {
  name: 'contact',
  data: function () {
    return {
      contacts: contactlist.contacts
    }
  },
  template
}