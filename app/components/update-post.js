import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : "",
        teaser: this.get('teaser') ? this.get('teaser') : "",
        fulltext: this.get('fulltext') ? this.get('fulltext') : "",
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
