import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        username: this.get('username'),
        post: this.get('post'),
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
