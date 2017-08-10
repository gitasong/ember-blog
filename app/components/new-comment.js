import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        username: this.get('username')
      };
      this.set('addNewComment', false);
      this.sendAction('saveReview', params);
    }
  }
});
